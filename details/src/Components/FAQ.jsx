import React from 'react';
import styles from './styles/FAQ.css';

const FAQ = ({ questions }) => {
  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Frequently Asked Questions</h3>
      </div>
    </div>
  )
};

export default FAQ;