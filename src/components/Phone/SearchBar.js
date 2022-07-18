const SearchBar = () => {
  return (
    <div className="searchBar">
      <input className="searchInput" type="text" />
      <img
        className="searchIcon"
        src={require("./searchIcon.png")}
        alt="searchIcon"
      />
    </div>
  );
};

export default SearchBar;
