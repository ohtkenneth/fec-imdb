import React from 'react';
import KeyWord from './KeyWord.jsx';

import styles from './styles/Storyline.css';

// storyline, plotkeywords, taglines, genres, motion picture rating, parents guide
const Storyline = ({ storyline, plotKeyWords, taglines, genres }) => {
  console.log(storyline.taglines);
  return (
    <div>
      <h1>Storyline</h1>
      <p>
        { storyline }
      </p>
      <div className={ styles['details-container']}>
        <h4 className={ styles['keyword-heading'] }>Plot Keywords: </h4>
        <div className={ styles['keyword-container'] }>
          {
            plotKeyWords.map((keyword, index, array) => (
              // pass in length and index to check if last keyword to avoid adding trailing grey divider
              <KeyWord keyword={ keyword } index={ index } length={ array.length - 1 } />
            ))
          }
        </div>
      </div>
      <div className={ styles['details-container']}>
        <h4 className={ styles['keyword-heading'] }>Taglines:</h4>
        <span className={ styles.tagline }> { taglines }</span>
      </div>
      <div className={ styles['details-container']}>
        <h4 className={ styles['keyword-heading'] }>Genres:</h4>
        <div className={ styles['keyword-container'] }>
          {
            genres.map((genre, index, array) => (
              <KeyWord keyword={ genre } index={ index } length={ array.length - 1 }/>
            ))
          }
        </div>
      </div>
      <div>
        <h4>Motion Picture Rating</h4>
      </div>
      <div>
        <h4>Parents Guide</h4>
      </div>
    </div>
  );
};

export default Storyline;