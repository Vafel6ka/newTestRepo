import React from "react";

const ArrEx2 = ({ arr, min, max }) => {
  const tempArr = arr.filter((num) => num >= min && num <= max);
  return <div>result2: {tempArr}</div>;
};

export default ArrEx2;
