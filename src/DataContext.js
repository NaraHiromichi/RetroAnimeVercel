import axios from "axios";
import { createContext, useEffect, useState } from "react";
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
  const [dataToSearch, setDataToSearch] = useState("");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((res) => {
        setIsLoading(true);
        setAnimeRecomanded(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${dataToSearch}`)
      .then((res) => {
        setIsLoading(true);
        setSearchedAnime(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Unable to Fetch from API");
      });
  }, [dataToSearch]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
