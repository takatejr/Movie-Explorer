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
        {isLoading && movies.length === 0 ? (
          <p>Data is fetching</p>
        ) : movies.length === 1 ? null : (
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
          <MovieExplorerPagination paginate={paginate} toggle={toggle}/>
      </div>
    );
  },
);

MovieExplorerList.displayName = "MovieExplorerList";