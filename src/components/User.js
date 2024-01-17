import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;

  render() {
    const { id, firstName, lastName, bio, isHappy } = this.props.user;

    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(id)}
          className="delete-icon"
        />

        <IoHammerSharp
          onClick={() => {
            this.setState({
              editForm: !this.state.editForm,
            });
          }}
          className="edit-icon"
        />
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{bio}</p>
        <b>{isHappy ? 'Happy :)' : 'So so :('}</b>

        {this.state.editForm && (
          <AddUser
            user={this.user}
            onAdd={(updatedUser) => {
              this.props.onEdit(updatedUser);
              this.setState({ editForm: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default User;
