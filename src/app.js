import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo-connected.js';
import AppContext from './components/context/appContext';
import LoginContext from './components/context/loginContext';
import Auth from './components/login/auth'
import Login from './components/login/login'

const DeleteLink = props =>{
  return(
    <Auth capability='delete'>
      <button>delete</button>
    </Auth>
  )
}

const App = () => {
    return (
      <>
        <LoginContext>
          <AppContext>
            <Login />
            <DeleteLink />
            <ToDo />
          </AppContext>
        </LoginContext>
      </>
    );
}
export default App;