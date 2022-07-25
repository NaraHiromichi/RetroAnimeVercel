import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext";

const NavToast = () => {
  const {
    switchTheme,
    theme,
    handleSearchScrollForPhone,
    handleHomeScrollForPhone,
  } = useContext(DataContext);
  const navigate = useNavigate();
  const [toggleNavToastOnPhone, setToggleNavToastOnPhone] = useState(false);
  return (
    <div
      className={
        theme === "dark"
          ? `NavIconListContainer NaviDark ${
              toggleNavToastOnPhone && "onFocusForPhone"
            }`
          : `NavIconListContainer ${toggleNavToastOnPhone && "onFocusForPhone"}`
      }
    >
      <img
        className="Menu"
        onClick={() => setToggleNavToastOnPhone((prev) => !prev)}
        src={
          theme === "dark" ? require("./Menu.png") : require("./MenuBlack.png")
        }
      />
      <img
        onClick={() => {
          if (window.innerWidth < 801) {
            handleHomeScrollForPhone();
          }
          navigate("/");
        }}
        src={
          theme === "dark" ? require("./Home.png") : require("./HomeBlack.png")
        }
      />
      <img
        onClick={() => switchTheme()}
        src={
          theme === "dark"
            ? require("./Theme.png")
            : require("./ThemeBlack.png")
        }
      />
      <img
        onClick={() => {
          handleSearchScrollForPhone();
        }}
        src={
          theme === "dark"
            ? require("../Phone/searchIcon.png")
            : require("./searchWhite.png")
        }
      />
    </div>
  );
};

export default NavToast;
