
//The Gallery component receives the data from App and is responsible only for how the list of photos looks
import React, {Component} from 'react';
import { withRouter } from "react-router";

import Photo from './Photo';
import NotFound from './NotFound'; //used when Flickr is up and running to display a "no results found" message

const imgURL = `https://live.staticflickr.com/`;
//console.log(img_url);

class Gallery extends Component {

  render() {
    const results = this.props.data;
    // console.log(results);
    let photos;
    if(results.length > 0) {
      photos = results.map(photo =>
        <Photo url={`${imgURL}${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
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
}

export default withRouter(Gallery);
