import React from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  return (
    <div className="operation-container">
      {
        props.operators.map((number, index) => (
          <OperatorButton key={index} operator={number.char} 
          setDataOp={props.setDataOp}/>
        ))}
    </div>
  );
};

export default Operators;