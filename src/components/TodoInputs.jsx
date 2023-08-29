
import React ,{useState} from 'react'

const TodoInputs = (props) => {
    const [inputText, setInputText] = useState('');
  return (
    <div>
      <input className="searchbox" type="text" placeholder="Enter Task" value={inputText} onChange={e=>{
        setInputText(e.target.value)}}/>
      <button className='search-btn' type="button" onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>
    </div>
  );
}

export default TodoInputs;
