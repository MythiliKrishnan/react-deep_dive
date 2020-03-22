import React from 'react';
const inputStyles = {
   border: "2px solid gray",
  
}
const UserInput = (props) => {
   return <input type="text"
    onChange={props.changed} 
    name={props.username}
    value={props.initialName}
    style={inputStyles}
    />
}

export default UserInput;