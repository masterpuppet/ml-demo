const qs = require('qs');
const striptags = require('striptags');
const get = require('lodash/get');
const pick = require('lodash/pick');
const request = require('request');

const API_URL = 'https://api.mercadolibre.com';
const API_REQUEST_TTL = 10000;
const API_LIMIT = 4;

const handleResponse = (resolve, reject) => (error, response, body) => {
  if (error) {
    return reject(error);
  }
  try {
    return resolve(JSON.parse(body));
  } catch (ex) {
    return reject(ex);
  }
}

const buildUrl = (path, params = {}) => {
  const query = qs.stringify(params);
  return `${API_URL}${path}${query}`;
};

const decorateRequest = (options) => {
  const defaults = { ttl: API_REQUEST_TTL, headers: { 'content-type': 'application/json' } };
  return new Promise((resolve, reject) => {
    request(Object.assign({}, defaults, options), handleResponse(resolve, reject));
  });
}

const getCategoriesPath = (from, path) => {
  let categories = [];
  try {
    categories = get(from, path).map(c => c.name)
  } catch (e) {
    console.error(e);
  }
  return categories;
}
const itemsTransformer = response => {
  let { results: items, filters: categories } = response;
  return {
    categories: getCategoriesPath(categories, '[0].values[0].path_from_root'),
    items: items.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: (item.price -  Math.floor(item.price))
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: get(item, 'shipping.free_shipping')
    }))
  };
};
const itemTransformer = (item, description, category) => {
  const newItem = {
    categories: getCategoriesPath(category, 'path_from_root'),
    item: Object.assign({
      description: description.plain_text || striptags(description.text),
      free_shipping: get(item, 'shipping.free_shipping'),
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: (item.price -  Math.floor(item.price))
      },
      picture: item.thumbnail
    }, pick(item, ['id', 'title', 'condition', 'sold_quantity', 'pictures']))
  };
  return newItem;
}

const fetchItems = (q, limit = API_LIMIT) => {
  const url = buildUrl('/sites/MLA/search?', { q, limit });
  return decorateRequest({ url }).then(itemsTransformer);
}

const fetchItem = id => {
  const itemUrl = buildUrl(`/items/${id}`);
  const descriptionUrl = buildUrl(`/items/${id}/description`);
  return Promise
    .all([
      decorateRequest({ url: itemUrl }),
      decorateRequest({ url: descriptionUrl }),
    ])
    .then(([item, description]) => {
      const categoryUrl = buildUrl(`/categories/${item.category_id}`);
      return decorateRequest({ url: categoryUrl }).then((category) => {
        return itemTransformer(item, description, category);
      })

    })
}

module.exports = {
  fetchItems,
  fetchItem
};
