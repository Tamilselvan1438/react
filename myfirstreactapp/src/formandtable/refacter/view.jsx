import React, { useState } from "react";

const ViewDetails = ({ inputValue }) => {
  const [open, setOpen] = useState(false);

  const handelView = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open &&
        inputValue.map((item, i) => (
          <table key={i} className="table-border">
            <h3>
              <tr className="table-border">Details for {item.Name}</tr>
            </h3>
            <tr>
              <td>
                <strong>Gender:</strong>
              </td>
              <td className="text">{item.Gender}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone Number:</strong>
              </td>
              <td className="text">{item["Phone Number"]}</td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td className="text">{item.Email}</td>
            </tr>
            <tr>
              <td>
                <strong>Active:</strong>
              </td>
              <td className="text">{item.Active}</td>
            </tr>
            <tr>
              <td>
                <strong>Review:</strong>
              </td>
              <td className="text">{item.Review}</td>
            </tr>
            <tr>
              <td>
                <strong>Sports:</strong>
              </td>
              <td className="text">{item.Sports.join(", ")}</td>
            </tr>
          </table>
        ))}
      <div>
        <button className="delete" onClick={handelView}>
          View All Details
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
