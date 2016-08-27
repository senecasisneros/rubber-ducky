import React, { Component } from 'react'
import { Link } from 'react-router'
import UserStore from '../stores/UserStore'
import UserWelcome from './UserWelcome'
import UserActions from '../actions/UserActions'
import UserAvatar from './UserAvatar';
import StatusButtons from './StatusButtons';

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      profile: UserStore.get()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    });
  }

  render() {
    let { profile } = this.state;

    return (
      <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'><b>Rubber Ducky</b></Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {/* <UserWelcome profile={profile}/> */}

            <ul className="nav navbar-nav navbar-right container-fluid">
            <UserWelcome profile={profile} />
            <UserAvatar profile={profile} />
            <StatusButtons profile={profile}/>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
