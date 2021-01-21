import React, { useEffect, useState } from 'react';
import TodoForm from '../form/form.js';
import TodoList from '../list/list.js';
import useAxios from '../customHooks/useAjax';


import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [
    list,
    _addItem,
    _toggleComplete,
    _deleteItem,
    _getTodoItems
  ] = useAxios();

  useEffect(_getTodoItems, []);
  
  //number of incomplete tasks
  const [incomplete, setIncomplete] = useState([]);
  const incompleteTasksFunction = ()=>{
    let incomplete = `There are ${list.filter(item => !item.complete).length} Items To Complete`
    setIncomplete(incomplete);
  }
  useEffect(incompleteTasksFunction, [list])

  // set title
  useEffect(()=>{
    document.title = `${list.filter(item => item.complete).length} Complete/${list.filter(item => !item.complete).length} Incomplete`
  })

  //   const [title, setTitle] = useState(document.title);
  // useEffect(()=>{
  //   let updateTasks = `${list.filter(item => item.complete).length} Complete/${list.filter(item => !item.complete).length} Incomplete`
  //   setTitle(updateTasks);
    
  //   return()=>{
  //     document.title = updateTasks
  //   }
  // })

  return (
    <>
      <header>
        <h1>Hello</h1>
        <h2>
          {incomplete}
          {/* There are {list.filter(item => !item.complete).length} Items To Complete */}
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm sendTodo={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteItem={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;