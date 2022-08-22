import DataContext from "../../DataContext";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link, useLocation } from "react-router-dom";
import { useGetAnimeByRecomandedQuery } from "../../api/RecomandedApi";
import HomeAnimeExcerpt from "./HomeAnimeExcerpt";
import { useDispatch, useSelector } from "react-redux";
import {
  handleHasNextPage,
  selectHomePageNumber,
} from "../../redux-features/pages";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageNumber = useSelector((state) => selectHomePageNumber(state));

  const {
    data: recomandedAnime,
    isLoading,
    isSuccess,
    isError,
  } = useGetAnimeByRecomandedQuery(pageNumber);

  if (isLoading) return <LoadingSpinner />;
  else if (isSuccess) {
    dispatch(
      handleHasNextPage({
        nextPage: recomandedAnime.pagination.has_next_page,
        routePath: location.pathname,
      })
    );
    return (
      <div className="animeListContainer">
        {recomandedAnime.data.map((anime) => (
          <HomeAnimeExcerpt key={anime.mal_id} anime={anime} />
        ))}
      </div>
    );
  } else if (isError) return <p>There's an error</p>;
};

export default HomeContainer;
