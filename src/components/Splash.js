import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

export default class Splash extends Component {
  render() {

    return (
      <div>
        <h1 className="text-center">
          <span id="splash">photos</span>
        </h1>
      </div>
    )
  }
}
