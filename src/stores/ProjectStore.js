import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import ProjectActions from '../actions/ProjectActions';
import Constants from '../Constants';

let _project = null;

class ProjectStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case Constants.RECEIVE_PROJECT:
          _project = action.project;
          this.emit('CHANGE');
          break;
        case Constants.REMOVE_PROFILE:
          _project = null;
          this.emit('CHANGE');
          break;
        case Constants.RECEIVE_PROFILES:
          _projects = action.projects;
          this.emit('CHANGE');
          break;
      }
    });

    if(document.cookie.includes('authtoken')) {
      ProjectActions.getProject();
    }
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
}

export default new ProjectStore();
