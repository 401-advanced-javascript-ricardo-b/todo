import {useState, useContext, useEffect} from 'react';
import {AppContext} from '../context/appContext'

const axios = require('axios');

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const useAxios = () => {

  const appContext = useContext(AppContext);
  const [list, setList] = useState([]);

  //mostly sorts
  useEffect(()=>{
    list.sort((a, b)=>{
      return (a[appContext.sortMethod] > b[appContext.sortMethod]) ? 1 : -1;
    })
    setList(list);
  }, [list, appContext.sortMethod]);

  const _addItem = (item) => {
    item.due = new Date();
    console.log('posting a life');

    axios.post(todoAPI, {
      assignee: item.assignee,
      complete: false,
      difficulty: item.difficulty,
      text: item.text,
      _v: 0
    })
      .then(response =>{
        let savedItem = response.data;
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

      console.log('putting a life');


      axios.put(url, {
        complete: item.complete
      })
        // .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _deleteItem = id =>{
    let item = list.filter(i=> i._id === id)[0] || {};

    if (item._id){
      let url = `${todoAPI}/${id}`;
      console.log('deleting a life');


      axios.delete(url)
        .then((data)=> _getTodoItems())
        .catch(console.error);
    }
    // _getTodoItems();
  }

  const _getTodoItems = () => {
    console.log('getting a life');

    axios.get(todoAPI, {
    })
      .then(response =>{
        let results = response.data.results;
        setList(results)
      })
      .catch(console.error);
  };

  return [
    list,
    _addItem,
    _toggleComplete,
    _deleteItem,
    _getTodoItems
  ]
}

export default useAxios;