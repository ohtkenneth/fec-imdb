import React, { Component } from 'react';
import PhotoList from './PhotoList.jsx';
import CastList from './CastList.jsx';
import Storyline from './Storyline.jsx';
import Details from './Details.jsx';
// import CompanyCredits from './CompanyCredits.jsx';
import BoxOffice from './BoxOffice.jsx';
import DidYouKnow from './DidYouKnow.jsx';

import styles from './styles/App.css';
import axios from 'axios';

const mockCast = [
  {
    name: 'test1',
    character: 'tester1',
    url: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX32_CR0,0,32,44_AL_.jpg',
  },
  {
    name: 'test2',
    character: 'tester2',
    url: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY44_CR2,0,32,44_AL_.jpg',
  },
  {
    name: 'test3',
    character: 'tester3',
    url: 'https://m.media-amazon.com/images/M/MV5BMTkzNTUyMTczM15BMl5BanBnXkFtZTcwMjMxNTM4Nw@@._V1_UX32_CR0,0,32,44_AL_.jpg',
  },
  {
    name: 'test4',
    character: 'tester4',
    url: 'https://m.media-amazon.com/images/M/MV5BNzIxOTQ1NTU1OV5BMl5BanBnXkFtZTcwMTQ4MDY0Nw@@._V1_UX32_CR0,0,32,44_AL_.jpg',
  },
  {
    name: 'test5',
    character: 'tester5',
    url: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX32_CR0,0,32,44_AL_.jpg',
  }
]
const mockStoryline = {
  storyline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lacinia justo. Quisque efficitur interdum nunc eu pretium. Aenean et lectus tincidunt, aliquet dui a, blandit arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce non consectetur leo, egestas viverra ipsum. Pellentesque sed molestie nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec leo sit amet justo rutrum ullamcorper. Nullam vel nulla nulla. Quisque ipsum arcu, ultrices in mattis id, egestas ac magna. Nam justo neque, vehicula id hendrerit non, gravida at diam. Sed facilisis ac augue ac lacinia. Cras ut lectus quis erat finibus commodo. Proin consectetur hendrerit blandit. Aliquam euismod elit et neque vehicula aliquam.',
  plotKeyWords: ['spin off', 'the conjuring universe', 'nun', 'priest'],
  taglines: 'Witness the Darkest Chapter in The Conjuring Universe',
  genres: ['Horror', 'Mystery', 'Thriller'],
}
const mockDetails = {
  officialSites: ['Official Facebook', 'Official Instagram'],
  country: 'USA',
  languages: ['English'],
  releaseDate: '7 September 2018 (USA)',
  'aKa': 'La monja',
  'filmingLocations': ['Universal Studios'],
};

const mockPhotoUrls = [
  'https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg',
  'https://media.comicbook.com/2018/08/avengers-4-iron-man-dies-pepper-potts-child-fan-art-1131297-1280x0.jpeg',
  'https://www.quirkybyte.com/wp-content/uploads/2018/07/Avengers-4-3-e1531734636517.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1._SX600_SY600_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTM0NjYxMjYwN15BMl5BanBnXkFtZTcwMzM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTgzMzQ1ODEwNV5BMl5BanBnXkFtZTcwNTk5ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTkxODU5NTE4OV5BMl5BanBnXkFtZTcwODkyOTY3Nw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMovie: null,
    };
  }
  componentDidMount() {
    let rand = Math.floor(Math.random() * 5) + 1;
    console.log(rand);
    const options = {
      url: `/api/movie/${rand}`,
      method: 'get',
    };
    axios(options)
      .then(results => {
        console.log(results);
        this.setState({
          currentMovie: results.data,
        });
      })
      .catch(err => console.log('ERROR from App', err));
  }
  render() {
    console.log(styles);
    if (this.state.currentMovie) {
      return (
        <div className={ styles.root }>
          <div className={ styles.container }>
            <PhotoList urls={ this.state.currentMovie.photos } />
            <CastList cast={ this.state.currentMovie.cast }/>
            <Storyline storyline={ this.state.currentMovie.storyline } plotKeyWords={ this.state.currentMovie.plotKeyWords }
              taglines={ this.state.currentMovie.taglines } genres={ this.state.currentMovie.genres }
              />
            <Details 
              details={ mockDetails } 
              country={ this.state.currentMovie.country }
              languages={ this.state.currentMovie.languages }
              releaseDate={ this.state.currentMovie.releaseDate }
              officialSites={ this.state.currentMovie.officialSites }
              filmingLocations={ this.state.currentMovie.filmingLocations }
            />
            <BoxOffice
              budget={ this.state.currentMovie.budget }
              openingWeekend= { this.state.currentMovie.openingWeekend } 
              gross={ this.state.currentMovie.gross }
              cumulative= { this.state.currentMovie.cumulative }
            />
            <DidYouKnow
              trivia={ this.state.currentMovie.trivia }
              goofs={ this.state.currentMovie.goofs }
              quotes={ this.state.currentMovie.quotes }
              crazyCredits={ this.state.currentMovie.crazyCredits }
              connections={ this.state.currentMovie.connections }
              soundtracks= { this.state.currentMovie.soundtracks }
            />
          </div>
        </div> 
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

// const App = () => {
//   return (
//     <div className={ styles.root }>
//       <div className={ styles.container }>
//         <PhotoList urls={ mockPhotoUrls } />
//         <CastList cast={ mockCast }/>
//         <Storyline storyline={ mockStoryline.storyline } plotKeyWords={ mockStoryline.plotKeyWords }
//           taglines={ mockStoryline.taglines } genres={ mockStoryline.genres }
//           />
//         <Details details={ mockDetails } />
//       </div>
//     </div> 
//   );
// }
