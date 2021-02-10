import { memo, MouseEventHandler } from "react";
import styled from "styled-components";

type ButtonProps = {
  readonly text: string;
  readonly onClick: MouseEventHandler<HTMLButtonElement>;
  readonly ariaLabel: string;
};

const StyledButton = styled.button`
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

export const MovieExplorerButton = memo<ButtonProps>(
  ({ text, onClick, ariaLabel }) => {
    return (
      <StyledButton onClick={onClick} aria-label={ariaLabel}>
        {text}
      </StyledButton>
    );
  },
);

MovieExplorerButton.displayName = "MovieExplorerButton";
