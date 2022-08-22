import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner";
import "../../../InfoPage.css";
import { useGetAnimeInfoQuery } from "../../../api/AnimeInfo";

const InfoPage = () => {
  const { MAL_ID } = useParams();
  const { data, isSuccess, isLoading, isError } = useGetAnimeInfoQuery(MAL_ID);
  if (isLoading) return <LoadingSpinner />;
  else if (isSuccess) {
    const AnimeInfo = data.data;
    return (
      <div className="infoAnimesContainer">
        <h3 className="titleInfo">{AnimeInfo.title}</h3>
        <img className="imageInfo" src={AnimeInfo.images.jpg.large_image_url} />
        <div className="textInfoContainer">
          <p>English_Name: {AnimeInfo.title_english}</p>
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
      </div>
    );
  } else if (isError) {
    return <p>There's an error</p>;
  }
};

export default InfoPage;
