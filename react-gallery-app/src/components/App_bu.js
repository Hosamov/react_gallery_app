import React, { Component } from 'react';
import '../css/index.css';
import { //remember, first: npm install --save react-router-dom
  BrowserRouter, //BrowserRouter renders the root router...
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

import Key from './config.js';

//App Components
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import Err from './Error';

const apiKey = Key;
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
      // loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query="cats") => {
    axios.get(`${url}${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
      //  console.log(response.data)
        //console.log(response.data.photos.photo); //log the list of 24 photos
      //  console.log(`${url}${query}&per_page=24&format=json&nojsoncallback=1`); //check the current path
        this.setState( {
          photos: response.data.photos.photo,
        });
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data ', error);
      });
  }

  render() {
     console.log(this.state);
    return(
    <div className="container">
    <BrowserRouter>
    <Search />
    <Nav />
    {/* <Gallery data={this.state} /> */}
      <Switch>
        <Route path="/lego" render={ () => <Gallery data={this.state} />} />
        <Route path="/rpi" render={ () => <Gallery data={this.state} />} />
        <Route path="/arduino" render={ () => <Gallery data={this.state} />} />
        <Route component={Err} />
      </Switch>
    </BrowserRouter>
    </div>
    );
  }

}

export default App;
