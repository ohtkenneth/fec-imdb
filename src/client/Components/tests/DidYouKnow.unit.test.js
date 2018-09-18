import React from 'react';
import { shallow } from 'enzyme';

import DidYouKnow from '../DidYouKnow';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<DidYouKnow />', () => {
  const { trivia, goofs, quotes, crazyCredits, connections, soundtracks } = testMovieData;
  const wrapper = shallow(
    <DidYouKnow
      trivia={ trivia }
      goofs={ goofs }
      quotes={ quotes }
      crazyCredits={ crazyCredits }
      connections={ connections }
      soundtracks={ soundtracks }
    />
  );
  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .heanding', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  });

  it('renders 6 .details-section(s)', () => {
    expect(wrapper.find('.details-section').length).toBe(6);
  });

  it('renders 6 .keyword-heading(s)', () => {
    expect(wrapper.find('.keyword-heading').length).toBe(6);
  });

  // count li for sountracks
  it('renders <li/> for soundtracks with the given props', () => {
    expect(wrapper.find('li').length).toBe(soundtracks.length);
  });
});;