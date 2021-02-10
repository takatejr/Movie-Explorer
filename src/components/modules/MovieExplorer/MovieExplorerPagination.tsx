import { memo, MouseEventHandler } from "react";
import styled from "styled-components";

type MovieExplorerPaginationProps = {
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly page: number;
};

const StyledButton = styled.button`
  margin: 0;
  width: 5%;
  color: rgba(40, 40, 40, 0.7);
  margin: 0.1%;
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;

export const MovieExplorerPagination = memo<MovieExplorerPaginationProps>(
  ({ paginate, page }) => {
    return (
      <StyledButton onClick={paginate} value={page}>
        {page}
      </StyledButton>
    );
  },
);

MovieExplorerPagination.displayName = "MovieExplorerPagination";
