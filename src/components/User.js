import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }

  render() {
    const { id, first_name, last_name, email, isHappy, avatar } = this.props.user;

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
          {first_name} {last_name}
        </h3>
        <img src={avatar} alt={`${first_name}'s avatar`} />
        <p>{email}</p>
        <b>{isHappy ? 'Happy :)' : 'So so :('}</b>

        {this.state.editForm && (
          <AddUser
            user={this.props.user}
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
