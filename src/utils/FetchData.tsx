import { API_KEY, API_URL } from "./const";

export const fetchMovies = (title: string, currentPage: number) => {

  return fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&page=${currentPage}`, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => {
      if (!res) return;
      return res.json();
    })
    .then(({ Search }) => {
      if (Search === undefined) return;
      return Search;
    });
};

fetchMovies.displayName = "fetchMovies";