import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './index';

const breadcrumbs = ['Taxon I', 'Taxon II'];
describe('<Breadcrumb />', () => {
  it('should render <Breadcrumb />', () => {
    const wrapper = shallow(<Breadcrumb breadcrumbs={breadcrumbs} />);
    expect(wrapper.find('.ml-breadcrumb').length).toBe(1);
    expect(wrapper.find('.ml-breadcrumb ul li').length).toBe(2);
  });
});
