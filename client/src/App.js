import React, { Fragment } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Planner from './components/layout/Planner.js';
import Journal from './components/layout/Journal';
import Community from './components/layout/Community';
import Landing from './components/layout/Landing';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/planner' component={Planner} />
      <Route exact path='/journal' component={Journal} />
      <Route exact path='/community' component={Community} />
    </Fragment>
  </Router>
);

export default App;
