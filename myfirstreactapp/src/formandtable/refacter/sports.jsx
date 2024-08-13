import React from "react";

const sportsData = [
  "Boxing",
  "Cricket",
  "Tennis",
  "Baseball",
  "Golf",
  "Badminton",
  "Basketball",
];

const Sports = ({ clickValue, setClickValue }) => {
  const handleCheckbox = (name) => {
    setClickValue((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((itemName) => itemName !== name)
        : [...prevChecked, name]
    );
  };

  return (
    <div>
      {sportsData.map((option, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={clickValue.includes(option)}
            onChange={() => handleCheckbox(option)}
            required
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Sports;
