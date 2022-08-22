import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HomeAnimeExcerpt = ({ anime }) => {
  return (
    <Link
      to={`/${anime.mal_id}`}
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
  );
};

export default HomeAnimeExcerpt;
