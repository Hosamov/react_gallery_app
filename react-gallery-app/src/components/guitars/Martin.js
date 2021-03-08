import React from 'react';
import Gallery from '../Gallery';

const Martin = (props) => {
  let dataQuery = 'martin guitars';

  return(
    <Gallery data={props.data} loading={props.loading} picSearch={props.picSearch} query={dataQuery} />
  );
}

export default Martin;
