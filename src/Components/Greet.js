import React from "react";

const Greet = ({ name, username }) => {
  return (
    <div>
      <h1>
        Welcome {name}, your username is {username}
      </h1>
    </div>
  );
};

export default Greet;
