import React from 'react';
import { shallow, mount } from 'enzyme';
import BoxOffice from '../BoxOffice';
const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<BoxOffice />', () => {
  // give it some props
  const wrapper = shallow(
    <BoxOffice 
      budget={ testMovieData.budget } 
      openingWeekend={ testMovieData.openingWeekend } 
      gross={ testMovieData.gross } 
      cumulative={ testMovieData.cumulative }/>
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders a .heading', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  });

  it('renders a 4 .details-sections', () => {
    expect(wrapper.find('.details-section').length).toBe(4);
  });

  it('renders a 4 .keyword-heading', () => {
    expect(wrapper.find('.keyword-heading').length).toBe(4);
  });

  it('renders a .footer-link', () => {
    expect(wrapper.find('.footer-link').length).toBe(1);
  });
  
});