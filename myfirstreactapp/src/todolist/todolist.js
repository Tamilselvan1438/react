import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [inputValue, setInputValue] = useState([]);
  const [value, setValue] = useState("");
  const [selceted, setSelceted] = useState([]);

  const addEvent = (event) => {
    setValue(event.target.value);
  };
  const changeEvent = () => {
    setInputValue([...inputValue, value]);
    setValue("");
  };
  const handleRemoveEvent = (element) => {
    setInputValue((prev) => prev.filter((options) => options != element));
    setSelceted([]);
  };
  const handleDelete = () => {
    setInputValue((arg) => arg.filter((option) => !selceted.includes(option)));
    setSelceted([]);
  };

  const handleCheckbox = (name) => {
    setSelceted((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((itemName) => itemName !== name)
        : [...prevChecked, name]
    );
  };

  return (
    <div className="colour">
      <div>
        <div className="h1">
          <h1 className="h1">TODOLIST</h1>
          <input
            className="h1"
            placeholder="what needs tobe done?"
            value={value}
            onChange={addEvent}
          />
          <span> </span>
          <button onClick={changeEvent} className="tamil">
            +
          </button>
        </div>
        <div>
          <ul>
            {inputValue.map((item, i) => (
              <div key={i} className="h3">
                <input
                  type="checkbox"
                  checked={selceted.includes(item)}
                  onChange={() => handleCheckbox(item)}
                  readOnly
                />
                {item}{" "}
                <button
                  className="tamil"
                  key={i}
                  value={value}
                  onClick={() => handleRemoveEvent(item)}
                >
                  x
                </button>
                <hr />
              </div>
            ))}
          </ul>
        </div>
        <div className="h1">
          <button>
            {selceted.length} of {inputValue.length} tasks down
          </button>
          <span> </span>
          <button onClick={handleDelete} className="tamil">
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
