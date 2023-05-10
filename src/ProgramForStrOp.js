import { useState } from "react";

const ProgramForStrOp = () => {
  const [stringOne, setStringOne] = useState();
  const [stringTwo, setStringTwo] = useState();
  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();
  const onChangeHandlerStr1 = (e) => {
    e.preventDefault();
    setStringOne(e.target.value);
  };
  const onChangeHandlerStr2 = (e) => {
    e.preventDefault();
    setStringTwo(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    let stringOneArray = stringOne
      .split("")
      .filter((item) => !stringTwo.split("").includes(item));
    let stringTwoArray = stringTwo
      .split("")
      .filter((item) => !stringOne.split("").includes(item));
    setOptionOne(stringOneArray);
    setOptionTwo(stringTwoArray);
  };
  return (
    <div className="App">
      <h3>Input From User</h3>
      <input
        name="str1"
        onChange={onChangeHandlerStr1}
        value={stringOne}
        placeholder="str1"
      />
      <input
        name="str2"
        onChange={onChangeHandlerStr2}
        value={stringTwo}
        placeholder="str2"
      />
      <button onClick={onClickHandler}> Get output</button>
      <h3>Output</h3>
      <h3>op1 : {optionOne ? optionOne : null}</h3>
      <h3>op2 : {optionTwo ? optionTwo : null}</h3>
    </div>
  );
};

export default ProgramForStrOp;
