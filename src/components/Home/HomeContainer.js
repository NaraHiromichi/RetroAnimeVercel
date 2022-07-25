import DataContext from "../../DataContext";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const {
    animeRecomanded,
    cutText,
    isLoading,
    pageNumber,
    needToChangeRightImage,
    setNeedToChangeRightImage,
    handleHomeScrollForPhone,
  } = useContext(DataContext);
  console.log(isLoading);
  if (
    animeRecomanded !== undefined &&
    animeRecomanded.data.length !== 0 &&
    pageNumber > 1
  ) {
    setNeedToChangeRightImage("nor");
  } else if (
    animeRecomanded === undefined ||
    animeRecomanded.data.length === 0
  ) {
    setNeedToChangeRightImage("true");
  }

  return (
    <div className="animeListContainer">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        animeRecomanded.data.map((anime) => {
          return (
            <Link
              to={`/Retroanime/${anime.mal_id}`}
              className="animeContainer"
              key={anime.mal_id}
            >
              <img
                className="animeImg"
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                onClick={() => handleHomeScrollForPhone()}
              />
              <p className="animeTitle">{cutText(anime.title, 30)}</p>
            </Link>
          );
        })
      )}
      {animeRecomanded !== undefined && animeRecomanded.data.length === 0 && (
        <p>No result here</p>
      )}
    </div>
  );
};

export default HomeContainer;
