import React from 'react';
import { shallow } from 'enzyme';
import CastListItem from '../CastListItem';
const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<CastListItem />', () => {
  const { url, name, character } = testMovieData;
  const wrapper = shallow(
    <CastListItem
      url={ url }
      name={ name }
      character={ character }
    />
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders an .actor-img', () => {
    expect(wrapper.find('.actor-img').length).toBe(1);
  });

  it('renders a .name', () => {
    expect(wrapper.find('.name').length).toBe(1);
  });

  it('renders a .character', () => {
    expect(wrapper.find('.character').length).toBe(1);
  });

  // elipse sepearator between actor and character names
  it('renders a .elipse', () => {
    expect(wrapper.find('.elipse').length).toBe(1);
  });
});