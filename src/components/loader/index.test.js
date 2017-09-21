import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('<Loader />', () => {
  it('should render <Loader />', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('.is-loading').length).toBe(1);
  });
});
