import React from 'react';
import { shallow } from 'enzyme';
import ShippingIcon from './shipping';

describe('<ShippingIcon />', () => {
  it('should render <ShippingIcon />', () => {
    const wrapper = shallow(<ShippingIcon />);
    expect(wrapper.find('.ml-icon-shipping').length).toBe(1);
  });
});
