import { useContext, useState } from "react";
import GenresContext from "./GenresContext";
import ListItem from "./ListItem";

const GenresList = () => {
  const { genresList, genresError, genersLoaded, setGenersLoaded } =
    useContext(GenresContext);

  return (
    <div className="genresListContainer">
      {genresList &&
        genresList.map((item, index) => {
          return <ListItem key={index} listData={item} />;
        })}
      {genersLoaded === false && (
        <p>{genresError}, Please Wait 5sec and refresh again</p>
      )}
    </div>
  );
};

export default GenresList;
