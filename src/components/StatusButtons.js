import React, { Component } from 'react';
import { Link } from 'react-router';
import UserActions from '../actions/UserActions';

export default class StatusButtons extends Component {
  constructor() {
    super();

    this._logout = this._logout.bind(this);
  }

  _logout() {
    UserActions.logout();
  }

  render() {
    let { profile } = this.props;

    if (!profile) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )
    }

    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">View Profile</Link></li>
        <li><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></li>
      </ul>
    )
  }
}
