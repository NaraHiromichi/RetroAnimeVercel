import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAnimeByRecomandedQuery } from "./api/RecomandedApi";
import { switchTheme } from "./redux-features/themeSlice";

const Test = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { data } = useGetAnimeByRecomandedQuery(2);
  const modeToChange = () => {
    if (theme === "light") {
      return "dark";
    }
    return "light";
  };
  return (
    <div
      onClick={() => {
        dispatch(switchTheme(modeToChange()));
      }}
      style={{ color: "black" }}
    >
      test, {theme}
    </div>
  );
};

export default Test;
