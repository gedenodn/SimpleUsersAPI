import React from "react"

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age:1,
            isHappy: false
        }
    }
    render() {
     return (
     <form ref={(el) => this.myForm = el }>
        <input placeholder="Name" onChange={(e) => this.setState({firstname: e.target.value})}/>
        <input placeholder="Last Name" onChange={(e) => this.setState({lastname: e.target.value})}/>
        <textarea placeholder="Biography" onChange={(e) => this.setState({bio: e.target.value})}/>
        <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})}/>
        <label htmlFor="isHappy">Happy?</label>
        <input type="checkbox" id="isHappy" onChange={(e) => this.setState({firstname: e.target.checked})}/>
        <button type="button" onClick={() => {
            this.myForm.reset()
        this.props.onAdd({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            bio: this.state.bio,
            age: this.state.age,
            isHappy: this.state.isHappy

        })}
        }>
            Add
        </button>
     </form>
     )
    }

    
}

export default AddUser