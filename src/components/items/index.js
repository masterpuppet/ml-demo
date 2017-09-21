import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';
import ShippingIcon from './shipping';

import './items.css';

const Items = ({ items }) => (
  <div className="box ml-items">
    {items.map((item) => {
      return (<article className="media ml-items__item" key={item.id}>
          <figure className="media-left">
            <p className="image ml-items__item__image ml-is-180x180">
              <Link to={`/items/${item.id}`}>
                <img src={item.picture} alt={item.title} />
              </Link>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <Link to={`/items/${item.id}`}>
                <p>
                  <FormattedNumber
                    className="ml-items__item__price"
                    value={item.price.amount}
                    currencyDisplay='symbol'
                    currency={item.price.currency}
                    style='currency'
                    minimumFractionDigits={item.price.decimals}
                    maximumFractionDigits={item.price.decimals}
                    >
                    {(price) => (<span className="ml-items__item__price">{price}</span>)}
                  </FormattedNumber>
                  {(item.free_shipping) ? <ShippingIcon /> : null}
                </p>
                <p className="ml-items__item__text">{item.title}</p>
              </Link>
            </div>
          </div>
      </article>)
    })}
  </div>
);

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.string.isRequired,
     price: PropTypes.shape({
       amount: PropTypes.number.isRequired,
       currency: PropTypes.string.isRequired
     }).isRequired,
     picture: PropTypes.string.isRequired,
     free_shipping: PropTypes.bool.isRequired,
   })).isRequired
}

export default Items;
