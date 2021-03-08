import React from 'react';
import Gallery from '../Gallery';

//STATELESS COMPONENT
//Passes 'Fender Guitars' to Gallery component
const Fender = props => {
  let dataQuery = 'fender guitars';

  return(
    <Gallery data={props.data} loading={props.loading} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Fender;
