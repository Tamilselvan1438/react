import { useContext } from "react";
import { FormDataContext } from "./provider.jsx";
import Sports from "./sports.jsx";

const Form = () => {
  const {
    formData,
    handleShowSportsName,
    selected,
    handleSubmit,
    handleInputChange,
    clickValue,
    setClickValue,
    inputRef
  } = useContext(FormDataContext);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                ref={inputRef}
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
                <Sports clickValue={clickValue} setClickValue={setClickValue} />
              )}
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="delete" onClick={handleSubmit}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
