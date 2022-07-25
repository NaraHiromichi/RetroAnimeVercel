import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";

const ListItem = ({ listData }) => {
  const [selected, setSelected] = useState(false);
  const {
    setSelectedGernesNum,
    setPageNumber,
    theme,
    handleHomeScrollForPhone,
  } = useContext(DataContext);

  return (
    <>
      <div className="genresList">
        <Link
          className="gernesListLink"
          to="/gernes"
          onClick={() => {
            setPageNumber(1);
            setSelected((prev) => !prev);
            setSelectedGernesNum((prev) => {
              console.log("inside link");
              return [...prev, listData.mal_id];
            });
            handleHomeScrollForPhone();
          }}
        >
          {listData.name}
        </Link>
        <img
          onClick={() => {
            setPageNumber(1);
            setSelectedGernesNum((prevArray) => {
              return prevArray.filter((num) => num !== listData.mal_id);
            });
            setSelected(false);
            handleHomeScrollForPhone();
          }}
          className="closeGenres"
          style={{
            marginLeft: "1em",
            display: selected ? "inline-block" : "none",
          }}
          src={require(theme === "dark"
            ? "../NavToast/close.png"
            : "../NavToast/closeWhite.png")}
          alt={listData}
        />
      </div>
    </>
  );
};

export default ListItem;
