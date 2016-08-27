import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

export default class Splash extends Component {
  render() {

    return (
      <h1 className="text-center">
        <span id="splash">REACTSPACE</span>
      </h1>
    )
  }
}
