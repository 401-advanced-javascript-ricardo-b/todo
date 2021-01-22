import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../context/appContext';

const TodoList = (props)=>{
// console.log({props})

  const appContext = useContext(AppContext);
  const [pageCount, setPageCount] = useState([]);

  let page = props.list.slice(0, appContext.maxDisplay);

  const [nextPageList, setNextPage] = useState([]);

  const pageCalc =()=>{
    let pageButtonArray = [];
    let pageNum = Math.ceil((props.list.length) / appContext.maxDisplay);
    for(let i = 1; i <= pageNum; i++){
      pageButtonArray.push(<button key={i} name={i} onClick={nextPage}>Page {i}</button>)
    }
    setPageCount([pageButtonArray]);
  }

  const nextPage = (e) =>{
    let pageNumber = e.target.name;
    let newPage = props.list.slice((pageNumber-1) * appContext.maxDisplay, appContext.maxDisplay + (pageNumber-1) * AppContext.maxDisplay);
    setNextPage(newPage);
  }

  useEffect(()=>{
    pageCalc();
    setNextPage(page);
  }, [props.list]);

  

  return (
    <>
      <ul>
        {nextPageList.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >

            <span >

              <section onClick={() => props.handleComplete(item._id)} className="assignee">
                {item.assignee}
              </section>
              <section className="deleteButton">
                <button onClick={() => props.deleteItem(item._id)}> X </button>
              </section>
              <section>
                {item.text} 
              </section>
            </span>
          </li>
        ))}
      </ul>
      <section>
        {pageCount}
      </section>
    </>    
  );
  
}

export default TodoList;