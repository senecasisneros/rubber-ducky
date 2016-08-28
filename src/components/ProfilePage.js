import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import EditProfile from './EditProfile';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: UserStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    })
  }
  render() {
      return (
        <div className="container">
          <h1>{this.state.profile.name} {this.state.profile.body}</h1>
          <img id = "profileImage" src={this.state.profile.image} width="300px" />
          <EditProfile profile={this.state.profile}/>
        </div>
      )
    }
}
