import React, { useState, createContext } from "react";
import Form from "./form.jsx";
import Table from "./table.jsx";
import View from "./view.jsx";
import "/home/tamil/myfirstreactapp/src/formandtable/formandtable.css";

const data = {
  Name: "",
  Gender: "",
  "Phone Number": "",
  Email: "",
  Active: "",
  Review: "",
  Sports: [],
};

export const formDataContext = createContext();

function FormAndTable() {
  const [inputValue, setInputValue] = useState([]);
  const [formData, setFormData] = useState(data);
  const [clickValue, setClickValue] = useState([]);

  const handleSubmit = () => {
    setInputValue([...inputValue, { ...formData, Sports: clickValue }]);
    setFormData(data);
    setClickValue([]);
  };

  const handleDelete = (id) => {
    setInputValue(inputValue.filter((item) => item.Email !== id));
  };

  return (
    <div>
      <formDataContext.Provider
        value={{
          inputValue,
          formData,
          setFormData,
          handleSubmit,
          clickValue,
          setClickValue,
          handleDelete,
        }}
      >
        <Table inputValue={inputValue} handleDelete={handleDelete} />
        <View inputValue={inputValue} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          clickValue={clickValue}
          setClickValue={setClickValue}
        />
      </formDataContext.Provider>
    </div>
  );
}

export default FormAndTable;
