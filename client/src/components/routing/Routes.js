import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../auth/Login';
import Register from '..//auth/Register';
import Alert from '..//layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Planner from '../dashboard/planner/Planner';
import Journal from '../dashboard/journal/Journal';
import Workshop from '../dashboard/workshop/Workshop';
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
        <PrivateRoute exact path='/Workshop' component={Workshop} />
      </Switch>
    </section>
  );
};

export default Routes;
