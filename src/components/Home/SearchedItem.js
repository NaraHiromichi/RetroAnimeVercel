import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";
import LoadingSpinner from "../LoadingSpinner";
const SearchedItem = () => {
  const { searchedAnime, cutText, isLoading } = useContext(DataContext);
  return (
    <div className="animeListContainer">
      {searchedAnime === undefined ? (
        <LoadingSpinner />
      ) : (
        searchedAnime.data.map((anime) => {
          return (
            <Link to={`/${anime.mal_id}`} className="animeContainer">
              <img
                className="animeImg"
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
              />
              <p className="animeTitle">{cutText(anime.title, 30)}</p>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default SearchedItem;
