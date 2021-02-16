import { MouseEventHandler, useState } from "react";

type UsePaginationProps = {
  readonly currentPageNumber: number;
  readonly paginationPagesNumber: number;
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
};

export const usePagination = (
  currentPageNumber: number,
  paginationPagesNumber: number,
  // paginate: MouseEventHandler<HTMLButtonElement>,
) => {
  const [currentPage, setCurrentPage] = useState(() => currentPageNumber);
  const [paginationPages] = useState(() => {
    const pageNumbers = [];

    for (let i = 1; i <= paginationPagesNumber; i++) {
      pageNumbers.push({ page: i });
    }

    return pageNumbers;
  });

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = paginationPages.length + 1;
  const firstPage = currentPage === 1 ? null : 1;

  console.log({ currentPage, prevPage, nextPage })
  return { currentPage, prevPage, nextPage, firstPage, lastPage };
};

export default usePagination;
