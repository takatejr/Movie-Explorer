import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2%;
padding: 5vh 0 1vh;

& > input {
  border: 1px solid rgba(100, 170, 50, 0.7);
  border-radius: 0.25rem;
  background-color: transparent;
  outline: none;
  padding: 2%;
  transition: all 0.2s ease;
  z-index: 500;
}
& > label {
  color: #757575;
  font-size: 1.8rem;
  transition: all 0.2s ease;
  margin: 2%;
  z-index: 500;
}
`;
