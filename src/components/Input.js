import React from "react";
import { useState } from "react";
import { SubmitButton } from "../styles";
import { Nattempts } from "../styles";
import { GuessBox } from "../styles";

const Input = () => {
  const [numbers, setNumbers] = useState(0);
  const [attempt, attemptState] = useState(10);
  const [generate, setRandom] = useState(Math.floor(Math.random() * 101));

  const takenumber = () => {
    setRandom(generate);
    if (numbers == generate) {
      return alert("You win!");
    } else if (attempt === 0) {
      return alert("You loses the game :)");
    } else attemptState(attempt - 1);
  };

  return (
    <div>
      <div>
        <Nattempts>You have {attempt} attempts.</Nattempts>
      </div>
      <div>
        {console.log(generate)}
        {console.log(numbers)}
        <div>
          <GuessBox
            placeholder="Guess your number from 1 to 100"
            onChange={(event) => setNumbers(event.target.value)}
            disabled={numbers == generate}
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
