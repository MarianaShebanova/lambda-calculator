import React from "react";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  

  return (
    <div className="button_container">
      {
        props.specials.map((special, index) => (
          <SpecialButton key={index} special={special} 
                         setDataA={props.setDataA}
                         dataA={props.dataA} />
        ))}
    </div>
  );
};

export default Specials;