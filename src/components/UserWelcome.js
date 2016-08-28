import React, { Component } from 'react';
export default class UserWelcome extends Component {
  render() {
    let { profile } = this.props;

    if (!profile) {
      return <p></p>
    }

    return (
      <p id = "welcomeText" className="navbar-text">
       <b>Welcome {profile.username}!</b>
      </p>
    )
  }
}
