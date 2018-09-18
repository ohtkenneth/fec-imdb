import React from 'react';
import { shallow } from 'enzyme';

import KeyWord from '../KeyWord';

const testMovieData =  require('../../../db/mockdata/mockMovieData.json')[0];

describe('<KeyWord />', () => {
  it('renders a keyword with a .divider if not the last item in a list of keywords (index equals length)', () => {
    const keyword = 'test';
    const index = 0;
    const length = 1;

    const wrapper = shallow(
      <KeyWord 
        keyword={ keyword }
        index={ index }
        length={ length } 
      />
    );
    expect(wrapper.find('.divider').length).toBe(1);
  });

  it('renders a keyword without a .divier if is the last item in a list of keywords (index equals length)', () => {
    const keyword = 'test';
    const index = 1;
    const length = 1;

    const wrapper = shallow(
      <KeyWord 
        keyword={ keyword }
        index={ index }
        length={ length } 
      />
    );

    expect(wrapper.find('.divider').length).toBe(0);
  });
});