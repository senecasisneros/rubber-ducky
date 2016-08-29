import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import EditProfile from './EditProfile';
import UserActions from '../actions/UserActions'


export default class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      profile: UserActions.getProfile(),
      showModal: false


    }
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }
  showModal(){
  this.setState({showModal: true})
}
closeModal(){
  this.setState({showModal: false})
}

  _onChange() {
    this.setState({profile: UserStore.get()
    })
  }
  render() {
    if(this.state.profile){
      let { username, image, aboutMe, links, location, occupation } = this.state.profile
      return(
        <div className="row well well-small profile">
        <div className="col-xs-12">
        <img width="250"  height="250" src={image} />
        </div>
        <div className="col-xs-12">
        <h4>Username:   {username}</h4>
        <h4>Current Location:  {location}</h4>
        <h4>Occupation: {occupation}</h4>
        <h4>About Me: {aboutMe}</h4>
        <button onClick={this.showModal} className="btn btn-success">Edit Profile</button>
        </div>
        <EditProfile showModal={this.state.showModal} closeModal={this.closeModal} profile={this.state.profile} />
        </div>
      )
    } else{
      return(
        <h1>MyBook</h1>
      )
    }
  }
}








//       return (
//         <div className="container">
//           <h1>{this.state.profile.name}</h1>
//           <img id = "profileImage" src={this.state.profile.image} width="300px" />
//           <EditProfile profile={this.state.profile}/>
//         </div>
//       )
//     }
// }
