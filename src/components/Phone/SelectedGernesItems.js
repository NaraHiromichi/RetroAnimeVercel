import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";
import LoadingSpinner from "../LoadingSpinner";
const SelectedGernesItems = () => {
  const {
    searchedGenersAnime,
    setSearchedGenresAnime,
    setNeedToChangeRightImage,
    cutText,
    pageNumber,
    isLoading,
  } = useContext(DataContext);
  if (
    searchedGenersAnime !== undefined &&
    searchedGenersAnime.data.length !== 0 &&
    pageNumber > 1
  ) {
    setNeedToChangeRightImage("nor");
  } else if (
    searchedGenersAnime === undefined ||
    searchedGenersAnime.data.length === 0
  ) {
    setNeedToChangeRightImage("true");
  }
  return (
    <div className="animeListContainer">
      {searchedGenersAnime === undefined ? (
        <LoadingSpinner />
      ) : (
        searchedGenersAnime.data.map((anime) => {
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
      {searchedGenersAnime !== undefined &&
        searchedGenersAnime.data.length === 0 && <p>No result here</p>}
    </div>
  );
};

export default SelectedGernesItems;
