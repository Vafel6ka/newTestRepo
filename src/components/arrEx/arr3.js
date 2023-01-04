import React from "react";

const ArrEx3 = ({ arr }) => {
  const tempArr = arr.sort((a, b) => a - b);
  console.log(tempArr);
  return <div>result2: {tempArr}</div>;
};

export default ArrEx3;
