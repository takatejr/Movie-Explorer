import React, { MouseEventHandler, useState } from "react";
import { CurrentButton, StyledButton, StyledPagination } from "../components/modules/MovieExplorer/pagination/MovieExplorerPagination.styles";

export const usePagination = (
  currentPageNumber: number,
  paginationPagesNumber: number,
  paginate: MouseEventHandler<HTMLButtonElement>,
  toggle: () => void,
) => {
  const [currentPage, setCurrentPage] = useState(() => currentPageNumber);
  
  const firstPage = 1;
  const lastPage = paginationPagesNumber;
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;
  const nextPage = currentPage === lastPage ? lastPage : currentPage + 1;

  const paginateElements = (<StyledPagination>
    {firstPage === prevPage ? null : (
      <StyledButton
        value={firstPage}
        onClick={(e) => {
          setCurrentPage(Number(e.currentTarget.value));
          paginate(e);
          toggle()
          
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
  </StyledPagination>);

  return (paginateElements)
};

export default usePagination;