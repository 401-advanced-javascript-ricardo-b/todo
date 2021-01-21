import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo-connected.js';
import AppContext from './components/context/appContext'

const App = () => {
  
    return (
      <>
        <AppContext>
          <ToDo />
        </AppContext>
      </>
    );
}
export default App;