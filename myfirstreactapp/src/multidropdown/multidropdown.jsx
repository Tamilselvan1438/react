import React, { useState } from "react";
import "./multidropdown.css"

const data = {
  Animals: {
    "Wild Animals": ["Panther", "Tiger", "Lion", "Elephant"],
    "Domestic Animals": ["Cow", "Dog", "Cat", "Horse"],
  },
  Birds: {
    "Birds of Prey": ["Eagle", "Hawk", "Falcon", "Osprey"],
    Songbirds: ["Sparrow", "Robin", "Canary", "Finch"],
  },
};

function MultiDropDown() {
  const [isMainOpen, setIsMainOpen] = useState("");
  const [isSubOpen, setIsSubOpen] = useState("");
  const [choice, SetChoice] = useState("");

  const handalMainOpen = (e) => {
    setIsMainOpen(e.target.value);
    setIsSubOpen("");
    SetChoice("");
  };

  const handalSubOpen = (e) => {
    setIsSubOpen(e.target.value);
    SetChoice("");
  };

  const handalChoice = (e) => {
    SetChoice(e.target.value);
  };

  return (
    <div>
      <div>
        <select onClick={handalMainOpen}>
          <option value="">Select Category</option>
          {Object.keys(data).map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <div className="alingment">
        {isMainOpen && (
          <select onClick={handalSubOpen} >
            <option value="">Select Sub Category</option>
            {Object.keys(data[isMainOpen]).map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        )}
      </div>
      <div className="alingment1">
        {isSubOpen && (
          <select onClick={handalChoice}>
            <option value="">Select Your Choice</option>
            {data[isMainOpen][isSubOpen].map((item) => (
              <option>{item}</option>
            ))}
          </select>
        )}
      </div>
      {choice && <h1>Your Choice :{choice}</h1>}
    </div>
  );
}

export default MultiDropDown;

// recurison method
