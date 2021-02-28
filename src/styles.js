import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: medium;
    color: ${(props) => props.theme.firstColor};
    background-image: ${(props) => props.theme.backgroundImage}
  }
`;
export const SubmitButton = styled.button`
  /* background-color: #faef8c; */
  border: none;
  font-size: medium;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-style: italic;
  }
`;
export const GuessBox = styled.input`
  /* background-color: #faef8c; */
  font-style: italic;
  text-align: center;
  border: none;
  padding: 10px;
  font-size: medium;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const Title = styled.h1`
  text-align: center;
  font-style: italic;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
    0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
`;
export const Nattempts = styled.h3`
  text-align: center;
  font-style: italic;
  color: red;
  background-color: black;
`;
export default styled;
