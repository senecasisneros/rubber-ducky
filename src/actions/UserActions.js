import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  editProfile: API.editProfile,
  getProfiles: API.getProfiles,
  getProject: API.getProject
};

export default UserActions;
