import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operator" 
      onClick={() => props.setDataOp(props.operator)}>
      {props.operator}
    </button>
  );
};

export default OperatorButton;
