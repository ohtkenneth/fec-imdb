import React from 'react';

import styles from './styles/CastListItem.css';

const CastListItem = ({ url, name, character }) => {
  return (
    <div className={ styles.container }>
      <img className={ styles['actor-img'] } src={ url } />
      <h5 className={ styles.name }>{ name }</h5>
      <h5 className={ styles.character }><span className={ styles.elipse }>...</span>     { character }</h5>
    </div>
  )
};

export default CastListItem;