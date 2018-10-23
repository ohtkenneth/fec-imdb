import React from 'react';

import makeEditable from '../utils/editSection';
import KeyWord from './KeyWord.jsx';
import styles from './styles/Storyline.css';

const Storyline = ({ mpaa, storyline, plotKeyWords, taglines, genres, movieId }) => {
  const onEdit = () => {
    makeEditable(movieId, 'storyline', 'header', 'story-line-text', 'storyline-edit-button', 'storyline-save-button');
  };

  return (
    <div id="story-line-root" className={ styles.container }>
      <div id="header" className={ styles.header}>
        <h1 className={ styles.heading }>Storyline</h1>
        <button id="storyline-edit-button" type="button" onClick={ onEdit }>Edit</button>
      </div>
      <p id="story-line-text">
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
          { mpaa }
        </p>
      </div>
    </div>
  );
};

export default Storyline;