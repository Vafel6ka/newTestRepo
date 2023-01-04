import React from "react";
import "./index.scss";

const PropExample = ({
  data = "no data",
  hello = () => {
    console.log("no func");
  },
  getValueFromChildComp,
}) => {
  const handleClick = () => {
    count++;
    getValueFromChildComp(count);
  };

  let count = 5;
  console.log("data:", data);
  hello();

  return (
    <div className="PropContainer">
      <div>
        <p>{data}</p>
      </div>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
};

export default PropExample;
