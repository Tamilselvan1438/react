import { createContext, useReducer } from "react";

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
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        inputValue: [
          ...state.inputValue,
          { ...state.formData, Sports: state.clickValue },
        ],
        formData: initialState.formData,
        clickValue: [],
        isOpen: false,
        selected: false,
      };
    case "DELETE":
      return {
        ...state,
        inputValue: state.inputValue.filter(
          (item) => item.Email !== action.payload
        ),
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SPORTS":
      return {
        ...state,
        selected: !state.selected,
      };
    case "VIEW":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "CHECKBOX":
      return {
        ...state,
        clickValue: state.clickValue.includes(action.payload)
          ? state.clickValue.filter((item) => item !== action.payload)
          : [...state.clickValue, action.payload],
      };
    default:
      return state;
  }
};

const FormDataContext = createContext();

const FromProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => dispatch({ type: "SUBMIT" });
  const handleDelete = (id) =>
    dispatch({ type: "DELETE", payload: id });
  const handleInputChange = (e) =>
    dispatch({
      type: "INPUT_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  const handleShowSportsName = () =>
    dispatch({ type: "SPORTS" });
  const handleViewDetails = () => dispatch({ type: "VIEW" });
  const handleCheckbox = (name) =>
    dispatch({ type: "CHECKBOX", payload: name });

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
