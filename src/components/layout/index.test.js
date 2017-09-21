import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';

describe('<Layout />', () => {
  it('should render <Layout />', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.container').length).toBe(1);
    expect(wrapper.find('footer').length).toBe(1);
  });
});
