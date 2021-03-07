import React from 'react';
import Gallery from '../Gallery';

const Fender = props => {
  let dataQuery = 'fender guitars';

  return(
    <Gallery data={props.data} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Fender;
