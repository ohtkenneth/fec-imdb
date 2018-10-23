import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import App from '../App.jsx';

import PhotoList from '../PhotoList.jsx';
import CastList from '../CastList.jsx';
import Storyline from '../Storyline.jsx';
import Details from '../Details.jsx';
import Contribute from '../Contribute.jsx';
import BoxOffice from '../BoxOffice.jsx';
import DidYouKnow from '../DidYouKnow.jsx';
import FAQ from '../FAQ.jsx';
import Footer from '../Footer.jsx';

describe('<App />', () => {
  it ('renders all seven child components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PhotoList)).to.be.true;
    expect(wrapper.find(CastList)).to.be.true;
    expect(wrapper.find(Storyline)).to.be.true;
    expect(wrapper.find(Details)).to.be.true;
    expect(wrapper.find(BoxOffice)).to.be.true;
    expect(wrapper.find(DidYouKnow)).to.be.true;
    expect(wrapper.find(FAQ)).to.be.true;
    expect(wrapper.find(Footer)).to.be.true;
  });
  
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callcount', 1);
    expect(App.prototype.componentDidMount.callCount).toBe(1);
  });

  it('calls componentDidUpdate after fetching inital state', () => {
    sinon.spy(App.prototype, 'componentDidUpdate');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidUpdate.callCount).toBe(1);
  });
});