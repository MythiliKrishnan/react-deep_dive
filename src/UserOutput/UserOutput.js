import React from 'react';
import './UserOutput.css'
const UserOutput = (props) =>{
   return(
       <div className="UserOutput">
        <p> <b>UserName:  </b>{props.userName} </p>
        <p> Overwritten</p>
       </div>
   )
}

export default UserOutput;