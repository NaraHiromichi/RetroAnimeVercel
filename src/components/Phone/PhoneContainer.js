import SearchBar from "./SearchBar";

import GenresList from "./GenresList";
import { useContext } from "react";
import DataContext from "../../DataContext";
const PhoneContainer = () => {
  const { theme, ref } = useContext(DataContext);

  return (
    <div
      ref={ref}
      className={theme === "dark" ? `phoneContainer` : `lightMode`}
    >
      <SearchBar />
      <GenresList />
    </div>
  );
};

export default PhoneContainer;
