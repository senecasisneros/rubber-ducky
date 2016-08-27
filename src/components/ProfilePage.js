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
          <h1>This is {this.state.profile.name}</h1>
          <img src={this.state.profile.image} width="400px" />
          <EditProfile profile={this.state.profile}/>
        </div>
      )
    }
}
