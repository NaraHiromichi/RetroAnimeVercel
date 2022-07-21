import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { setDataToSearch } = useContext(DataContext);
  const [inputData, setInputData] = useState("");
  const updateInputText = (e) => {
    setInputData(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setDataToSearch(inputData);
      setInputData("");
    }
  };
  return (
    <Link to="/search" className="searchBar">
      <input
        className="searchInput"
        type="text"
        value={inputData}
        onChange={(event) => updateInputText(event)}
        onKeyUp={(event) => handleSubmit(event)}
      />
      <img
        className="searchIcon"
        src={require("./searchIcon.png")}
        alt="searchIcon"
      />
    </Link>
  );
};

export default SearchBar;
