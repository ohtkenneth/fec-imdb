import React from 'react';
import styles from './styles/PhotoList.css';

const PhotoList = ({ urls }) => {
  return (
    <div className={ styles.container }>
      <h3 className={ styles.heading }>Photos</h3>
      <div className={ styles['photos-container'] }>
        {
          urls.map((url, index) => (
            <img key={ index } className={ styles.photo } src={ url }/>
          ))
        }
      </div>
      <h4 className={ styles['footer-link'] }>See all { urls.length } photos</h4>
    </div>
  )
}

export default PhotoList;