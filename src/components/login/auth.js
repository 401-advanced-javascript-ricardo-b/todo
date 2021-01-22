import React, {useEffect, useState, useContext} from 'react';
import {LoginContext} from '../context/loginContext';

//auth uses LoginContext to check if the user is logged in
//auth gets props of capability of user

function Auth(props){
  const [okToRender, setOkToRender] = useState(false);
  const loginContext = useContext(LoginContext);

  useEffect(()=>{
    console.log({loginContext})
    setOkToRender(
      loginContext.loggedIn && (props.capabiltiy ? loginContext.user.capabilties.includes(props.capability) : false)
    )
  }, [loginContext.loggedIn, props.capability])

  console.log(okToRender, loginContext.loggedIn)

  return(
    okToRender &&
    <section>{props.children}</section>
    )
}

export default Auth;