import { useGetGenresListQuery } from "../../api/GenresList";
import LoadingSpinner from "../LoadingSpinner";
import ListItem from "./ListItem";

const GenresList = () => {
  const {
    data: genresList,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetGenresListQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isSuccess) {
    return (
      <div className="genresListContainer">
        {genresList.data.map((item, index) => {
          return <ListItem key={index} listData={item} />;
        })}
      </div>
    );
  } else if (isError) {
    return <p>{error?.error}, Please Wait 5sec and refresh again</p>;
  }
};

export default GenresList;
