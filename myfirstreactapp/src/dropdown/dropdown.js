// import React, { useState } from "react";
// import "./dropdown.css";

// function Dropdown() {
//   const data = [
//     {
//       id: 1,
//       first_name: "Gavrielle",
//       last_name: "Lineham",
//       email: "glineham0@barnesandnoble.com",
//       gender: "Female",
//       country: "Russia",
//     },
//     {
//       id: 2,
//       first_name: "Michail",
//       last_name: "Napolione",
//       email: "mnapolione1@flickr.com",
//       gender: "Male",
//       country: "France",
//     },
//     {
//       id: 3,
//       first_name: "Marthena",
//       last_name: "Antognoni",
//       email: "mantognoni2@slate.com",
//       gender: "Female",
//       country: "China",
//     },
//     {
//       id: 4,
//       first_name: "Darrelle",
//       last_name: "Plinck",
//       email: "dplinck3@vinaora.com",
//       gender: "Female",
//       country: "France",
//     },
//     {
//       id: 5,
//       first_name: "Matthias",
//       last_name: "Whyffen",
//       email: "mwhyffen4@ft.com",
//       gender: "Male",
//       country: "Japan",
//     },
//     {
//       id: 6,
//       first_name: "Phillip",
//       last_name: "Heugle",
//       email: "pheugle5@yelp.com",
//       gender: "Bigender",
//       country: "China",
//     },
//     {
//       id: 7,
//       first_name: "Dall",
//       last_name: "Jouannisson",
//       email: "djouannisson6@bing.com",
//       gender: "Male",
//       country: "Mexico",
//     },
//     {
//       id: 8,
//       first_name: "Marcel",
//       last_name: "Dudmarsh",
//       email: "mdudmarsh7@hostgator.com",
//       gender: "Male",
//       country: "Russia",
//     },
//     {
//       id: 9,
//       first_name: "Alessandro",
//       last_name: "Walden",
//       email: "awalden8@patch.com",
//       gender: "Male",
//       country: "Russia",
//     },
//     {
//       id: 10,
//       first_name: "Elwin",
//       last_name: "Rudland",
//       email: "erudland9@friendfeed.com",
//       gender: "Male",
//       country: "China",
//     },
//   ];

//   const [name, setName] = useState([]);
//   const [deletee, setDeletee] = useState(data);

//   const handleAddEvent = (event) => {
//     setName((prev) => [...prev, event.target.value]);
//   };
//   const handleRemoveEvent = (element) => {
//     setDeletee((prev) => prev.filter((options) => options.id != element.id));
//     setName((prev) => prev.filter((options) => options != `${element.first_name}${element.last_name}`));
//   };

//   return (
//     <div>
//       <div>
//         <table>
//           {deletee.map((option, i) => (
//             <tr>
//               <td>{option.id}</td>
//               <td>
//                 {option.first_name}
//                 {option.last_name}
//               </td>
//               <td>{option.email}</td>
//               <td>{option.gender}</td>
//               <td>{option.country}</td>
//               <button
//                 key={i}
//                 value={deletee}
//                 onClick={() => handleRemoveEvent(option)}
//               >
//                 X
//               </button>
//             </tr>
//           ))}
//         </table>
//       </div>
//       <div>
//         <input type="text" value={name} placeholder="searchBar" />
//         <div>
//           <select onClick={handleAddEvent} className="search">
//             {deletee.map((item, i) => (
//               <option key={i} value={`${item.first_name}${item.last_name}`}>
//                 <option>{item.first_name}{item.last_name}</option>
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;

import React, { useState } from "react";
import "./dropdown.css";

function Dropdown() {
  const data = [
    {
      id: 1,
      first_name: "Gavrielle",
      last_name: "Lineham",
      email: "glineham0@barnesandnoble.com",
      gender: "Female",
      country: "Russia",
    },
    {
      id: 2,
      first_name: "Michail",
      last_name: "Napolione",
      email: "mnapolione1@flickr.com",
      gender: "Male",
      country: "France",
    },
    {
      id: 3,
      first_name: "Marthena",
      last_name: "Antognoni",
      email: "mantognoni2@slate.com",
      gender: "Female",
      country: "China",
    },
    {
      id: 4,
      first_name: "Darrelle",
      last_name: "Plinck",
      email: "dplinck3@vinaora.com",
      gender: "Female",
      country: "France",
    },
    {
      id: 5,
      first_name: "Matthias",
      last_name: "Whyffen",
      email: "mwhyffen4@ft.com",
      gender: "Male",
      country: "Japan",
    },
    {
      id: 6,
      first_name: "Phillip",
      last_name: "Heugle",
      email: "pheugle5@yelp.com",
      gender: "Bigender",
      country: "China",
    },
    {
      id: 7,
      first_name: "Dall",
      last_name: "Jouannisson",
      email: "djouannisson6@bing.com",
      gender: "Male",
      country: "Mexico",
    },
    {
      id: 8,
      first_name: "Marcel",
      last_name: "Dudmarsh",
      email: "mdudmarsh7@hostgator.com",
      gender: "Male",
      country: "Russia",
    },
    {
      id: 9,
      first_name: "Alessandro",
      last_name: "Walden",
      email: "awalden8@patch.com",
      gender: "Male",
      country: "Russia",
    },
    {
      id: 10,
      first_name: "Elwin",
      last_name: "Rudland",
      email: "erudland9@friendfeed.com",
      gender: "Male",
      country: "China",
    },
  ];

  const [name, setName] = useState([]);
  const [deletee, setDeletee] = useState(data);
  const [clickDlt, setclickDlt] = useState(data);

  const handleAddEvent = (event) => {
    setName((prev) => [...prev, event.target.value]);
  };
  const handleRemoveEvent = (element) => {
    setDeletee((prev) => prev.filter((options) => options.id != element.id));
    setName((prev) =>
      prev.filter(
        (options) => options != `${element.first_name}${element.last_name}`
      )
    );
  };

  return (
    <div>
      <div>
        <table>
          {deletee.map((option, i) => (
            <tr>
              <td>
                <input value={deletee} type="checkbox" />
              </td>
              <td>{option.id}</td>
              <td>
                {option.first_name}
                {option.last_name}
              </td>
              <td>{option.email}</td>
              <td>{option.gender}</td>
              <td>{option.country}</td>
              <button
                key={i}
                value={deletee}
                onClick={() => handleRemoveEvent(option)}
              >
                X
              </button>
            </tr>
          ))}
        </table>
        <button
          value="clickDlt"
          onClick={() => handleRemoveEvent}
          className="search"
        >
          delete
        </button>
        <hr color="red" />
      </div>
      <div>
        <input type="text" value={name} placeholder="searchBar" />
        <div>
          <select onClick={handleAddEvent} className="search">
            {deletee.map((item, i) => (
              <option key={i} value={`${item.first_name}${item.last_name}`}>
                <option>
                  {item.first_name}
                  {item.last_name}
                </option>
              </option>
            ))}
          </select>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
