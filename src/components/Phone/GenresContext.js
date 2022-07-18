import { createContext, useState } from "react";

const GenresContext = createContext({});

export const GernesProvider = ({ children }) => {
  const [genresList, setGenresList] = useState([
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Slice of Life",
    "Fantasy",
    "Magic",
    "Supernatural",
    "Horror",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
    // "HelloTest",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Slice of Life",
    "Fantasy",
    "Magic",
    "Supernatural",
    "Horror",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
  ]);
  return (
    <GenresContext.Provider value={{ genresList }}>
      {children}
    </GenresContext.Provider>
  );
};
export default GenresContext;
