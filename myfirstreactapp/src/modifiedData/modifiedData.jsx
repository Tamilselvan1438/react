import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ModifiedData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    axios.get('https://66cc14b84290b1c4f19bd4df.mockapi.io/a')
      .then(response => {
        setData(response.data); 
        setLoading(false);
      })
      .catch(err => {
        setError(err); 
        setLoading(false);
      });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <table border="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Age</th>
            <th>Name</th>
            <th>MobileNo</th>
            <th>Gender</th>
            <th>Dateofbirth</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,i) => (
            <tr key={i}>
              <td >{item.Id}</td>
              <td contentEditable suppressContentEditableWarning>{item.Age}</td>
              <td contentEditable suppressContentEditableWarning>{item.Name}</td>
              <td contentEditable suppressContentEditableWarning>{item.MobileNo}</td>
              <td contentEditable suppressContentEditableWarning>{item.Gender}</td>
              <td contentEditable suppressContentEditableWarning>{item.Dateofbirth}</td>
              <td contentEditable suppressContentEditableWarning>{item.Active? "true":"false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModifiedData;
