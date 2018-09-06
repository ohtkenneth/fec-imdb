import React from 'react';

import styles from './styles/CastListItem.css';

const CastListItem = ({ name, character }) => {
  return (
    <div className={ styles.container }>
      <h5 className={ styles.name }>{ name }</h5>
      <h5 className={ styles.character }>{ character }</h5>
    </div>
  )
};

export default CastListItem;