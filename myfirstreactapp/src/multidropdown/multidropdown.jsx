import React, { useState } from "react";

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

  const handalMainOpen = (e) => {
    setIsMainOpen(e.target.value);
    setIsSubOpen("")
  };

  const handalSubOpen = (e) => {
    setIsSubOpen(e.target.value);
  };

  return (
    <div>
      <select onClick={handalMainOpen}>     
        <option value="">Select Category</option>
        {Object.keys(data).map((item) => (
          <option>{item}</option>
        ))}
      </select>
      {isMainOpen && (
        <select onClick={handalSubOpen}>
            <option value="">Select Sub Category</option>
          {Object.keys(data[isMainOpen]).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      )}
      {isSubOpen && (
        <select>
             <option value="">Select Your Choice</option>
          {data[isMainOpen][isSubOpen].map((item) => (
            <option>{item}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default MultiDropDown;