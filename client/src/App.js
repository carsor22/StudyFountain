import React, { Fragment, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import Planner from './components/dashboard/Planner';
import Journal from './components/dashboard/Journal';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux

import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Login' component={Login} />
              <PrivateRoute exact path='/Dashboard' component={Dashboard} />
              <PrivateRoute exact path='/Planner' component={Planner} />
              <PrivateRoute exact path='/Journal' component={Journal} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
