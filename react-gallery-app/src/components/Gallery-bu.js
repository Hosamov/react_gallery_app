
//The Gallery component receives the data from App and is responsible only for how the list of photos looks
import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound'; //used when Flickr is up and running to display a "no results found" message

const imgURL = `https://live.staticflickr.com/`;
//console.log(img_url);

const Gallery = props => {
  const results = props.data.photos; //list of 24 photos

  console.log(results.length);
  console.log(results);
  console.log(results[1].server);

  let photos;
  if(results.length > 0) {
    //TODO: Figure out how to compile all this info into its own URL and pass into a presentation component:
    photos = results.map(photo => (
      <Photo url={`${imgURL}${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} /> )
    );
  } else {
    photos = <NotFound />
  }

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default Gallery;
