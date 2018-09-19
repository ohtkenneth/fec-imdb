import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './styles/BoxOffice.css';

const BoxOffice = ({ budget, openingWeekend, gross, cumulative }) => {
  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Box Office</h3>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Budget: <span className={ styles.normal }>{ budget }</span></h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Opening Weekend: <span className={ styles.normal }>{ openingWeekend }></span></h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Gross: <span className={ styles.normal }>{ gross }</span></h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Cumulative: <span className={ styles.normal }>{ cumulative }</span></h4>
      </div>

      <h4 className={ styles['footer-link'] }>Show more on fMDBPro</h4>
    </div>
  );
};

export default BoxOffice;