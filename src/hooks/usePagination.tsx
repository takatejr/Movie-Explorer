import { useState } from "react";

export const usePagination = (
  currentPageNumber: number,
  paginationPagesNumber: number,
) => {
  const [currentPage, setCurrentPage] = useState(() => currentPageNumber);
  const [paginationPages] = useState(() => {
    const pageNumbers = [];

    for (let i = 1; i <= paginationPagesNumber; i++) {
      pageNumbers.push({ page: i });
    }

    return pageNumbers;
  });

  const firstPage = 1;
  const lastPage = paginationPages.length;
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;
  const nextPage = currentPage === lastPage ? lastPage : currentPage + 1;

  return {
    currentPage,
    prevPage,
    nextPage,
    firstPage,
    lastPage,
    setCurrentPage,
  };
};

export default usePagination;
