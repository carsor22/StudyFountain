import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../auth/Login';
import Register from '..//auth/Register';
import Alert from '..//layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Planner from '../dashboard/Planner';
import Journal from '../dashboard/Journal';
import PrivateRoute from '../routing/PrivateRoute';

export const Routes = () => {
  return (
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
  );
};

export default Routes;
