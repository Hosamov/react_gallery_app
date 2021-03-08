/*** React Gallery App ***/

import React, { Component } from 'react';
import '../css/index.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

//App Components
import Search from './Search';
import SearchPage from './SearchPage';
import Nav from './Nav';
import Error from './Error';
import Guitars from './guitars/Guitars';
import Martin from './guitars/Martin';
import Gibson from './guitars/Gibson';
import Fender from './guitars/Fender';

//API Key & URL
import apiKey from '../config.js';
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=`;

/*
* STATEFUL COMPONENT
* Renders Search, Nav, and Gallery components
*/

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],     //used to hold search results
      queryString: '', //stores value of query from performSearch()
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  //handle loading
  loadingHandler() {
    if(!this.state.loading) {
      this.setState({
        loading: true
      });
    }
  }

  //Search function--fetches data and passes in user's input through query param
  performSearch = (query) => {

    this.loadingHandler();

    //Fetch query, from search results
    axios.get(`${url}${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if(query !== undefined) { //ensure 'undefined' isn't queried
          this.setState( {
            photos: response.data.photos.photo,
            queryString: query,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data ', error);
      });
  }

  /*
    Using React-Router-DOM, render the data to the page.
    Renders compoments: Search, Nav, Guitars, Martin, Gibson, Fender (the latter 4 render the Gallery component)
    Redirect used to redirect user to /guitars upon initial load
  */
  render() {

    let loadState = this.state.loading;

    return(
    <BrowserRouter>
      <div className="container">
        <Search onSearch={this.performSearch} />
        <Nav />
         <Switch>
          {/* Main Route:
              Redirect to /guitars route upon load...
          */}
          <Route exact path="/"> <Redirect to="/guitars" /> </Route>
          <Route exact path="/guitars" render={ () => <Guitars data={this.state.photos} loading={loadState} picSearch={pics => this.performSearch(pics)} />} />

          {/* Nav Link Routes: */}
          <Route exact path="/martin" render={ () => <Martin data={this.state.photos} loading={loadState} picSearch={pics => this.performSearch(pics)} />} />
          <Route exact path="/gibson" render={ () => <Gibson data={this.state.photos} loading={loadState} picSearch={pics => this.performSearch(pics)} />} />
          <Route exact path="/fender" render={ () => <Fender data={this.state.photos} loading={loadState} picSearch={pics => this.performSearch(pics)} />} />

          {/* Search Route: */}
          <Route path="/search/:query" render={ () => <SearchPage data={this.state.photos} loading={loadState} picSearch={pics => this.performSearch(pics)} />} />

          {/* Error Route: */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
