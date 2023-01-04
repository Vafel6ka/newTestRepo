import React from "react";

const ArrEx1 = ({ str }) => {
  // let str = "www-fff-ggg";
  const defArr = str.split("-");
  const arr = defArr.map((word, i) => {
    if (i > 0) word = word[0].toUpperCase() + word.slice(1);
    return word;
  });
  let result = arr.join("");

  return <div>result1: {result}</div>;
};

export default ArrEx1;
