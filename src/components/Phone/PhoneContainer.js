import SearchBar from "./SearchBar";

import { GernesProvider } from "./GenresContext";
import GenresList from "./GenresList";
const PhoneContainer = () => {
  return (
    <GernesProvider>
      <div className="phoneContainer">
        <SearchBar />
        <GenresList />
      </div>
    </GernesProvider>
  );
};

export default PhoneContainer;
