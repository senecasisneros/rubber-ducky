import React, { Component } from 'react';
import ProjectStore from '../stores/ProjectStore';
import EditProfile from './EditProfile';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: ProjectStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ProjectStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ProjectStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      project: ProjectStore.get()
    })
  }
//lalalalala
  render() {
      return (
        <div className="container">
          <h1>This is {this.state.project.projectName}</h1>
          {/* <EditProfile project={this.state.project}/> */}
        </div>
      )
    }
}
