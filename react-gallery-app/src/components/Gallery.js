
//The Gallery component receives the data from App and is responsible only for how the list of photos looks
import React, {Component} from 'react';
import { withRouter } from "react-router";

import Photo from './Photo';
import NotFound from './NotFound'; //used when Flickr is up and running to display a "no results found" message

const imgURL = `https://live.staticflickr.com/`;


/*
* STATEFUL COMPONENT
* Renders component: Photo
*
*/

class Gallery extends Component {

  componentDidMount() {
    this.props.picSearch(this.props.query); //ensure picSearch is passed correct (query) param before proceeding...
  }

  render() {
    const results = this.props.data;
    let photos;

    if(!this.props.loading) {
      if(results.length > 0) {
        photos = results.map(photo =>
          <Photo url={`${imgURL}${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        );
      } else {
        photos = <NotFound />
      }
    } else {
      return <h2>Loading...</h2>
    }

    return(
      <div className="photo-container">
        <h2>Results for {this.props.query}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

export default withRouter(Gallery);
