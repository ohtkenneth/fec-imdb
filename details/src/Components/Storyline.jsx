import React from 'react';
import KeyWord from './KeyWord.jsx';

import styles from './styles/Storyline.css';

// storyline, plotkeywords, taglines, genres, motion picture rating, parents guide
const Storyline = ({ storyline, plotKeyWords, taglines, genres }) => {
  console.log(taglines);
  return (
    <div className={ styles.container }>
      <h1 className={ styles.heading }>Storyline</h1>
      <p>
        { storyline }
      </p>
      <div className={ styles['details-section']}>
        <h4 className={ styles['keyword-heading'] }>Plot Keywords: </h4>
        <div className={ styles['keyword-section'] }>
          {
            plotKeyWords.slice(0, 4).map((keyword, index, array) => (
              // pass in length and index to check if last keyword to avoid adding trailing grey divider
              <KeyWord key={ index } keyword={ keyword } index={ index } length={ array.length - 1 } />
            ))
          }
        </div>
      </div>
      <div className={ styles['details-section']}>
        <h4 className={ styles['keyword-heading'] }>Taglines:</h4>
        <span className={ styles.tagline }> { taglines }</span>
      </div>
      <div className={ styles['details-section']}>
        <h4 className={ styles['keyword-heading'] }>Genres:</h4>
        <div className={ styles['keyword-section'] }>
          {
            genres.map((genre, index, array) => (
              <KeyWord key={ index } keyword={ genre } index={ index } length={ array.length - 1 }/>
            ))
          }
        </div>
      </div>
      <div>
        <h4 className={ styles['keyword-heading'] }>Motion Picture Rating (MPAA)</h4>
        <p>
          Movie rating description
        </p>
      </div>
      <div>
        <h4 className={ styles['keyword-heading'] }>Parents Guide</h4>
      </div>
    </div>
  );
};

export default Storyline;