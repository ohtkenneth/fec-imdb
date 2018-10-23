import React from 'react';
import { shallow } from 'enzyme';

import Review from '../Review';

describe('<Review />', () => {
  const wrapper = shallow(<Review />);

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .reviewbody', () => {
    expect(wrapper.find('.reviewbody').length).toBe(1);
  });
});