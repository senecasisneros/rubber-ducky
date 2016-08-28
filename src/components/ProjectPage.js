import React, { Component } from 'react';
import ProjectStore from '../stores/ProjectStore';
import EditProfile from './EditProfile';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';
import ProjectForm from './ProjectForm';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // project: UserActions.getProfile(),
      project: UserStore.get(),
      newProject: ProjectStore.get()

    }
    this._onChange = this._onChange.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    let { _id, username } = this.state.project;
    let { id, title, notes } = this.state.newProject;
    UserActions.getProject(_id)
  }

  componentDidMount(_id) {
    ProjectStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ProjectStore.stopListening(this._onChange);
  }

  deleteProject(id){
    console.log('deleteProject:', id)
    UserActions.deleteProject(id);
  }
  _onChange() {
    this.state({
      project: UserStore.get(),
      newProject: ProjectStore.get()
    })
}
  render() {
    if(this.state.newProject){
      let { title, notes, _id } = this.state
      console.log('this.state.newProject:', this.state.newProject)
      return(
        <div className="row well well-small">
        <div className="col-xs-12">
        <h4>Title:   {this.state.newProject.title}</h4>
        <h4>Notes:  {this.state.newProject.notes}</h4>
        <h4>Notes:  {this.state.newProject._id}</h4>
        <button type="button" className="btn btn-danger btn-xs" onClick={this.deleteProject.bind(null, this.state.newProject.id)}>Delete</button>

        {/* <button onClick={this.showModal} className="btn btn-success">Edit Profile</button> */}
        </div>
        {/* <ProjectForm project={this.state.newProject} /> */}
        </div>
      )
    } else{
      return(
        <h1>Loading....</h1>
      )
    }
  }
}







// {this.state.project.projectName}

//     if(this.state.project){
//       let { username, _id} = this.state.project
//       return (
//         <div className="container">
//           <h1>Project Page </h1>
//           {/* <EditProfile project={this.state.project}/> */}
//         </div>
//       )
//     } else{
//       return(
//         <h1>MyBook</h1>
//       )
//     }
// }
// }
