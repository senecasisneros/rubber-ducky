import AppDispatcher from '../AppDispatcher';
import Constants from '../Constants';

const ServerActions = {
  receiveProfile(profile) {
    AppDispatcher.dispatch({
      type: Constants.RECEIVE_PROFILE,
      profile
    })
  },

  removeProfile(profile) {
    AppDispatcher.dispatch({
      type: Constants.REMOVE_PROFILE
    })
  },

  receiveProfiles(profiles) {
    AppDispatcher.dispatch({
      type: Constants.RECEIVE_PROFILES,
      profiles
    })
  },


  //////////////////////////////////
  /////// Project /////////////////

  receiveProject(project) {
    console.log('sending data to store:', project)
    AppDispatcher.dispatch({
      type: Constants.RECEIVE_PROJECT,
      project
    })
  },

  // deleteProject(id) {
  //   AppDispatcher.dispatch({
  //     type: 'DELETE_PROJECT',
  //     id
  //   })
  // }



};

export default ServerActions;
