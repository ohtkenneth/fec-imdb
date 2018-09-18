import React from 'react';
import styles from './styles/DidYouKnow.css';

const DidYouKnow = ({ trivia, goofs, quotes, crazyCredits, connections, soundtracks }) => {
  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Did You Know?</h3>
      </div>
      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Trivia</h4>
        <p>(at around { Math.floor(Math.random() * 60) } mins) { trivia }</p>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Goofs</h4>
        <p>(at around { Math.floor(Math.random() * 60) } mins) { goofs }</p>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Quotes</h4>
        <p>[first lines] <br/> { quotes }</p>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Crazy Credits</h4>
        <p>{ crazyCredits }</p>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Connections</h4>
        <p>{ connections }</p>
      </div>

      <div className={ styles['details-section'] }>
        <h4 className={ styles['keyword-heading'] }>Soundtracks</h4>
        <ul className={ styles.soundtrack }>
          {
            soundtracks.map((soundtrack, index) => (
              <li key={ index }>
                { soundtrack }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default DidYouKnow;