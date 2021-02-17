import styled from "styled-components";

export const StyledPagination = styled.div`
  width: 70vw;
  margin: 3% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  width: 15%;
  color: rgba(40, 40, 40, 0.7);
  margin: 0.1%;
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;

export const CurrentButton = styled.button`
  margin: 0.1%;
  width: 15%;
  background-color: rgba(30, 200, 50, 1);
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;
