/*** React Gallery App ***/

import React, { Component } from 'react';
import '../css/index.css';
import { //remember, first: npm install --save react-router-dom
  BrowserRouter, //BrowserRouter renders the root router...
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

//App Components
import Search from './Search';
import SearchPage from './SearchPage';
import Nav from './Nav';
import Err from './Error';
import Guitars from './guitars/Guitars';
import Martin from './guitars/Martin';
import Gibson from './guitars/Gibson';
import Fender from './guitars/Fender';

//API Key & URL
import apiKey from '../config.js';
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=`;

//Create history instance...
//let history = createBrowserHistory();

//Used for fetching the link data needed
const queryList = [
  'martin%20guitar',
  'gibson%20guitar',
  'fender%20guitar'
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      martinPics: [],
      gibsonPics: [],
      fenderPics: [],
      queryString: '',
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();

    //Fetch data for 'Martin Guitars'
    axios.get(`${url}${queryList[0]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          martinPics: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

    //Fetch data for 'Gibson Guitars'
    axios.get(`${url}${queryList[1]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          gibsonPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

    //Fetch data for 'Fender Guitars'
    axios.get(`${url}${queryList[2]}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          fenderPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });

  }

  performSearch = (query) => {
    axios.get(`${url}${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( {
          photos: response.data.photos.photo,
          queryString: query,
          loading: true
        });
        // console.log(this.state.queryString);
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data ', error);
      });

  }

  /*
    TODO: Add description here
  */
  render() {
    console.log('queryString: ' + this.state.queryString);
    return(
    <BrowserRouter>
      <div className="container">
        <Search onSearch={pics => this.performSearch(pics)} />
        <Nav />
        <Switch>
          {/* <Route exact path="/" render={ () => <Gallery data={this.state.photos} picSearch={pics => this.performSearch(pics)} query={this.state.queryString} />} /> */}

          {/* Nav Link Routes: */}
          <Route exact path="/"> <Redirect to="/guitars" /> </Route>
          <Route exact path="/guitars" render={ () => <Guitars data={this.state.photos} picSearch={pics => this.performSearch(pics)} />} />
          <Route exact path="/martin" render={ () => <Martin data={this.state.martinPics} picSearch={pics => this.performSearch(pics)} />} />
          <Route exact path="/gibson" render={ () => <Gibson data={this.state.gibsonPics} picSearch={pics => this.performSearch(pics)} />} />
          <Route exact path="/fender" render={ () => <Fender data={this.state.fenderPics} picSearch={pics => this.performSearch(pics)} />} />

          {/* Search Route: */}
          <Route path="/search/:query" render={ () => <SearchPage data={this.state.photos} picSearch={pics => this.performSearch(pics)} />} />

          {/* Error Route: */}
          <Route component={Err} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
