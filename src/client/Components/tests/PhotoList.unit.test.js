import React from 'react';
import { shallow } from 'enzyme';

import PhotoList from '../PhotoList';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<PhotoList />', () => {
  const { photos } = testMovieData;
  const wrapper = shallow(
    <PhotoList urls={ photos }/>
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .heading', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  });

  it('renders a .photos-container', () => {
    expect(wrapper.find('.photos-container').length).toBe(1);
  });

  it('renders .photo(s) based on the given props', () => {
    expect(wrapper.find('.photo').length).toBe(photos.length);
  });

  it('renders a .footer-link', () => {
    expect(wrapper.find('.footer-link').length).toBe(1);
  });
});