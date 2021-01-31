import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Landing from './components/layout/Landing';
import Planner from './components/layout/Planner';
import Journal from './components/layout/Journal';
import Community from './components/layout/Community';

const App = () => (
  <Router>
    <Route path='/' component={Landing} />
    <Route path='/planner' component={Planner} />
    <Route path='/journal' component={Journal} />
    <Route path='/community' component={Community} />
  </Router>
);

export default App;
