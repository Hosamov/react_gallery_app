import React from 'react';
import Gallery from '../Gallery';

//STATELESS COMPONENT
//Passes 'Gibson Guitars' to Gallery component
const Gibson = props => {
  let dataQuery = 'gibson guitars';

  return(
    <Gallery data={props.data} loading={props.loading} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Gibson;
