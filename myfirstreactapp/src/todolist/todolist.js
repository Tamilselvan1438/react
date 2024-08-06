import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [inputValue, setInputValue] = useState([]);
  const [value, setValue] = useState('')

  const addEvent = (event) => {
    setInputValue(event.target.value);
}
const changeEvent =()=>{
     setInputValue([...inputValue, value])
     setValue('')
};

  return (
    <div className="colour">
      <center>
        <div>
          <h1>TODOLIST</h1>
          <input placeholder="what needs tobe done?" onChange={addEvent}/>
          <button onClick={addEvent}>+</button>
        </div>
        <table>
          <tr>
            <input type="checkbox" onChange={addEvent}/>
            <td >{inputValue}</td>
          </tr>
        </table>
        <button>0 of 6 tasks down</button>
        <span> </span>
        <button>remove</button>
      </center>
    </div>
  );
}

export default Todolist;
