import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(true);
  const [animeRecomanded, setAnimeRecomanded] = useState();
  const [searchedAnime, setSearchedAnime] = useState();
  const [searchedGenersAnime, setSearchedGenresAnime] = useState();
  const [dataToSearch, setDataToSearch] = useState("");
  const [selectedGernesNum, setSelectedGernesNum] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [needToChangeRightImage, setNeedToChangeRightImage] = useState("false");
  const ref = useRef(null);
  const homeRef = useRef(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/seasons/now?page=${pageNumber}`)
      .then((res) => {
        setIsLoading(true);
        setAnimeRecomanded(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, [pageNumber]);
  useEffect(() => {
    axios
      .get(
        `https://api.jikan.moe/v4/anime?q=${dataToSearch}&page=${pageNumber}`
      )
      .then((res) => {
        setIsLoading(true);
        setSearchedAnime(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, [dataToSearch, pageNumber]);
  useEffect(() => {
    let url = `https://api.jikan.moe/v4/anime?page=${pageNumber}&genres=${selectedGernesNum.toString()}`;
    axios
      .get(url)
      .then((res) => {
        setIsLoading(true);
        setSearchedGenresAnime(res.data);
        console.log("rendered", url);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, [selectedGernesNum, pageNumber]);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const cutText = (text, count) => {
    let modifiedText = text;
    if (text.length > count) {
      return text.substring(0, count) + "...";
    }
    return modifiedText;
  };
  const handleSearchScrollForPhone = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeScrollForPhone = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <DataContext.Provider
      value={{
        cutText,
        theme,
        switchTheme,
        animeRecomanded,
        isLoading,
        dataToSearch,
        setDataToSearch,
        searchedAnime,
        selectedGernesNum,
        setSelectedGernesNum,
        searchedGenersAnime,
        setSearchedGenresAnime,
        pageNumber,
        setPageNumber,
        needToChangeRightImage,
        setNeedToChangeRightImage,
        handleSearchScrollForPhone,
        ref,
        homeRef,
        handleHomeScrollForPhone,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
