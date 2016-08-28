import axios from 'axios';
import RouteActions from './actions/RouteActions';
import UserActions from './actions/UserActions';
import ServerActions from './actions/ServerActions';

console.log('API')
const API = {
  register(user) {
    axios.post('/api/users/register', user)
    .then(res => {
      RouteActions.route('/login');
    })
    .catch(console.error);
  },

  login(attempt) {
    axios.post('/api/users/login', attempt)
    .then(() => {
      UserActions.getProfile();
      RouteActions.route('/');
    })
    .catch(console.error);
  },

  logout() {
    axios.post('/api/users/logout')
    .then(() => {
      ServerActions.removeProfile();
      RouteActions.route('/');
    })
    // .then(ServerActions.removeProfile)
    // .then(RouteActions.route('/');
    .catch(console.error);
  },

  //// get profile data only///////
  getProfile() {
    axios.get(`/api/users/profile`)
    .then(res => res.data)
    .then(ServerActions.receiveProfile)
    .catch(console.error);
  },

  editProfile(updatedUser) {
    axios.put(`/api/users/profile`, updatedUser)
    .then(() => {
      UserActions.getProfile();
      RouteActions.route('/profile')
    })
    .catch(console.error);
  },
  //
  // getProfiles() {
  //   axios.get(`/api/users`)
  //   .then(res => res.data)
  //   .then(ServerActions.receiveProfiles)
  //   .catch(console.error);
  // },

  getProject(id) {
    axios.get(`/api/users/${id}`)
    .then(res => {
      console.log('getProject:', res)
    })
    .then(ServerActions.receiveProject)
    .catch(console.error)
  },

  // createProject(project) {
  //   console.log('projectAPI:', project)
  //   axios.post(`/api/projects`, project)
  //   .then(res => {
  //     console.log('sending obj data to SA:', res)
  //   })
  //   .then(ServerActions.receiveProject)
  //   .catch(console.error);
  // }

  createProject(project) {
    console.log('API create project:', project)
  axios.post('/api/projects', project)
  .then(res =>  res.data)
  .then(ServerActions.receiveProject)
  .catch(console.error);
},


deleteProject(id) {
  console.log('API delete project:', id)
  axios.delete(`/api/projects/${id}`)
  .then(ServerActions.deleteProject(id))
  .catch(console.error);
}

}

export default API;
