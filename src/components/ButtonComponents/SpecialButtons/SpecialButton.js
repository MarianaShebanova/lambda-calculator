import React from "react";
function calc(props) {
  if (props.special === 'C') {
    props.setDataA(0);
  }
  if (props.special === "+/-") {
    props.setDataA(- props.dataA);
  }
}

const SpecialButton = (props) => {
  return (
    <button className="button special" onClick={() =>
      calc(props)
    }>
      {props.special}
    </button>
  );
};
export default SpecialButton;