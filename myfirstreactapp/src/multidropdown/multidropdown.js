import { useState } from "react";
import "./multidropdown.css";

function MultiDropDown(props) {
  const { data } = props;
  const [activeOption, setActiveOption] = useState("");
  const datalabel = data.map((item) => item.label);
  const [activeDisOption, setActiveDisOption] = useState(datalabel);

  const handleCheck = (label) => {
    setActiveOption(activeOption === label ? null : label);

    setActiveDisOption(activeOption === label ? datalabel : label);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.label} className="alingment">
          {activeDisOption.includes(item.label) && (
            <span onClick={() => handleCheck(item.label)}>{item.label}</span>
          )}
          {activeOption === item.label && item.children && (
            <div>
              <MultiDropDown data={item.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default MultiDropDown;
