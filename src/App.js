import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state = {
    username :'Supermax' 
  }
  userNameChangeHandler = (event) => {
    this.setState (
      {
        username : event.target.value
      }
    )
  }
  render() {
    return(
      <div className="App">
      <h1>React App</h1>
      <UserInput 
      changed={this.userNameChangeHandler}
      initialName={this.state.username}
      />
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Stephanie"/>
      </div>
    )
  }
}
export default App;