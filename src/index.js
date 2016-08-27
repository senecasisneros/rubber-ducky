import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import ProfilePage from './components/ProfilePage'

import StickyNotes from './components/StickyNotes';

////////////////////////////////////////////////
import UserStore from './stores/UserStore'
////////////////////////////////////////////////

//maybe wrong
render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash} />
      <Route path='register' component={RegisterPage}/>
      <Route path='login' component={LoginPage}/>
      <Route path='profile' component={ProfilePage}/>
      <Route path='stickynotes' component={StickyNotes}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
