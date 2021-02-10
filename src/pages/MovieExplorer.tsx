import React, {
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import { MovieExplorerPagination } from "../components/modules/MovieExplorer/MovieExplorerPagination";
import { MovieExplorerButton } from "../components/modules/MovieExplorer/MovieExplorerButton";
import { MovieExplorerInput } from "../components/modules/MovieExplorer/MovieExplorerInput";
import { MovieExplorerItem } from "../components/modules/MovieExplorer/MovieExplorerItem";
import { fetchMovies } from '../utils/FetchData';
import styled from "styled-components";

export type Movie = {
  readonly Poster: string;
  readonly Title: string;
  readonly Type: string;
  readonly Year: string;
  readonly imdbID: string;
  readonly Actors?: string;
  readonly Awards?: string;
  readonly BoxOffice?: string;
  readonly Country?: string;
  readonly DVD?: string;
  readonly Director?: string;
  readonly Genre?: string;
  readonly Language?: string;
  readonly Metascore?: string;
  readonly Plot?: string;
  readonly Production?: string;
  readonly Rated?: string;
  readonly Ratings?: [];
  readonly Released?: string;
  readonly Response?: string;
  readonly Runtime?: string;
  readonly Website?: string;
  readonly Writer?: string;
  readonly imdbRating?: string;
  readonly imdbVotes?: string;
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

const StyledMovies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieExplorer = () => {
  const [title, setTitle] = useState<string>("");
  const [currentPage, setPage] = useState<number>(1);
  const [pages] = useState(() => {
    const pageNumbers = [];

    for (let i = 1; i <= 100; i++) {
      pageNumbers.push({ page: i });
    }
    
    return pageNumbers;
  });

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
    async () => {
     return await fetchMovies(title, currentPage)
           .then((Movies: Movie[]) => {
             if (Movies === undefined) return;
             setCollectionMovies(Movies)
           })}, [currentPage, title]);

  const paginate = useCallback<MouseEventHandler<HTMLButtonElement | HTMLFormElement>>((event) => {
    const page = Number.parseInt(event.currentTarget.value, 10);
    setPage(() => page);
    getMovies();
  }, [getMovies]);

  const handleSearchMovie = useCallback<FormEventHandler<HTMLButtonElement | HTMLFormElement>>((event) => {
      event.preventDefault();
      getMovies();
    }, [getMovies]);

  const handleChangeTitle = useCallback<FormEventHandler<HTMLInputElement>>(
    (event) => {
      const currentTitle = event.currentTarget.value;
      setTitle(() => currentTitle);
    }, []);

  return (
    <StyledSection aria-label="MovieExplorer">
      <StyledForm onSubmit={handleSearchMovie}>
        <MovieExplorerInput
          title={title}
          handleChange={handleChangeTitle}
          text="Put movie title..."
        />
        <MovieExplorerButton
          text="Search"
          onClick={handleSearchMovie}
          ariaLabel="Search"
        />
      </StyledForm>
      <StyledMovies>
        {Movies.length !== 1 &&
          Movies.map(({ Title, Poster, Year, imdbID }) => (
            <MovieExplorerItem
              title={Title}
              img={Poster}
              year={Year}
              key={imdbID + Title}
            />
          ))}
      </StyledMovies>
      <StyledPagination>
        {Movies.length !== 1 &&
          pages.map(({ page }) => (
            <MovieExplorerPagination
              page={page}
              paginate={paginate}
              key={page + "mep"}
            />
          ))}
      </StyledPagination>
    </StyledSection>
  );
};

MovieExplorer.displayName = "MovieExplorer";