import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/index.css';
import Page404 from './components/404Component';
import LastLaunchesList from './components/LastLaunchesListComponent';
import LaunchDetails from './components/LaunchDetailsComponent';

render((
<Router>
  <Switch>
    <Route exact path="/">
      <LastLaunchesList />
    </Route>
    <Route path="/mission/:launchId">
      <LaunchDetails />
    </Route>
    <Route>
      <Page404 />
    </Route>
  </Switch>
</Router>
), document.getElementById('root'));
