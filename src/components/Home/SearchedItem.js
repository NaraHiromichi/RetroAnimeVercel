import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useGetSearchedAnimeQuery } from "../../api/SearchApi";
import {
  handleHasNextPage,
  selectSearchPageNumber,
} from "../../redux-features/pages";
import { selectSearchBarData } from "../../redux-features/searchSlice";
import LoadingSpinner from "../LoadingSpinner";

const SearchedItem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageNumberToFind = useSelector((state) =>
    selectSearchPageNumber(state)
  );
  const findedText = useSelector((state) => selectSearchBarData(state));

  const {
    data: searchedAnime,
    isLoading,
    isSuccess,
    isError,
  } = useGetSearchedAnimeQuery({ num: pageNumberToFind, findedText });

  useEffect(() => {
    if (!isLoading && isSuccess) {
    }
  });
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isSuccess) {
    if (searchedAnime?.pagination?.items?.count === 0) {
      return <p>We can't find your result</p>;
    }
    dispatch(
      handleHasNextPage({
        nextPage: searchedAnime.pagination.has_next_page,
        routePath: location.pathname,
      })
    );
    return (
      <div className="animeListContainer">
        {searchedAnime?.data.map((anime) => (
          <Link
            to={`/${anime.mal_id}`}
            key={anime.mal_id}
            className="animeContainer"
            onClick={() => window.scrollTo(0, 0)}
          >
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
  } else if (isError) <p>There's an error</p>;
};

export default SearchedItem;
