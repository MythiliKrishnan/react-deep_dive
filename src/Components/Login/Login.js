import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import './Login.css';
const login = () => {
  
  return(
       <div className="login-wrapper">
         <Paper className="login-container" elevation={3} > 
           <Avatar className="logo" src="/assests/images/logo.png"/>
             <div className="header">
               <h3><i>Learning Path - Way to Success</i></h3>
             </div>
             <div className="content">
             <TextField 
              id="standard-basic" 
              label="UserName" 
              variant="outlined"
              className="textfield" 
              required
              />
             <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="outlined"
              className="textfield" 
              required
             />
             <Button 
             variant="filled"
             className="button">
             Login
             </Button>
             </div>
         </Paper>
        </div>
   )
}
export default login;

