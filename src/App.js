import React, { Component } from 'react';
import './App.scss';
import Landing from './Landing';
import data from './data';

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
