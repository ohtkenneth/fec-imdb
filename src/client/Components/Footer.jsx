import React from 'react';
import styles from './styles/Footer.css';

const Footer = () => {
  return (
    <div className={ styles['container'] }>
      <div className={ styles['imdb-everywhere-section'] }>
        <h3 className={ styles.heading }>FMDb Everywhere</h3> 
        <div className={ styles['store-container'] }>  
          <img className={ styles['store-button'] } src="http://www.chiromi.com/aws/MAC/asset_manager/get_image/164595?ver=0"/>
          <img className={ styles['store-button'] } src="https://i.stack.imgur.com/xHgSL.png"/>
          <img className={ styles['store-button'] } src="http://www.clker.com/cliparts/l/G/J/7/M/Q/amazon-store-button.svg.hi.png"/>
        </div>
        <p>Find showtimes, watch trailers, browse photos, track your Watchlist and rate your favorite movies and TV shows on your phone or tablet!</p>
      </div>
      <div className={ styles['follow-container'] }>
        <h3 className={ styles.heading } >
          Follow FMDb on
        </h3>
        <div className={ styles['social-icons-container'] }>
          <img className={ styles['social-icon'] } src="/fb.png"/>
          <img className={ styles['social-icon'] } src="/twit.png"/>
          <img className={ styles['social-icon'] } src="/insta.png"/>
        </div>
      </div>
    </div>
  )
};

export default Footer;