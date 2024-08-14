import { useContext } from "react";
import { FormDataContext } from "./provider.jsx";

const Table = () => {
  const { inputValue, handleDelete } = useContext(FormDataContext);

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
              <td className="table-border">
                <button
                  onClick={() => handleDelete(item.Email)}
                  className="delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
