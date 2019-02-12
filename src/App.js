import React, { Component } from 'react';
import './App.scss';
import Landing from './Landing';

import dataEn from './data';
import dataCat from './data.cat';

const data = window.location.pathname === '/cat' ? dataCat : dataEn;

const {
  nav,
  landing,
  landingHeader,
  footer,
} = data;

const landingProps = {...landing, header: landingHeader, nav, footer };

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-label">Lunatic.cat</div>
      // </div>
      <Landing {...landingProps} />
    );
  }
}

export default App;
