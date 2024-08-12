import React, { useState } from "react";
import "./formandtable.css";

const data = {
  Name: "",
  Gender: "",
  "Phone Number": "",
  Email: "",
  Active: "",
  Review: "",
  Sports: [],
};

const sportsData = [
  "Boxing",
  "Cricket",
  "Tennis",
  "Baseball",
  "Golf",
  "Badminton",
  "Basketball",
];

function FormAndTable() {
  const [inputValue, setInputValue] = useState([]);
  const [formData, setFormData] = useState(data);
  const [selected, setSelected] = useState(false);
  const [clickValue, setClickValue] = useState([]);
  const [viewItem, setViewItem] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = (id) => {
    setInputValue(inputValue.filter((item) => item.Email !== id));
    setViewItem(inputValue.Email);
  };

  // const handleViewDelete = () => {
  //   setViewItem([]);
  // };

  const handleSubmit = () => {
    setInputValue([...inputValue, { ...formData, Sports: clickValue }]);
    setFormData(data);
    setClickValue([]);
    setSelected(false);
  };

  const handleView = () => {
    if (viewItem == inputValue.Email) {
      return setViewItem(inputValue);
    }
    setViewItem(inputValue.Email);
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
    <div>
      <table className="table-border">
        <thead>
          <tr>
            <th className="table-border">Id</th>
            <th className="table-border">Name</th>
            <th className="table-border">Gender</th>
            <th className="table-border">Phone Number</th>
            <th className="table-border">Email</th>
            <th className="table-border">Active</th>
            <th className="table-border">Review</th>
            <th className="table-border">Sports</th>
            {/* <th className="table-border">View Details</th> */}
            <th className="table-border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {inputValue.map((item, i) => (
            <tr key={item.Email}>
              <td className="table-border">{i + 1}</td>
              <td className="table-border">{item.Name}</td>
              <td className="table-border">{item.Gender}</td>
              <td className="table-border">{item["Phone Number"]}</td>
              <td className="table-border">{item.Email}</td>
              <td className="table-border">{item.Active}</td>
              <td className="table-border" contentEditable={true}>
                {item.Review}
              </td>
              <td className="table-border">{item.Sports.join(", ")}</td>
              {/* <td className="table-border">
                <button onClick={() => handleView(item)}>View</button>
              </td> */}
              <td className="table-border">
                <button onClick={() => handleDelete(item.Email)} className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="delete" onClick={handleView}>View All Details</button>
      </div>
      {viewItem &&
        viewItem.map((item, i) => (
          <table key={i} className="table-border">
            <h3><tr className="table-border">Details for {item.Name}</tr></h3>
            <tr>
              <td><strong>Gender:</strong></td> <td className="text">{item.Gender}</td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong> </td><td className="text">{item["Phone Number"]}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td> <td className="text">{item.Email}</td>
            </tr>
            <tr>
              <td><strong>Active:</strong></td> <td className="text">{item.Active}</td>
            </tr>
            <tr>
              <td><strong>Review:</strong></td> <td className="text">{item.Review}</td>
            </tr>
            <tr>
             <td> <strong>Sports:</strong></td> <td className="text">{item.Sports.join(", ")}</td>
            </tr>
            {/* <tr>
            <button onClick={handleViewDelete}>Remove</button>
          </tr> */}
          </table>
        ))}
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  placeholder="Enter the Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="Gender"
                    value="Male"
                    checked={formData.Gender === "Male"}
                    onChange={handleInputChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="Gender"
                    value="Female"
                    checked={formData.Gender === "Female"}
                    onChange={handleInputChange}
                    required
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="Gender"
                    value="Others"
                    checked={formData.Gender === "Others"}
                    onChange={handleInputChange}
                    required
                  />
                  Others
                </label>
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input
                  type="number"
                  name="Phone Number"
                  value={formData["Phone Number"]}
                  onChange={handleInputChange}
                  placeholder="Enter the Number"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  placeholder="Enter the Email"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Active:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="Active"
                    value="true"
                    checked={formData.Active === "true"}
                    onChange={handleInputChange}
                    required
                  />
                  true
                </label>
                <label>
                  <input
                    type="radio"
                    name="Active"
                    value="false"
                    checked={formData.Active === "false"}
                    onChange={handleInputChange}
                    required
                  />
                  false
                </label>
              </td>
            </tr>
            <tr>
              <td>Review:</td>
              <td>
                <input
                  type="text"
                  name="Review"
                  value={formData.Review}
                  onChange={handleInputChange}
                  placeholder="Enter Your Review"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Sports:</td>
              <td>
                <input
                  type="text"
                  name="Sports"
                  value={clickValue}
                  onChange={handleInputChange}
                  onClick={handleShowSportsName}
                  placeholder="Select Your Sports"
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {selected && (
                  <td>
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
                  </td>
                )}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="delete" onClick={handleSubmit}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormAndTable;
