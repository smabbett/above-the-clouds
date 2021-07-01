import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Dashboard from '../dashboard/Dashboard';

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Dashboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
export default Routes;
