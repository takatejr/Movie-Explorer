import React, { memo, MouseEventHandler } from "react";
import usePagination from "../../../../hooks/usePagination";
import {
  CurrentButton,
  StyledButton,
  StyledPagination,
} from "./MovieExplorerPagination.styles";

type MovieExplorerPaginationProps = {
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly toggle: () => void;
};

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
          <StyledButton
            value={firstPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {firstPage}
          </StyledButton>
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
        {firstPage === currentPage || lastPage === currentPage ? (
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
        ) : (
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
        )}
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
          <StyledButton
            value={lastPage}
            onClick={(e) => {
              setCurrentPage(Number(e.currentTarget.value));
              paginate(e);
              toggle();
            }}
          >
            {lastPage}
          </StyledButton>
        )}
      </StyledPagination>
    );
  },
);

MovieExplorerPagination.displayName = "MovieExplorerPagination";
