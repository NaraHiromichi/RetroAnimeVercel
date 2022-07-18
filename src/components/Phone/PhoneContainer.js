import SearchBar from "./SearchBar";
import { GernesProvider } from "./GenresContext";
import GenresList from "./GenresList";
import { useContext } from "react";
import DataContext from "../../DataContext";
const PhoneContainer = () => {
  const { theme } = useContext(DataContext);
  return (
    <GernesProvider>
      <div className={theme === "dark" ? `phoneContainer` : `lightMode`}>
        <SearchBar />
        <GenresList />
      </div>
    </GernesProvider>
  );
};

export default PhoneContainer;
