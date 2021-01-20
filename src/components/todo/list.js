import React, {useState} from 'react';

const TodoList = (props)=>{
console.log({props})

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >

          <span onClick={() => props.handleComplete(item._id)}>

            <section className="assignee">
              {item.assignee}
            </section>
            <section className="deleteButton">
              <button onClick={() => props.deleteItem(item._id)}>X</button>
            </section>
            <section>
              {item.text}
            </section>
          </span>
        </li>
      ))}
    </ul>
  );
  
}

export default TodoList;