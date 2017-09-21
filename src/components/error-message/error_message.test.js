import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './index';

describe('<ErrorMessage />', () => {
  it('should render <ErrorMessage />', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.find('.has-text-danger').length).toBe(1);
  });
});
