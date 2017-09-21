import React from 'react';
import { FormattedNumber, FormattedMessage } from 'react-intl';

import './item.css';

const Item = ({ item }) => (
  <div className="box ml-box">
    <article className="media ml-item">
      <figure className="media-left">
        <p className="image ml-is-680x680">
          <img src={item.picture} alt={item.title} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="ml-item__subtitlew">
            {(item.condition === 'new') ? <FormattedMessage id="item_condition_new" /> : null}
            {(item.condition !== 'new') ? <FormattedMessage id="item_condition_used" /> : null}
             -
            <FormattedMessage
              id="item_sold_quantity"
              values={{ count: item.sold_quantity}} />
          </p>
          <p className="ml-item__title">{item.title}</p>
          <p className="ml-item__price">
            <FormattedNumber
              value={item.price.amount}
              currencyDisplay="symbol"
              currency={item.price.currency}
              style="currency"
              minimumFractionDigits={item.price.decimals}
              maximumFractionDigits={item.price.decimals}
               />
          </p>
          <p>
            <a className="button is-info is-fullwidth">
              <FormattedMessage id="item_price" />
            </a>
          </p>
        </div>
      </div>
    </article>
    {item.description && (
      <div>
        <h3 className="ml-item__title ml-item__title--big">
          <FormattedMessage id="item_description" />
        </h3>
        <p className="ml-item__description">{item.description}</p>
      </div>
    )}
  </div>
);

export default Item;
