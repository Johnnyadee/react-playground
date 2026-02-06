import React from "react";

function NameList() {
  const name = ["John", "Jane", "Jack"];
  const nameList = name.map((name) => <h1>{name}</h1>);
  return <>{nameList}</>;
}

export default NameList;
