import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  getProfiles: API.getProfiles,
  editProfile: API.editProfile,

  getProject(id) {
    API.getProject(id);
  },
  createProject(project) {
    API.createProject(project);
  },
  deleteProject(id) {
    API.deleteProject(id);
  },
  editProject(id) {
    API.editProject(id);
  }
};

export default UserActions;
