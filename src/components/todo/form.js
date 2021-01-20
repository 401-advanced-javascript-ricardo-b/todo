import React, {useState} from 'react';


const TodoForm = (props)=>{
  const [item, setItem] = useState({});


  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.sendTodo(item);
    const item = {};
    setItem({});
  };

    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
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