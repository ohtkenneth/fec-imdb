import React from 'react';

import styles from './styles/BoxOffice.css';

const BoxOffice = ({ budget, openingWeekend, gross, cumulative }) => {
  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Box Office</h3>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Budget: { budget }</h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Opening Weekend: { openingWeekend }</h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Gross: { gross }</h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Cumulative: { cumulative }</h4>
      </div>

      <h4 className={ styles['footer-link'] }>Show more on fMDBPro</h4>
    </div>
  )
};

export default BoxOffice;