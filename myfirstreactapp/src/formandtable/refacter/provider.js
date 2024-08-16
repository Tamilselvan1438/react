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

const initialState = {
  inputValue: [],
  formData: data,
  clickValue: [],
  selected: false,
  open: false,
};

const FormDataContext = createContext();

const FromProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleSubmit = () => {
    setState((prevState) => ({
      ...prevState,
      inputValue: [
        ...prevState.inputValue,
        { ...prevState.formData, Sports: prevState.clickValue },
      ],
      formData: initialState.formData,
      clickValue: [],
      open: false,
      selected: false,
    }));
  };

  const handleDelete = (id) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: prevState.inputValue.filter((item) => item.Email !== id),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  const handleShowSportsName = () => {
    setState((prevState) => ({
      ...prevState,
      selected: !prevState.selected,
    }));
  };

  const handleViewDetails = () => {
    setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }));
  };

  const handleCheckbox = (name) => {
    setState((prevState) => ({
      ...prevState,
      clickValue: prevState.clickValue.includes(name)
        ? prevState.clickValue.filter((itemName) => itemName !== name)
        : [...prevState.clickValue, name],
    }));
  };

  return (
    <FormDataContext.Provider
      value={{
        ...state,
        handleSubmit,
        handleDelete,
        handleInputChange,
        handleShowSportsName,
        handleCheckbox,
        handleViewDetails,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext, FromProvider };