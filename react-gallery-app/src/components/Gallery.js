
//The Gallery component receives the data from App and is responsible only for how the list of photos looks
import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound'; //used when Flickr is up and running to display a "no results found" message

const imgURL = `https://live.staticflickr.com/`;


/*
* STATEFUL COMPONENT
* Renders component: Photo
*/
class Gallery extends Component {

  //Pass query to picSearch prop to ensure the correct data is fetched
  componentDidMount() {
    this.props.picSearch(this.props.query);
  }

  //Handle browser navigation...perform search on query prop if the results don't match.
  //Ref: https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    if(prevProps.query !== this.props.query) {
      this.props.picSearch(this.props.query);
    }
  }

  render() {
    const results = this.props.data;
    let photos;

    //ensure loading indicator displays to user between queries
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

export default Gallery;
