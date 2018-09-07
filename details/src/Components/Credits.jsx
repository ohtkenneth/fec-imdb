import React from 'react';
import styles from './styles/Credits.css';

const Credits = ({ productionCo, runtime, soundMix, color, aspectRatio }) => {
  return (
    <div className={ styles.container }>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Production Co:: { productionCo } </h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Runtime: { runtime } </h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Sound Mix: { soundMix } </h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Color: { color } </h4>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Aspect Ratio: { aspectRatio } </h4>
      </div>
    </div>
  )
};

export default Credits;