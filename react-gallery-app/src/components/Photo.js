import React from 'react';

/*STATELESS COMPONENT*/

const Photo = props => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  );
}

export default Photo;
