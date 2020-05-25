import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login' ;
class App extends Component {
render () {
   return (
      <div className="App">
          <BrowserRouter>
          <Route exact path="/"  render={() => (<Redirect to = "/Login/"/>)} />
          <Route path="/Login" component={Login}/>
          </BrowserRouter>
      </div>
      
    );
  }
}
export default App;    
