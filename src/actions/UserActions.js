import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  editProfile: API.editProfile,
  getProfiles: API.getProfiles,
  // getProject: API.getProject
  getProject(id) {
    console.log('UserActionID:', id)
    API.getProject(id);
  }
};

export default UserActions;
