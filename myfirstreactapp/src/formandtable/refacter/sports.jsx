import { useContext } from "react";
import { FormDataContext } from "./provider.jsx";

const sportsData = [
  "Boxing",
  "Cricket",
  "Tennis",
  "Baseball",
  "Golf",
  "Badminton",
  "Basketball",
];

const Sports = () => {
  const { clickValue, handleCheckbox } = useContext(FormDataContext);

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
