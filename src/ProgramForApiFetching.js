import { useState } from "react";
import axios from "axios";

const ProgramForApiFetching = () => {
  const [emailDisplay, setEmailDisplay] = useState();
  const onChangeHandler = (e) => {
    let employeeID = e.target.value;
    axios.get(`https://reqres.in/api/users/${employeeID}`).then((res) => {
      if (res && res.data && res.data.data) {
        setEmailDisplay(res.data.data.email);
      }
    });
  };

  return (
    <div className="App">
      <input
        name="empId"
        onChange={onChangeHandler}
        placeholder="Please Enter Employee ID"
      />
      <h3>Email ID</h3>
      {emailDisplay}
    </div>
  );
};

export default ProgramForApiFetching;
