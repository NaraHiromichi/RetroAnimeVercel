import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pageReset } from "../../redux-features/pages";
import { addGenre, removeGenre } from "../../redux-features/selectedGenres";

let ListItem = ({ listData }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      dispatch(addGenre(listData.mal_id));
    } else if (!selected) {
      dispatch(removeGenre(listData.mal_id));
    }
  }, [selected]);
  return (
    <>
      <div className="genresList">
        <Link
          className="gernesListLink"
          to="/genres"
          style={{
            textDecoration: selected ? `underline` : `none`,
            fontWeight: selected ? `bolder` : `normal`,
          }}
          onClick={() => {
            dispatch(pageReset("genres"));
            setSelected((prev) => !prev);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {listData.name}
        </Link>
        {/* <img
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
        /> */}
      </div>
    </>
  );
};
ListItem = React.memo(ListItem);
export default ListItem;
