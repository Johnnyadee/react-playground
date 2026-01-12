import React from "react";

const Greet = (props) => {
  const { name, username } = props;
  return (
    <div>
      <h1>
        Welcome {name}, your username is {username}
      </h1>
    </div>
  );
};

export default Greet;
