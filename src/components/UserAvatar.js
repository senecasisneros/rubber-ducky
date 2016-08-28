import React, { Component } from 'react';

export default class UserAvatar extends Component {
  render() {
    let { profile } = this.props;

    if (!profile) {
      return <img src="" />
    }

    return (
      <img id = "avatar" src={profile.image} height="50px" />
    )
  }
}
