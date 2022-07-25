import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GenresContext = createContext({});

export const GernesProvider = ({ children }) => {
  const [genresList, setGenresList] = useState([]);
  const [genresError, setGenresError] = useState([]);
  const [genersLoaded, setGenersLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/genres/anime`)
      .then((res) => {
        setGenresList(res.data.data);
        setGenersLoaded(true);
      })
      .catch((err) => {
        setGenresError(err.response.statusText);
        console.log(err);
      });
  }, []);

  return (
    <GenresContext.Provider
      value={{
        genresList,
        genresError,
        setGenresError,
        genersLoaded,
        setGenersLoaded,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};
export default GenresContext;
