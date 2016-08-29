import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import UserActions from '../actions/UserActions';
import Constants from '../Constants';

let _project = null;

let _projects = [];
console.log('ProjectStore')

class ProjectStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case Constants.RECEIVE_PROJECT:
          _project = action.project;
          _projects.push(action.project);
          this.emit('CHANGE');
          break;
        case Constants.REMOVE_PROFILE:
          _project = null;
          this.emit('CHANGE');
          break;
        case Constants.DELETE_PROJECT:
          var { id } = action;
          _projects = _projects.filter(i => i._id !== id);
          this.emit("CHANGE");
          break;
        case Constants.EDIT_PROJECT:
          _projects = action.project;
          this.emit('CHANGE');
          break;
      }
    });



    // if(document.cookie.includes('authtoken')) {
    //   UserActions.getProject();
    // }
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get() {
    return _project;
  }

  getAll() {
    return _projects;
  }

  deleteProject() {
    return _projects;
  }
}

export default new ProjectStore();
