import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .imdb-everywhere-section', () => {
    expect(wrapper.find('.imdb-everywhere-section').length).toBe(1);
  });

  it('renders 2 .heading(s)', () => {
    expect(wrapper.find('.heading').length).toBe(2);
  });

  it('renders 3 .store-button(s)', () => {
    expect(wrapper.find('.store-button').length).toBe(3);
  });

  it('renders a .social-icons-container', () => {
    expect(wrapper.find('.social-icons-container').length).toBe(1);
  });

});