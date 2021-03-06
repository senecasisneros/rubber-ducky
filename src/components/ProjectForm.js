import React, { Component } from 'react'
import UserActions from '../actions/UserActions'
import { browserHistory } from 'react-router';
import ProjectStore from '../stores/ProjectStore';

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
        // <li key={i}>
        //   <span onDoubleClick={this.editProject.bind(null, project._id)}>
        //   Title: {project.title} Notes: {project.notes}
        //   </span>
        //   <button onClick={this.deleteProject.bind(null, project._id)}>x</button>
        // </li>
    <div className="photos" key={i}>
      <img src={project.notes} />
      <p className='desc'>{project.title}</p>
    </div>
      );
    })
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="projectNotes">Image:</label>
          <input type="text"
                 className="form-control"
                 id="projectNotes"
                 placeholder="Image Url"
                 value={this.state.notes}
                 onChange={event => this.setState({notes: event.target.value})}
                 />
                 <div className="form-group">
                 <label htmlFor="title">Image Caption:</label>
                 <input type="text"
                 className="form-control"
                 id="title"
                 placeholder="Caption"
                 value={this.state.title}
                 onChange={event => this.setState({title: event.target.value})}
                 />
                 </div>
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
