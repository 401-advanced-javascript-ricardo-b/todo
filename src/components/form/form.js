import React from 'react';
import useForm from '../customHooks/useForm';

const TodoForm = (props)=>{
  const [handleInputChange, handleSubmit] = useForm(sendItem);

  function sendItem(item){
    props.sendTodo(item)
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <h3>Add Item</h3>
          <label>
            <span>To Do Item</span>
            <input data-testid="todoItem" name="text" placeholder="Add To Do List Item" onChange={handleInputChange}/>
          </label>

          <label>
            <span>Assigned To</span>
            <input data-testid="assignee" type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <button data-testid="submit">Add Item</button>
        </form>
      </>
    );
};


export default TodoForm;