import React, { useState } from "react";
import "./dropdown.css";

function Dropdown() {
  const data = ["Tamil","Vasanth","Gopi","Ragul","Yuvaraj","Arun","Subha","Fami"];
  const [name, setName] = useState("");
const abcd =(e)=> {
// setName((prev)=>([...prev, e.target.value]));
};
const cde =(l)=>{
setName(l.target.value);
}

  return (
    <div>
      <div>
        <input type="text" value={name} placeholder="searchBar"/>
        <div>
        <select onClick={abcd}>
        {data.map((item, i) => (
          <option key={i}>
            <option onClick={abcd} className="search">{item}</option>
          </option>
        ))}
        </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
