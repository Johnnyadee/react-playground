import React from "react";
import Person from "./Person";

function NameList() {
  const person = [
    {
      id: 1,
      name: "Null",
      age: 20,
      skill: "python ",
    },
    {
      id: 2,
      name: "John",
      age: 25,
      skill: "React",
    },
    {
      id: 3,
      name: "Jane",
      age: 30,
      skill: "Angular",
    },
  ];
  const personList = person.map((person) => <Person person={person} />);
  return <>{personList}</>;
}
  
export default NameList;
  