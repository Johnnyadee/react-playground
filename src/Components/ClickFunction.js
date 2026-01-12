import React from "react";

export default function ClickFunction() {
    const clickFunction = () => {
        console.log("Clicked");
    }
  return (
    <div>
      <button onClick={clickFunction}>Click</button>
    </div>
  );
}
