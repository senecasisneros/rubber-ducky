import React, { Component } from 'react'
import UserActions from '../actions/UserActions'
import { browserHistory } from 'react-router';
import ProjectStore from '../stores/ProjectStore'

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      notes: '',
      projects: []
    }
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.editProject = this.editProject.bind(this);
  }

  componentDidMount() {
    ProjectStore.startListening(this.changeTaskInput);
  }

  componentWillUnmount() {
    ProjectStore.stopListening(this.changeTaskInput);
  }

  // _onInputChange(e) {
  //   let key = e.target.dataset.statekey;
  //   let value = e.target.value;
  //
  //   // this.setState({
  //   //   [key]: value
  //   // });
  // }

  changeTaskInput(event) {
    let project = ProjectStore.get();
    let projects = ProjectStore.getAll();
    let { title, notes } = project;
    this.setState({
      title, notes,
      title: '',
      notes: '',
      projects: projects
    });
  }

  editProject(id) {
    console.log('CLICK');
    UserActions.editProject(id);
  }

  deleteProject(id) {
    UserActions.deleteProject(id);
  }

  onSubmit(event) {
    event.preventDefault();
    let { title, notes } = this.state;

    UserActions.createProject({ title, notes});
    this.setState({
      project: ProjectStore.get()
    });
  }

  render() {
    let {title, notes} = this.state;
    let Projects = this.state.projects.map((project, i) => {
      return (
        <div key={i} className="notes">
        <a className="deleteBtn" onClick={this.deleteProject.bind(null, project._id)}>x</a>
          <span onDoubleClick={this.editProject.bind(null, project._id)}>
          <p>Title: {project.title}</p>
          <p>{project.notes}</p>
          </span>
        </div>
      );
    })
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Project Title:</label>
            <input type="text"
                   className="form-control"
                   id="title"
                   placeholder="Project Title"
                   value={this.state.title}
                   onChange={event => this.setState({title: event.target.value})}
                   />
          </div>
          <div className="form-group">
            <label htmlFor="projectNotes">Notes:</label>
            <textarea rows="4" cols="60" type="text"
                   className="form-control "
                   id="projectNotes"
                   placeholder="Notes"
                   value={this.state.notes}
                   onChange={event => this.setState({notes: event.target.value})}
                   />
          </div>
          <button type='submit' className="btn btn-default">Submit</button>
        </form>
        <ul>
          {Projects}
        </ul>
      </div>
    )
  }
}
