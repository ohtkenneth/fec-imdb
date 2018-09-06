import React from 'react';
import KeyWord from './KeyWord.jsx';
import styles from './styles/Details.css';

const Details = ({ details }) => {
  return (
    <div>
      <div>
        <h3>Details</h3>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Official Sites:</h4>
        <div className={ styles['keyword-section'] }>
          {
            details.officialSites.map((site, index, array) => (
              <KeyWord keyword={ site } index={ index } length={ array.length - 1 }/>
            ))
          }
        </div>
      </div>
      <div>
        <h4>Country:</h4>
      </div>
      <div>
        <h4>Language:</h4>
      </div>
      <div>
        <h4>Release Date:</h4>
      </div>
      <div>
        <h4>Also Known As:</h4>
      </div>
      <div>
        <h4>Filming Locations:</h4>
      </div>
      <div>
        <h3>Company Credits</h3>
      </div>
    </div>
  );
};

export default Details;