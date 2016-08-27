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
    UserActions.getProject(_id)
  }

  componentDidMount(_id) {
    ProjectStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ProjectStore.stopListening(this._onChange);
  }

  deleteProject(_id){
    console.log('deleteProject:', _id)
  UserActions.deleteProject(_id);
  }

  _onChange() {
    this.state({
      project: UserStore.get(),
      newProject: ProjectStore.get()
    })
}
  render() {
    if(this.state.newProject){
      console.log('this.state.project!!!!!!!:', this.state.newProject)
      let { title, notes } = this.state.newProject
      return(
        <div className="row well well-small">
        <div className="col-xs-12">
        <h4>Title:   {title}</h4>
        <h4>Notes:  {notes}</h4>
        <button type="button" className="btn btn-danger btn-xs" onClick={this.deleteProject.bind(null)}>Delete</button>

        {/* <button onClick={this.showModal} className="btn btn-success">Edit Profile</button> */}
        </div>
        <ProjectForm project={this.state.newProject} />
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
