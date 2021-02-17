import styled from "styled-components";

export const StyledButton = styled.button`
  height: 3vh;
  width: 50%;
  color: rgba(40, 40, 40, 0.7);
  margin: 1%;
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;