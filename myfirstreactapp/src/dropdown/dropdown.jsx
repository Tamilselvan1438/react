import React, { useState } from "react";
import "./dropdown.css";

const data = [
  "Tamil",
  "Vasanth",
  "Gopi",
  "Ragul",
  "Yuvaraj",
  "Arun",
  "Subha",
];

function Dropdown() {
  const [name, setName] = useState("");
  const [deletee, setDeletee] = useState(data);

  const handleAddEvent = (event) => {
    setName((prev) => [...prev, event.target.value]);
  };
  const handleRemoveEvent = (element) => {
    setDeletee((prev) => prev.filter((options) => options !== element));
    setName((prev) => prev.filter((options) => options !== element));
  };

  return (
    <div>
      <div>
        <div>
          {deletee.map((option, i) => (
            <div>
              {option}{" "}
              <button
                key={i}
                value={deletee}
                onClick={() => handleRemoveEvent(option)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input type="text" value={name} placeholder="Friends" />
        <div>
          <select onClick={handleAddEvent} className="search">
            {deletee.map((item, i) => (
              <option key={i}>
                <option>{item}</option>
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
