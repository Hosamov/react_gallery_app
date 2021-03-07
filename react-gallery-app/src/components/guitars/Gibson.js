import React from 'react';
import Gallery from '../Gallery';

const Gibson = props => {
  let dataQuery = 'gibson guitars';

  return(
    <Gallery data={props.data} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Gibson;
