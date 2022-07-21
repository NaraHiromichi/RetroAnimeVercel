import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner";

const InfoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(true);
  const [AnimeInfo, setAnimeInfo] = useState(true);
  const { MAL_ID } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${MAL_ID}/full`)
      .then((res) => {
        setIsLoading(true);
        setAnimeInfo(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, []);

  return (
    <div className="animeListContainer infoAnimesContainer">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <h3 className="titleInfo">{AnimeInfo.title}</h3>
          <img
            className="imageInfo"
            src={AnimeInfo.images.jpg.large_image_url}
          />
          <div className="textInfoContainer">
            <p>Status: {AnimeInfo.status}</p>
            <p>Rating: {AnimeInfo.rating}</p>
            {AnimeInfo.season !== null &&
              AnimeInfo.year !== null &&
              AnimeInfo.season.length !== 0 &&
              AnimeInfo.year.length !== 0 && (
                <p>Season: {`${AnimeInfo.season} ${AnimeInfo.year}`}</p>
              )}
            <p>
              Genres:
              {AnimeInfo.genres.map((item, index) => {
                return index === 0 ? ` ${item.name}` : `, ${item.name}`;
              })}
            </p>
            {AnimeInfo.themes.length !== 0 && (
              <p>
                Themes:
                {AnimeInfo.themes.map((item, index) => {
                  return index === 0 ? item.name : `, ${item.name}`;
                })}
              </p>
            )}
            {AnimeInfo.theme.openings !== null &&
              AnimeInfo.theme.openings.length !== 0 && (
                <p>
                  Openings :
                  {AnimeInfo.theme.openings.map((song) => (
                    <a
                      className="songLink"
                      target="_blank"
                      href={`https://www.youtube.com/results?search_query=${song}`}
                    >
                      {` ${song}`}
                      <br />
                    </a>
                  ))}
                </p>
              )}
            {AnimeInfo.theme.endings !== null &&
              AnimeInfo.theme.endings.length !== 0 && (
                <p>
                  Endings :
                  {AnimeInfo.theme.endings.map((song) => (
                    <a
                      className="songLink"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href={`https://www.youtube.com/results?search_query=${song}`}
                    >
                      {` ${song}`}
                      <br />
                    </a>
                  ))}
                </p>
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default InfoPage;
