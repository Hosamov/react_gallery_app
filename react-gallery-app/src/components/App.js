import React from 'react';
import { //remember, first: npm install --save react-router-dom
  BrowserRouter, //BrowserRouter renders the root router...
  Route,
  Switch
} from 'react-router-dom';

//App Components
import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';

const App = () => (
  <div className="container">
    <Search />
    <Nav />
    <Gallery />
  </div>
);

export default App;
