import DataContext from "../../DataContext";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const { animeRecomanded, cutText, isLoading } = useContext(DataContext);
  console.log(isLoading);
  return (
    <div className="animeListContainer">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        animeRecomanded.data.map((anime) => {
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

export default HomeContainer;
