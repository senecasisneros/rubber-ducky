import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  getProfiles: API.getProfiles,
  getProject(id) {
    // console.log('UserActionID:', id)
    API.getProject(id);
  },
  createProject(project) {
    console.log("createpProject FROM USERACTIONS:", project)
    API.createProject(project);
  },
  deleteProject(id) {
    console.log("FROM USERACTION ID:", id);
    API.deleteProject(id);
  },
  editProfile() {
    API.editProfile();
  }


};

export default UserActions;
