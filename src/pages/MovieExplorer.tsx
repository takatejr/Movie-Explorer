import React, { FormEventHandler, useCallback, useState } from "react";
import { MovieExplorerButton } from "../components/modules/MovieExplorer/MovieExplorerButton";
import { MovieExplorerInput } from "../components/modules/MovieExplorer/MovieExplorerInput";
import { MovieExplorerList } from "../components/modules/MovieExplorer/MovieExplorerList";
import { fetchMovies } from "../utils/FetchData";
import useToggle from "../hooks/useToggle";
import styled from "styled-components";

export type Movie = {
  readonly Poster: string;
  readonly Title: string;
  readonly Type: string;
  readonly Year: string;
  readonly imdbID: string;
};

const StyledForm = styled.form`
  height: 30vh;
  width: 60vw;
  margin: auto;
`;

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  margin: auto;
  justify-content: space-around;
`;

export const MovieExplorer = () => {
  const { isLoading, toggle } = useToggle(true);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [paginationTitle, setPaginationTitle] = useState("");
  const [Movies, setCollectionMovies] = useState<Movie[]>(() => [
    {
      Poster: "",
      Title: "",
      Type: "",
      Year: "",
      imdbID: "",
    },
  ]);

  const getMovies = useCallback(
    async (title, page) => {
      return await fetchMovies(title, page).then((Movies: Movie[]) => {
        if (Movies === undefined) return;
        if (!isLoading) toggle();
        setCollectionMovies(Movies);
      });
    },
    [],
  );

  const handleSearchMovie = useCallback<FormEventHandler<HTMLButtonElement | HTMLFormElement>>((event) => {
      event.preventDefault();
      const page = Number.parseInt(event.currentTarget.innerHTML, 10);
      const isPage = isNaN(page)

      if (isPage) {
        setPaginationTitle(currentTitle);
      }

      const whichPage = isPage ? 1 : page;
      const whichTitle = isPage ? currentTitle : paginationTitle;

      getMovies(whichTitle, whichPage);
    },
    [currentTitle, getMovies, paginationTitle],
  );

  const handleChangeTitle = useCallback<FormEventHandler<HTMLInputElement>>((event) => {
      const title = event.currentTarget.value;
      setCurrentTitle(() => title);
    },
    [],
  );

  return (
    <StyledSection aria-label="MovieExplorer">
      <StyledForm onSubmit={handleSearchMovie}>
        <MovieExplorerInput
          title={currentTitle}
          handleChange={handleChangeTitle}
          text="Put movie title..."
        />
        <MovieExplorerButton
          text="Search"
          onClick={handleSearchMovie}
          ariaLabel="Search"
        />
      </StyledForm>
      <MovieExplorerList
        movies={Movies}
        paginate={handleSearchMovie}
        isLoading={isLoading}
        toggle={toggle}
      />
    </StyledSection>
  );
};

MovieExplorer.displayName = "MovieExplorer";
