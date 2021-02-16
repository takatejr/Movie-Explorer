import { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import usePagination from "../../../hooks/usePagination";

type MovieExplorerPaginationProps = {
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly toggle: () => void;
};

const StyledPagination = styled.div`
  margin: 3%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledButton = styled.button`
  margin: 0;
  width: 15%;
  color: rgba(40, 40, 40, 0.7);
  margin: 0.1%;
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;

const ButtonBorderValue = styled.button`
  margin: 0 5%;
  width: 15%;
  color: rgba(40, 40, 40, 0.7);
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;

const CurrentButton = styled.button`
  margin: 0.1%;
  width: 15%;
  background-color: rgba(30, 200, 50, 1);
  border: 2px solid rgba(100, 200, 50, 0.7);
  border-radius: 3px;

  &:active {
    background-color: rgba(100, 200, 50, 0.5);
  }
`;

export const MovieExplorerPagination = memo<MovieExplorerPaginationProps>(
  ({ paginate, toggle }) => {
    const {
      currentPage,
      prevPage,
      nextPage,
      firstPage,
      lastPage,
      setCurrentPage,
    } = usePagination(2, 100);

    return (
      <StyledPagination>
        {firstPage === prevPage ? null : (
          <ButtonBorderValue
            value={firstPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {firstPage}
          </ButtonBorderValue>
        )}
        {prevPage === currentPage ? null : (
          <StyledButton
            value={prevPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {prevPage}
          </StyledButton>
        )}
        <CurrentButton
          value={currentPage}
          onClick={(e) => {
            setCurrentPage(Number(e.currentTarget.value));
            paginate(e);
            toggle();
          }}
        >
          {currentPage}
        </CurrentButton>
        {nextPage === lastPage ? null : (
          <StyledButton
            value={nextPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {nextPage}
          </StyledButton>
        )}
        {currentPage === lastPage ? null : (
          <ButtonBorderValue
            value={lastPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {lastPage}
          </ButtonBorderValue>
        )}
      </StyledPagination>
    );
  },
);

MovieExplorerPagination.displayName = "MovieExplorerPagination";
