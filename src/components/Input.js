import React from "react";
import { useState } from "react";
import { SubmitButton } from "../styles";
import { Nattempts } from "../styles";
import { GuessBox } from "../styles";

const Input = () => {
  const [numbers, setNumbers] = useState(0);
  const [attempt, attemptState] = useState(5);
  const takenumber = () => {
    if (numbers === Math.floor(Math.random() * 11)) {
      return alert("You win!");
    } else if (attempt === 0) {
      return alert("You loses the game :)");
    } else attemptState(attempt - 1);
  };

  return (
    <div>
      <div>
        <Nattempts>you have {attempt} attempts.</Nattempts>
      </div>
      <div>
        <div>
          <GuessBox
            placeholder="Guess your number"
            onChange={(event) => setNumbers(event.target.value)}
          />
        </div>
        <div>
          <SubmitButton onClick={takenumber}>Submit</SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default Input;
