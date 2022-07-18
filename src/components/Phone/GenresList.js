import { useContext } from "react";
import GenresContext from "./GenresContext";

const GenresList = () => {
  const { genresList } = useContext(GenresContext);
  const listItems = genresList.map((item) => {
    return <span className="genresList">{item}</span>;
  });
  return <div className="genresListContainer">{listItems}</div>;
};

export default GenresList;
