import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { mountWithIntl, loadTranslation } from 'enzyme-react-intl';
import Items from './index';
import i18n from '../../i18n';

const items = [
  {
    id: 'ML1',
    picture: '/path/to/picture',
    title: 'Title',
    price: {
      amount: 578,
      currency: 'ARS',
      decimals: 0
    },
    free_shipping: true
  },
  {
    id: 'ML2',
    picture: '/path/to/picture',
    title: 'Title II',
    price: {
      amount: 345,
      currency: 'ARS',
      decimals: 0
    },
    free_shipping: false
  }
];
describe('<Items />', () => {
  it('should render <Items />', () => {
    const wrapper = shallow(<Items items={items} />);
    expect(wrapper.find('.ml-items').length).toBe(1);
    expect(wrapper.find('.ml-items__item').length).toBe(2);
  });
  it('should render first item correctly', () => {
    const wrapper = mountWithIntl(
      <MemoryRouter>
        <Items items={items} />
      </MemoryRouter>
    );
    const node = wrapper.find('.ml-items__item').first();
    expect(node.find('.ml-items__item__text').text()).toBe(items[0].title);
  });
});
