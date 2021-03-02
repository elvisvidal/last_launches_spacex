import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/index.css';
import LastLaunchesList from './components/LastLaunchesListComponent';
import LaunchDetails from './components/LaunchDetailsComponent';

render((
<Router>
  <Switch>
    <Route exact path="/">
      <LastLaunchesList />
    </Route>
    <Route path="/details/:launchId">
      <LaunchDetails />
    </Route>
  </Switch>
</Router>
), document.getElementById('root'));
