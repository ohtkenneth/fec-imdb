import React from 'react';
import KeyWord from './KeyWord.jsx';
import styles from './styles/Details.css';

const Details = ({ aKa, officialSites, languages, country, filmingLocations, releaseDate }) => {
  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Details</h3>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Official Sites:</h4>
        <div className={ styles['keyword-section'] }>
          {
            officialSites.map((site, index, array) => (
              <KeyWord key={ index } keyword={ site } index={ index } length={ array.length - 1 } />
            ))
          }
        </div>
      </div>
 
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Country: { country }</h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Language:</h4>
        <div className={ styles['keyword-section'] }>
          {
            languages.map((language, index, array) => (
              <KeyWord key={ index } keyword={ language } index={ index } length={ array.length - 1 }/>
            ))
          }
        </div>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Release Date: { releaseDate } </h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Also Known As: { aKa }</h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Filming Locations:</h4>
        <div className={ styles['keyword-section'] }>
          {
            filmingLocations.map((location, index, array) => (
              <KeyWord key={ index } keyword={ location } index={ index } length={ array.length - 1} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Details;