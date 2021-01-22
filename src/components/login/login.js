import React, {useContext, useState} from 'react';
import {LoginContext} from '../context/loginContext';

//context to keep track of people logging in and out
//form

function Login(props){
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const loginContext = useContext(LoginContext);

  const handleSubmit = e =>{
    e.preventDefault();
    //send username and password to context
    loginContext.login(username, password);
  }

  const handleNameChange = (e) =>{
    setUserName(e.target.value);
  }

  const handlePassordChange = (e)=>{
    setPassword(e.target.value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type="text" name="name" />
      <input onChange={handlePassordChange} type="text" name="name" />
      <button>Sign In</button>
    </form>
  )
}

export default Login;