import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user ? this.props.user.firstName : "",
      lastName: this.props.user ? this.props.user.lastName : "",
      bio: this.props.user ? this.props.user.bio : "",
      age: this.props.user ? this.props.user.age : 1,
      isHappy: this.props.user ? this.props.user.isHappy : false,
    };
  }

  render() {
    return (
      <form
        ref={(el) => (this.myForm = el)}
      >
        <input
          placeholder="Name"
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <textarea
          placeholder="Biography"
          value={this.state.bio}
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <input
          placeholder="Age"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          checked={this.state.isHappy}
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.props.onAdd({
              id: this.props.user ? this.props.user.id : undefined,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            });
            this.myForm.reset();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
