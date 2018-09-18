import React from 'react';
import { shallow } from 'enzyme';

import FAQ from '../FAQ';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<FAQ />', () => {
  const { faq } = testMovieData;
  const wrapper = shallow(
    <FAQ
      questions={ faq }
    />
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  })

  it('renders a .heading', () => {
    expect(wrapper.find('.heading').length).toBe(1);
  });

  it('renders .question-section(s) based on the given props', () => {
    expect(wrapper.find('.question-section').length).toBe(faq.length);
  })
});