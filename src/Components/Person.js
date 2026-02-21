import React from "react";

export default function Person({ person }) {
  return (
    <>
      <p>
        I am {person.name} and I am {person.age} years old and I know {person.skill}
      </p>
    </>
  );
}
