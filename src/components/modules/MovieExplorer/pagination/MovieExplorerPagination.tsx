import React, { memo, MouseEventHandler } from "react";
import usePagination from "../../../../hooks/usePagination";

type MovieExplorerPaginationProps = {
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly toggle: () => void;
};

export const MovieExplorerPagination = memo<MovieExplorerPaginationProps>(
  ({ paginate, toggle }) => {
    const pagination = usePagination(1, 100, paginate, toggle);

    return pagination
  },
);

MovieExplorerPagination.displayName = "MovieExplorerPagination";
