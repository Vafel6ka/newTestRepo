import React, { useState } from "react";

const BasedComp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      count value is {count}
    </div>
  );
};

export default BasedComp;
