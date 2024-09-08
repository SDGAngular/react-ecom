// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Create a separate CSS file for styling

const Login = () => 
  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await  fetch('https://fakestoreapi.com/users')
      const responseJson = await response.json();
      const findUser = responseJson.find((eachUser)=>{
        return eachUser.username===email && eachUser.password===password
      })
      
      if(findUser){

        console.log("yes login is successfull")
       
      }
      else{
        alert("invalid logib")
      }
    }

    catch(err){
      alert("invalid logib")
    }

 
  //   .then(res=>res.json())
  //   .then((response)=>{

  //     const findUser = response.find((eachUser)=>{
  //       return eachUser.username===email && eachUser.password===password
  //     })

  //     if(findUser){

  //       console.log("yes login is successfull")
       
  //     }
      
      
     

    
  // });


  
}


const handleForgotPassword = () => {
  navigate('/forgot-password');
};

const handleRegister = () => {
  navigate('/register');
};

return (
  <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <div className="button-group">
        <button type="button" className="secondary-button" onClick={handleForgotPassword}>
          Forgot Password
        </button>
        <button type="button" className="secondary-button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </form>
  </div>
);


};

export default Login;
