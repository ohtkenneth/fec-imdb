import React from 'react';
import { shallow } from 'enzyme';

import Details from '../Details';
import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<Details />', () => {
  const { aKa, officialSites, languages, country, filmingLocations, releaseDate } = testMovieData;
  const wrapper = shallow(
    <Details 
      aKa={ aKa }
      officialSites={ officialSites }
      languages={ languages }
      country={ country }
      filmingLocations={ filmingLocations }
      releaseDate={ releaseDate }
    />
  );

  it('renders a .container', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('renders 6 .details-section(s)', () => {
    expect(wrapper.find('.details-section').length).toBe(6);
  });

  it('renders 6 .keyword-heading(s)', () => {
    expect(wrapper.find('.keyword-heading').length).toBe(6);
  });

  it('renders 3 .keyword-section(s)', () => {
    expect(wrapper.find('.keyword-section').length).toBe(3);
  });

  // 2 sections with KeyWord components
  it('renders <Keyword />\'s based on the given props (officialSites, languages, filmingLocations', () => {
    const lengthOfficialSites = officialSites.length;
    const lengthLanguages = languages.length;
    const lengthFilmingLocations = filmingLocations.length;

    expect(wrapper.find(KeyWord).length).toBe(lengthOfficialSites + lengthLanguages + lengthFilmingLocations)
  });
});