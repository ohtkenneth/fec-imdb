import React from 'react';
import { shallow } from 'enzyme';

import Credits from '../Credits';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<Credits />', () => {
  const { productionCo, runtime, soundMix, color, aspectRatio } = testMovieData;
  const wrapper = shallow(
    <Credits
      productionCo={ productionCo }
      runtime={ runtime }
      soundMix={ soundMix }
      color={ color }
      aspectRatio={ aspectRatio }
    />
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders 5 .details-section(s)', () => {
    expect(wrapper.find('.details-section').length).toBe(5);
  });

  it('renders 5 .keyword-heading(s)', () => {
    expect(wrapper.find('.keyword-heading').length).toBe(5);
  });
});