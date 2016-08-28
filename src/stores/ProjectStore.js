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
          console.log('RECEIVE PROJECT STORE_project:', _project);
          this.emit('CHANGE');
          break;
        case Constants.REMOVE_PROFILE:
          _project = null;
          this.emit('CHANGE');
          break;
        case Constants.DELETE_PROJECT:
          var { id } = action;
          _project = _project.filter(i => i._id !== id);
          this.emit("CHANGE");
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
    console.log('ProjectStoreGET():', _project)
    return _project;
  }

  getAll() {
    return _projects;
  }

  deleteProject() {
    console.log('removeProject:', _project)
    return _project;
  }
}

export default new ProjectStore();
