import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound'; //used when Flickr is up and running to display a "no results found" message

const img_url = `https://live.staticflickr.com/`;
//console.log(img_url);

const Gallery = props => {
  const results = props.data.photos; //list of 24 photos
  let photos;
  console.log(results.length);
  console.log(results);
  console.log(results[1].server);
  if(results.length > 0) {
    photos = results.map(photo => {

      //TODO: Figure out how to compile all this info into its own URL and pass into a presentation component:
      <Photo url={img_url} id={photo.id} server_id={photo.server} secret={photo.secret}/>
    });
  } else {
    photos = <NotFound />
  }

    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
          {console.log(photos)}
        </ul>
      </div>
    );
}

export default Gallery;
