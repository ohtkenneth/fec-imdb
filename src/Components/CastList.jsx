import React from 'react';
import CastListItem from './CastListItem.jsx';

import styles from './styles/CastList.css';

const CastList = ({ cast }) => {
  return (
    <div>
      <div className={ styles.container }>
        {
          cast.map((castMember, index) => (
            <CastListItem key={index} name={ castMember.name } character={ castMember.character } />
          ))
        }
      </div>  
      See full cast...
    </div>
  );
};

export default CastList;