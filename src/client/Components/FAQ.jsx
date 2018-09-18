import React from 'react';
import styles from './styles/FAQ.css';

const FAQ = ({ questions }) => {
  console.log(questions);
  return (
    <div className={ styles.container }>
    <h3 className={ styles.heading }>Frequently Asked Questions</h3>
      <div className={ styles['questions-container'] }>
        {
          questions.map((question, index) => (
            <div key={ index } className={ styles['question-section'] } >
              <h4 className={ styles['question-mark'] }>Q: </h4><p>{ question }?</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default FAQ;