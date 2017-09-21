import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { mountWithIntl, loadTranslation } from 'enzyme-react-intl';
import Item from './index';
import i18n from '../../i18n';

const item = {
  id: 'ML1',
  picture: '/path/to/picture',
  title: 'Item Title',
  price: {
    amount: 578,
    currency: 'ARS',
    decimals: 0
  },
  free_shipping: true,
  description: 'Item Description',
  sold_quantity: 3
};

describe('<Item />', () => {
  it('should render <Item />', () => {
    const wrapper = shallow(<Item item={item} />);
    expect(wrapper.find('.ml-item').length).toBe(1);
    expect(
      wrapper.contains(
        <FormattedMessage id="item_sold_quantity" values={{ count: item.sold_quantity}}/>
      )
    ).toBe(true);
    expect(
      wrapper.contains(
        <FormattedNumber
          value={item.price.amount}
          currencyDisplay="symbol"
          currency={item.price.currency}
          style="currency"
          minimumFractionDigits={item.price.decimals}
          maximumFractionDigits={item.price.decimals}
           />
      )
    ).toBe(true);
  });
});
