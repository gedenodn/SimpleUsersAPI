import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user ? this.props.user.first_name : "",
      last_name: this.props.user ? this.props.user.last_name : "",
      email: this.props.user ? this.props.user.email : "",
      avatar: this.props.user ? this.props.user.avatar : null,
      isHappy: this.props.user ? this.props.user.isHappy : false,
    };
  }

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.readFile(file);
  };

  readFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="First Name"
          value={this.state.first_name}
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
       
        <input type="file" accept="image/*" onChange={this.handleFileChange} />
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
           
            const user = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              avatar: this.state.avatar,
              isHappy: this.state.isHappy,
            };

            
            if (this.props.user) {
              user.id = this.props.user.id;
            }

           
            this.props.onAdd(user);

            
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
