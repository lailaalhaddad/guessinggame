import React from "react";
import { useState } from "react";

const Input = () => {
  const [numbers, setNumbers] = useState(0);
  const takenumber = () => {
    if (numbers === 22) return alert("You win!");
    else alert("You lose :)");
  };
  const [attempt, attemptState] = useState(1);
  const finaliz = () => {
    if (attempt === 5) return alert("You loses the game.");
    else attemptState(attempt + 1);
  };
  return (
    <div>
      <input
        placeholder="Guess your number"
        onChange={(event) => setNumbers(event.target.value)}
      />
      <button onClick={(takenumber, finaliz)}>Submit</button>
    </div>
  );
};

export default Input;
