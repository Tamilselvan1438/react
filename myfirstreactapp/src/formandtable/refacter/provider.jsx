import { useState, createContext } from "react";

const data = {
  Name: "",
  Gender: "",
  "Phone Number": "",
  Email: "",
  Active: "",
  Review: "",
  Sports: [],
};

const FormDataContext = createContext();

const FromProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState([]);
  const [formData, setFormData] = useState(data);
  const [clickValue, setClickValue] = useState([]);
  const [selected, setSelected] = useState(false);

  const handleSubmit = () => {
    setInputValue([...inputValue, { ...formData, Sports: clickValue }]);
    setFormData(data);
    setClickValue([]);
  };

  const handleDelete = (id) => {
    setInputValue(inputValue.filter((item) => item.Email !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowSportsName = () => {
    setSelected(!selected);
  };

  const handleCheckbox = (name) => {
    setClickValue((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((itemName) => itemName !== name)
        : [...prevChecked, name]
    );
  };


  return (
    <FormDataContext.Provider
      value={{
        inputValue,
        formData,
        clickValue,
        selected,
        handleSubmit,
        handleDelete,
        handleInputChange,
        handleShowSportsName,
        handleCheckbox,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FromProvider };
