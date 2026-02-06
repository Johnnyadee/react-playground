import React from "react";

function NameList() {
  const Names = ["John", "Jane", "Jack"];
  return (
    <div>
      <h1>{Names[0]}</h1>
      <h1>{Names[1]}</h1>
      <h1>{Names[2]}</h1>
    </div>
  );
}

export default NameList;
