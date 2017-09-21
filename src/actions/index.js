import fetch from 'isomorphic-fetch';

export const REQUEST_SEARCH_ITEMS = 'REQUEST_SEARCH_ITEMS';
export const REQUEST_SEARCH_ITEMS_ERROR = 'REQUEST_SEARCH_ITEMS_ERROR';
export const RECEIVE_SEARCH_ITEMS = 'RECEIVE_SEARCH_ITEMS';

export const REQUEST_FETCH_ITEM = 'REQUEST_FETCH_ITEM';
export const REQUEST_FETCH_ITEM_ERROR = 'REQUEST_FETCH_ITEM_ERROR';
export const RECEIVE_FETCH_ITEM = 'RECEIVE_FETCH_ITEM';

const API_URL = process.env.API_URL || '';

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const defaultResponseHandler = response => {
	if (response.status >= 400) {
		throw new Error('Bad response from server');
	}
  try {
    return response.json();
  } catch (e) {
    console.error(e);
    throw new Error('Error parsing server response');
  }
}
export const searchItems = query => dispatch => {
  dispatch({ type: REQUEST_SEARCH_ITEMS });
  return fetch(`${API_URL}/api/v1/items${query}`, {
    headers: defaultHeaders
  })
  .then(defaultResponseHandler)
  .then(response => dispatch({
    type: RECEIVE_SEARCH_ITEMS,
    items: response.items,
    categories: response.categories
  }))
  .catch(err => dispatch({ type: REQUEST_SEARCH_ITEMS_ERROR, err }))
}

export const fetchItem = id => dispatch => {
  dispatch({ type: REQUEST_FETCH_ITEM });
  return fetch(`${API_URL}/api/v1/items/${id}`, {
    headers: defaultHeaders
  })
  .then(defaultResponseHandler)
  .then(response => dispatch({
    type: RECEIVE_FETCH_ITEM,
    item: response.item,
    categories: response.categories
  }))
  .catch(err => dispatch({ type: REQUEST_FETCH_ITEM_ERROR, err }))
}
