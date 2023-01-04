import React from "react";
import PropExample from "../PropExample";

const Child = () => {
  console.log("Hello!!!!");
};

const getValueFromChildComp = (value) => {
  console.log(value);
};

function FirstComponent() {
  return (
    <div>
      <p>First conponent</p>
      <PropExample
        getValueFromChildComp={getValueFromChildComp}
        data={"is it prop??"}
        hello={Child}
      />
    </div>
  );
}

export default FirstComponent;
