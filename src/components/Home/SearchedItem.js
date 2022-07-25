import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";
import LoadingSpinner from "../LoadingSpinner";

const SearchedItem = () => {
  const {
    searchedAnime,
    cutText,
    isLoading,
    pageNumber,
    setNeedToChangeRightImage,
  } = useContext(DataContext);
  console.log("searchAni", searchedAnime);
  if (
    searchedAnime !== undefined &&
    searchedAnime.data.length !== 0 &&
    pageNumber > 1
  ) {
    setNeedToChangeRightImage("nor");
  } else if (searchedAnime === undefined || searchedAnime.data.length === 0) {
    setNeedToChangeRightImage("true");
  }
  return (
    <div className="animeListContainer">
      {searchedAnime === undefined ? (
        <LoadingSpinner />
      ) : (
        searchedAnime.data.map((anime) => {
          return (
            <Link to={`/Retroanime/${anime.mal_id}`} className="animeContainer">
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
      {searchedAnime !== undefined && searchedAnime.data.length === 0 && (
        <p>No result here</p>
      )}
    </div>
  );
};

export default SearchedItem;
