import React, { Component } from 'react';
import ProjectStore from '../stores/ProjectStore';
import EditProfile from './EditProfile';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // profile: UserActions.getProfile(),
      profile: UserStore.get(),
      // project: ProjectStore.get()

    }
    this._onChange = this._onChange.bind(this);
    let { _id, username } = this.state.profile;
    UserActions.getProject(_id)
  }

  componentDidMount(_id) {
    ProjectStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ProjectStore.stopListening(this._onChange);
  }

  _onChange() {
    // console.log('this.state.profile:', this.state.profile)
      // profile: UserStore.get()
  }
  render() {
    if(this.state.profile){
      let { username, _id} = this.state.profile
      return (
        <div className="container">
          <h1>Project Page </h1>
          {/* <EditProfile project={this.state.project}/> */}
        </div>
      )
    } else{
      return(
        <h1>MyBook</h1>
      )
    }
}
}

// {this.state.project.projectName}
