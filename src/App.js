import React, {useState} from 'react';
import "./styles/App.css";
import "./styles/TodoResults.css";
import TodoInputs from './components/TodoInputs';
import TodoResults from './components/TodoResults';


const App = () => {
  const [listTodo, setListTodo] = useState([]);
  
  let addList = (inputText)=>{
    if(inputText!==''){
      setListTodo([...listTodo, inputText]);
  }
}
const DeleteListItem = (key)=>{
  let NewListTodo=[...listTodo];
  NewListTodo.splice(key, 1)
  setListTodo([...NewListTodo])
}
  return (
    <div className='first-container' align="center">
      <h1>To Do List</h1>
      <div className='second-container' align="center">

        <TodoInputs addList= {addList} />
        <hr/>
          <h1></h1>
        {listTodo.map((listItem, i)=>{
          return (
            <TodoResults key={i} index={i} item={listItem} DeleteListItem={DeleteListItem} index={i}/>
          )})}
      </div>
    </div>
  );
}

export default App;
