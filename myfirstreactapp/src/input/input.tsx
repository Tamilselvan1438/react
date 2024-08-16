//import React from "react";
import React, { useState } from "react";
import "./input.css";

function Input() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = ({ target }) => {
    if (/^[A-Za-z .]*$/.test( target.value )) {
      setName(target.value);
    }
  };
  const handleChangeNumber = ({ target }) => {
    if (/^[0-9]*$/.test( target.value )) {
      setNumber(target.value);
    }
  };
  const handleChangeEmail = ({ target }) => {
    if (/^[A-Za-z0-9@.]*$/.test( target.value )) {
      setEmail(target.value);
    }
  };

  const saveData = () => {
    console.log(
      "Name:",
      `${name}`,
      "Phone Number:",
      `${number}`,
      "Email:",
      `${email}`
    );
    setName(" ");
    setNumber(" ");
    setEmail(" ");
  };
  return (
    <center>
      <table>
        <tr>
          <td>Name: </td>
          <td>
            <input
              type="text"
              className="name"
              value={name}
              onChange={handleChangeName}
            />
          </td>
        </tr>
        <tr>
          <td>Phone Number: </td>
          <td>
            <input
              type="text"
              className="number"
              value={number}
              maxLength={10}
              onChange={handleChangeNumber}
            />
          </td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>
            <input
              type="string"
              className="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </td>
        </tr>
        <tr/>
        <tr>
          <td></td>
          <td>
            <button className="style" onClick={saveData}>
              submit
            </button>
          </td>
        </tr>
      </table>
    </center>
  );
}

export default Input;
