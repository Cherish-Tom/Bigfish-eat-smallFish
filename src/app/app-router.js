import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Master from './components/index/Master';



const AppRouters = (
  <Route path="/" component={Master}>
    {/* <IndexRoute component={Home}/>*/}
  </Route>
);

export default AppRouters;
