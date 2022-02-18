import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/defaultAvatar.png';
import '../stylesheets/Profile.css';

class Profile extends React.Component {
  render() {
    const avatar = this.props.image === '' ? defaultAvatar : this.props.image;
    return (
      <div className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
      </div>
    );
  }
}


export default Profile;