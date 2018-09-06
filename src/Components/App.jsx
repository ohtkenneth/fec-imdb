import React from 'react';
import CastList from './CastList.jsx';
import Storyline from './Storyline.jsx';
import Details from './Details.jsx';

import styles from './styles/App.css';

const mockCast = [
  {
    name: 'test1',
    character: 'tester1',
  },
  {
    name: 'test2',
    character: 'tester2',
  },
  {
    name: 'test3',
    character: 'tester3',
  },
  {
    name: 'test4',
    character: 'tester4',
  },
  {
    name: 'test5',
    character: 'tester5',
  }
]
const mockStoryline = {
  storyline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lacinia justo. Quisque efficitur interdum nunc eu pretium. Aenean et lectus tincidunt, aliquet dui a, blandit arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce non consectetur leo, egestas viverra ipsum. Pellentesque sed molestie nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec leo sit amet justo rutrum ullamcorper. Nullam vel nulla nulla. Quisque ipsum arcu, ultrices in mattis id, egestas ac magna. Nam justo neque, vehicula id hendrerit non, gravida at diam. Sed facilisis ac augue ac lacinia. Cras ut lectus quis erat finibus commodo. Proin consectetur hendrerit blandit. Aliquam euismod elit et neque vehicula aliquam.',
  plotKeyWords: ['spin off', 'the conjuring universe', 'nun', 'priest', 'shared universe'],
  taglines: 'Witness the Darkest Chapter in The Conjuring Universe',
  genres: ['Horror', 'Mystery', 'Thriller'],
}
const mockDetails = {
  officialSites: 'Official Site',
  country: 'USA',
  language: 'English',
  releaseDate: '7 September 2018 (USA)',
  'aKa': 'La monja',
  'filmingLocations': 'Universal Studios',
};

const App = () => {
  return (
    <div>
      <CastList cast={ mockCast }/>
      <Storyline storyline={ mockStoryline.storyline } plotKeyWords={ mockStoryline.plotKeyWords }
        taglines={ mockStoryline.taglines } genres={ mockStoryline.genres }
        />
      <Details details={ mockDetails } />
    </div>
  )
}

export default App;