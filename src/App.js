import React from "react"
import Header from "./components/Header"  
import Users from "./components/Users"
import AddUser from "./components/AddUser"

   class App extends React.Component 
   {
    constructor(props){
      super(props)
      this.state = {
          users: [
              {
                  id: 1,
                  firstName: 'Bob',
                  lastName: 'Marley',
                  bio: 'Smoked weed, was too happy guy',
                  age: 40,
                  isHappy: true
                },
                {
                  id: 2,
                  firstName: 'John',
                  lastName: 'Doe',
                  bio: 'Hz who is it, but man was too tired',
                  age: 22,
                  isHappy: false
                }
            ]
      }
      this.addUser = this.addUser.bind(this)
      this.deleteUser = this.deleteUser.bind(this)
     }
    render(){
     return (<div>
     <Header title="Users count"/>
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
        </aside>
   </div>)
    }
deleteUser(id){
this.setState({
  users: this.state.users.filter((el)=> el.id !== id)
})
}

    addUser(user){
      const id = this.state.users.length + 1
      this.setState({users: [...this.state.users, {id, ...user}]})
    }
   }

   export default App