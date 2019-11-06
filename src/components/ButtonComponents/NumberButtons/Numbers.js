import React from "react";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="button_container"> 
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        props.numbers.map((number, index) => (
          <NumberButton key={index} 
                        number={number} 
                        setDataA={props.setDataA}
                        dataA={props.dataA} 
                        dataOp={props.dataOp}
                        setDataOp={props.setDataOp}/>
        ))}
    </div>
  );
};

export default Numbers;