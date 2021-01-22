import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo-connected.js';
import AppContext from './components/context/appContext'
import 



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