import { memo, MouseEventHandler } from "react";
import { StyledButton } from "./Button.styles"

type ButtonProps = {
  readonly text: string;
  readonly onClick: MouseEventHandler<HTMLButtonElement>;
  readonly ariaLabel: string;
};

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