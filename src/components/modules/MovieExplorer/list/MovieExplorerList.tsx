import React, { memo, MouseEventHandler } from "react";
import { Movie } from "../../../../types/Movie.type";
import { MovieExplorerItem } from "../listitem/MovieExplorerListItem";
import { MovieExplorerPagination } from "../pagination/MovieExplorerPagination";
import { StyledMovies } from "./MovieExplorerList.styles";

type MovieExplorerListProps = {
  readonly movies: Movie[];
  readonly paginate: MouseEventHandler<HTMLButtonElement>;
  readonly isLoading: boolean;
  readonly toggle: () => void;
};

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
