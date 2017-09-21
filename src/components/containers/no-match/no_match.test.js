import React from 'react';
import { shallow } from 'enzyme';
import NoMatchContainer from './index';

describe('<NoMatchContainer />', () => {
  it('should render <NoMatchContainer />', () => {
    const wrapper = shallow(<NoMatchContainer  />);
    expect(wrapper.find('.notification').length).toBe(1);
  });
});
