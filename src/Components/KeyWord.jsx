import React from 'react';
import styles from './styles/KeyWord.css';

const KeyWord = ({ keyword, index, length }) => {
  if (index === length) {
    return (
      <h4 className={ styles.last }>{ keyword }</h4>
    )
  } else {
    return (
      <h4>{ keyword } <span className={ styles.divider }> | </span></h4>
    )
  }
};

export default KeyWord;