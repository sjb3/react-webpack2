'use strict';

import React, { Component } from 'react';
import Popular from '../Popular/Popular';
import Nav from '../Nav/Nav';
import { Home } from '../Home/Home';
import Battle from '../Battle/Battle';

var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/popular' component={Popular} />
              <Route render={ () => {
                  return <h2>Not Found</h2>
                  }} />
            </Switch>
          </div>
        </Router>
        )
    }
}

module.exports = App;