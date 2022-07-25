import { useContext, useEffect, useState } from "react";
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
  let screenSize = window.innerWidth;
  let classNameToToggleToast;
  if (screenSize > 1400) {
    classNameToToggleToast = `NavIconListContainer`;
  } else if (screenSize < 1400) {
    classNameToToggleToast = `NavIconListContainerForPhone`;
  }

  return (
    <div
      style={{ right: toggleNavToastOnPhone === true && `0px` }}
      className={
        theme === "dark"
          ? `${classNameToToggleToast} NaviDark `
          : `${classNameToToggleToast} `
      }
    >
      <img
        className="Menu"
        onClick={() => {
          if (screenSize > 1400) {
            return;
          }
          setToggleNavToastOnPhone((prev) => !prev);
        }}
        src={
          theme === "dark" ? require("./Menu.png") : require("./MenuBlack.png")
        }
      />
      <img
        onClick={() => {
          if (window.innerWidth < 801) {
            setToggleNavToastOnPhone(false);
            handleHomeScrollForPhone();
          }
          navigate("/Retroanime");
        }}
        src={
          theme === "dark" ? require("./Home.png") : require("./HomeBlack.png")
        }
      />
      <img
        onClick={() => {
          setToggleNavToastOnPhone(false);
          switchTheme();
        }}
        src={
          theme === "dark"
            ? require("./Theme.png")
            : require("./ThemeBlack.png")
        }
      />
      <img
        onClick={() => {
          setToggleNavToastOnPhone(false);
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
