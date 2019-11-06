import React from "react";

function calc(props) {
  console.log(props.dataOp);
   if (props.dataOp === '-') {
     props.setDataA(props.dataA - props.number);
     props.setDataOp(0);
   }
  if (props.dataOp === '+') {
    props.setDataA(props.dataA + props.number);
    props.setDataOp(0);
  }
  if (props.dataOp === 'x') {
    props.setDataA(props.dataA * props.number);
    props.setDataOp(0);
  }
  if (props.dataOp === '/') {
    props.setDataA(props.dataA / props.number);
    props.setDataOp(0);
  }
  if (props.dataOp == 0) {
    props.setDataA(props.number);
  }
}

const NumberButton = (props) => {
  return (
    <button className="button" onClick={() =>  
      calc(props)
    }>
        {props.number}
    </button>
  );
};

export default NumberButton;