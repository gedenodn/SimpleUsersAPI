import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
  render() {
    const { firstName, lastName, bio, isHappy } = this.props.user;

    return (
      <div className="user">
       <IoCloseCircleSharp onClick={() => this.props.onDelete(this.props.user.id)} className="delete-icon" />

        <IoHammerSharp className="edit-icon" />
        <h3>{firstName} {lastName}</h3>
        <p>{bio}</p>
        <b>{isHappy ? 'Happy :)' : 'So so :('}</b>
      </div>
    );
  }
}

export default User;
