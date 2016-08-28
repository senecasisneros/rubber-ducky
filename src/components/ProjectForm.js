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
    console.log("TEST2:,", this.state.project)
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    // let project = event.target.value;
    // console.log("project: ", project)
    // this.setState({ project })



    let project = ProjectStore.get();
    let projects = ProjectStore.getAll();
    console.log('HELWKEJFWLE', projects);
    let { title, notes } = project;
    this.setState({ title, notes, projects});
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('click')
    let { title, notes } = this.state;

    UserActions.createProject({ title, notes});
    this.setState({
      project: ProjectStore.get()
    });
  }

  render() {
    console.log('STATESTATE', this.state.title, this.state.notes);
    let {title, notes} = this.state;
    let Projects = this.state.projects.map((project, i) => {
      return <li key={i}>Title: {project.title} Notes: {project.notes}</li>
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
            <input type="text"
                   className="form-control"
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
