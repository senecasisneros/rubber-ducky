import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import ProfilePage from './components/ProfilePage'
import ProjectForm from './components/ProjectForm'
import css from './css/style.css'

import UserStore from './stores/UserStore'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash} />
      <Route path='register' component={RegisterPage}/>
      <Route path='login' component={LoginPage}/>
      <Route path='profile' component={ProfilePage}/>
      <Route path='notes' component={ProjectForm}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
