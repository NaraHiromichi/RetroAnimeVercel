import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSearchData } from "../../redux-features/searchSlice";
import { pageReset } from "../../redux-features/pages";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const updateInputText = (e) => {
    setInputData(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(pageReset("search"));
      dispatch(updateSearchData(inputData));
      setInputData("");
      window.scrollTo(0, 0);
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
        onClick={(event) => handleSubmit(event)}
      />
    </Link>
  );
};

export default SearchBar;
