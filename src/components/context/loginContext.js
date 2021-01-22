import React, {useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = process.env.REACT_APP_API; 
// https://auth-server-401d39.herokuapp.com

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
      .then(response =>{ 
        return response.json()
      })
      .then(user =>{
        console.log('user', user);
        validateToken(user.token);
      })
      .catch(console.error);
  }

  const validateToken = token =>{
    try{
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      this.setLoginState(true, token, user);
    }
    catch(e){
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    } 
  };

  // const logout = () =>{
  //   this.setLoginState(false, null, {});
  // };

  const setLoginState = (loggedIn, token, user)=>{
    cookie.save('auth', token);
    setLoggedIn(true);
    setUser(user);
  }

  const state = {
    user,
    loggedIn,
    login: login  
  }

  // componentDidMount(){
  //   const searchURL = URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = searchURL.get('token') || cookieToken || null;
  //   this.validateToken(token); 
  // }

  return(
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;