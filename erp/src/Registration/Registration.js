import React, {Component} from 'react';

class Registration extends React.Component{

   render(){
       return( <div> 
               <h2> Registration </h2>

               <label>Email: </label>
               <input type="text" name="email" />
               <label>User Id: </label>
               <input type="text" name="userId" />
               <label>Password:</label>
               <input type="password" name="password" />
       </div>
       );
   }

}

export default Registration;