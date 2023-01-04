import React from "react";

function SecondComponent() {
  let user = {
    name: "Anton",
    read() {
      this.a = 4;
      this.b = 5;
      return this;
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
  console.log("2222");
  user.read();
  console.log(user.mul(), "user.mul");
  console.log(user.sum(), "user.sum");
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}

export default SecondComponent;
