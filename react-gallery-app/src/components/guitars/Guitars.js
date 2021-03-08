import React from 'react';
import Gallery from '../Gallery';

const Fender = props => {
  let dataQuery = 'guitars';

  return(
    <Gallery data={props.data} loading={props.loading} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Fender;
