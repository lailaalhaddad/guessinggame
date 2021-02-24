import React from "react";
import { useState } from "react";

const Input = () => {
  const [numbers, setNumbers] = useState("");
  const takenumber = () => {
    if (numbers === "22") return alert("You win!");
    else alert("You lose :)");
  };
  return (
    <div>
      <input
        placeholder="Guess your number"
        onChange={(event) => setNumbers(event.target.value)}
      />
      <button onClick={takenumber}>Submit</button>
    </div>
  );
};

export default Input;
