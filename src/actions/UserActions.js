import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  getProfiles: API.getProfiles,
  getProject(id) {
    console.log('UserActionID:', id)
    API.getProject(id);
  },
  createProject(project) {
    console.log('UA getting and sending 2 API obj with title and notes:', project)
    API.createProject(project);
  },
  deleteProject(id) {
    console.log('UA delete:', id)
    API.deleteProject(id);
  },
  editProfile() {
    console.log('UA edit:', id)
    API.editProfile();
  }


};

export default UserActions;
