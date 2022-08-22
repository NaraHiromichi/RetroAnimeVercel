import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useGetGenresResultQuery } from "../../api/GenresResult";
import {
  handleHasNextPage,
  selectGenresPageNumber,
} from "../../redux-features/pages";
import LoadingSpinner from "../LoadingSpinner";
const SelectedGernesItems = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageNumber = useSelector(selectGenresPageNumber);
  const selectedGenresNum = useSelector((state) => state.selectedGenres);
  const {
    data: searchedGenersAnime,
    isLoading,
    isSuccess,
    isError,
  } = useGetGenresResultQuery({
    pageNumber,
    selectedGenresNum,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isSuccess) {
    dispatch(
      handleHasNextPage({
        nextPage: searchedGenersAnime.pagination.has_next_page,
        routePath: location.pathname,
      })
    );
    return (
      <div className="animeListContainer">
        {searchedGenersAnime.data.map((anime) => (
          <Link to={`/${anime.mal_id}`} className="animeContainer">
            <img
              className="animeImg"
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
            />
            <p className="animeTitle">{anime.title.substring(0, 20) + "..."}</p>
          </Link>
        ))}
      </div>
    );
  } else if (isError) {
    return <p>There's an error</p>;
  }
};

export default SelectedGernesItems;
