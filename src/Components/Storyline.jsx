import React from 'react';
import KeyWord from './KeyWord.jsx';

import styles from './styles/Storyline.css';

// storyline, plotkeywords, taglines, genres, motion picture rating, parents guide
const Storyline = ({ storyline }) => {
  return (
    <div>
      <h1>Storyline</h1>
      <p>
        { storyline.storyline }
      </p>
      <div className={ styles['plot-container']}>
        <h4 className={ styles['keyword-heading'] }>Plot Keywords: </h4>
        <div className={ styles['keyword-container'] }>
          {
            storyline.plotKeyWords.map((keyword, index, array) => (
              <KeyWord keyword={ keyword } index={ index } length={ array.length - 1 } />
            ))
          }
        </div>
      </div>
      <div>
        <h5>Taglines:</h5>
      </div>
      <div>
        <h5>Motion Picture Rating</h5>
      </div>
      <div>
        <h5>Parents Guide</h5>
      </div>
    </div>
  );
};

export default Storyline;