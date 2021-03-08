import React from 'react';
//import {useParams} from 'react-router-dom'; //import to check query parameter
import { withRouter } from 'react-router';
import Gallery from './Gallery';


//STATELESS COMPONENT
const SearchPage = (props, {match}) => {
  let query = props.match.params.query; //access query param passed to SearchPage
  console.log(query);

  return (
    <Gallery data={props.data} loading={props.loading} picSearch={props.picSearch} query={query} />
  );
}

export default withRouter(SearchPage);
