/* React Gallery App */

import React, { Component } from 'react';
import '../css/index.css';
import { //remember, first: npm install --save react-router-dom
  BrowserRouter, //BrowserRouter renders the root router...
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

//App Components
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import Err from './Error';

//API Key & URL
import apiKey from './config.js';
// const apiKey = Key;
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=`;

const navQueries = ['lego', 'raspberryPi', 'arduino'];

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      picsArduino: [],
      picsRPi: [],
      picsLego: [],
      loading: true
    };
  }


  componentDidMount() {
    this.performSearch();

    axios.get(`${url}${navQueries[0]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          photosLego: response.data.photos.photo,  //response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

    axios.get(`${url}${navQueries[1]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          photosRPi: response.data.photos.photo,  //response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

    axios.get(`${url}${navQueries[2]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          photosArduino: response.data.photos.photo,  //response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

  }

  performSearch = (query="cats") => {
    axios.get(`${url}${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          photos: response.data.photos.photo,  //response.data.photos.photo
          query: query
        });

      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data ', error);
      });
  }

  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav />
        <Switch>
          <Route exact path="/" render={ () => <Gallery data={this.state.photos} />} />
          <Route exact path="/lego" render={ () => <Gallery data={this.state.picsLego} />} />
          <Route exact path="/rpi" render={ () => <Gallery data={this.state.picsRPi} />} />
          <Route exact path="/arduino" render={ () => <Gallery data={this.state.picsArduino} />} />
          <Route component={Err} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }

}

export default App;
