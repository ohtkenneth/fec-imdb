import React from 'react';
import { shallow, mount } from 'enzyme';
import CastList from '../CastList';
import CastListItem from '../CastListItem';
const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<CastList />', () => {
  const wrapper = shallow(
    <CastList
      cast={ testMovieData.cast }
    />
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .heading', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  })

  it('renders a .cast-list-container', () => {
    expect(wrapper.find('.cast-list-container').length).toBe(1);
  });

  it('renders a .footer-link', () => {
    expect(wrapper.find('.footer-link').length).toBe(1);
  });

  it('renders <CastLastItem/>\'s based on the given cast props', () => {
    // given cast length is through props
    expect(wrapper.find(CastListItem).length).toBe(testMovieData.cast.length);
  })
});