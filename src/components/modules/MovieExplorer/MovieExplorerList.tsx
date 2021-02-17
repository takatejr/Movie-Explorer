import React, { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import { Movie } from "../../../pages/MovieExplorer";
import { MovieExplorerItem } from "./MovieExplorerItem";
import { MovieExplorerPagination } from "./MovieExplorerPagination";

type MovieExplorerListProps = {
  readonly movies: Movie[];
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly isLoading: boolean;
  readonly toggle: () => void;
};

const StyledMovies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieExplorerList = memo<MovieExplorerListProps>(
  ({ movies, paginate, isLoading, toggle }) => {
    return (
      <div>
        {movies.length === 1 && isLoading ? null : (
          <StyledMovies>
            {movies.map(({ Title, Poster, Year, imdbID }) => (
              <MovieExplorerItem
                title={Title}
                img={Poster}
                year={Year}
                key={imdbID + Title}
              />
            ))}
          </StyledMovies>
        )}
        {movies.length === 1 && isLoading ? null : (
          <MovieExplorerPagination paginate={paginate} toggle={toggle} />
        )}
      </div>
    );
  },
);

MovieExplorerList.displayName = "MovieExplorerList";
