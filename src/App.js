import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import Landing from './Landing';

import dataEn from './data';
import dataCat from './data.cat';


class App extends Component {
  landing(data) {
    const {
      nav,
      landing,
      landingHeader,
      footer,
    } = data;

    const landingProps = {...landing, header: landingHeader, nav, footer };
    return <Landing {...landingProps} />;
  }

  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route path="/" exact render={props => (this.landing(dataEn))} />
          <Route path="/cat" exact render={props => (this.landing(dataCat))} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
