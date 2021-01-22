import React, {useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

cont API = process.env.REACT_APP_API; 

export const LoginContext = React.createContext();

function LoginProvider(props){
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password)=>{
    fetch(`${API}/signin`,{
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        'Authorization': `Bawsic ${btoa(`${username}:${password}`)}`,
      }),
    })
      .then(response => response.text())
      .then(token => this.validateToken(token))
      .catch(console.error);
  }

  validateToken = token =>{
    try{
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      this.setLoginState(true, token, user);
    }
    catch(e){
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    } 
  };

  logout = () =>{
    this.setLoginState(false, null, {});
  };

  // setLoginState = (loggedIn, token, user)+>{
  //   cookie.save('auth', token);
  //   this.setState({token, loggedIn, user})
  // }
}