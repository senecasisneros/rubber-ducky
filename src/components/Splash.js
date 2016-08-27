import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import Notes from './Notes';
import StickyNotes from './StickyNotes';

export default class Splash extends Component {
  render() {

    return (
      <div>
      <h1 className="text-center">
        <span id="splash">Rubber Ducky</span>
      </h1>
      <StickyNotes />
      </div>
    )
  }
}
