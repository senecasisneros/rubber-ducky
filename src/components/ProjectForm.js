import React, { Component } from 'react'
import UserActions from '../actions/UserActions'
import { browserHistory } from 'react-router';
import ProjectPage from './ProjectPage'

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      notes: ''
    }

    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeTaskInput(event) {
    let project = event.target.value;
    this.setState({ project })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('click')
    let { title, notes } = this.state;

    UserActions.createProject({ title, notes});
    // browserHistory.push('/ProjectPage')
    console.log('PF sending obj with title and notes')
    this.setState({
      title: '',
      notes: ''
    });
  }

  render() {
    return (
      <form>
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
        <button className="btn btn-default" onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}
