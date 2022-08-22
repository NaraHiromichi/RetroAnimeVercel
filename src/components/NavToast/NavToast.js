import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../redux-features/themeSlice";

const NavToast = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { ref } = useContext(DataContext);
  const modeToChange = () => {
    if (theme === "light") {
      return "dark";
    }
    return "light";
  };
  const navigate = useNavigate();
  const [toggleNavToastOnPhone, setToggleNavToastOnPhone] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  let classNameToToggleToast;
  if (windowWidth > 1400) {
    classNameToToggleToast = `NavIconListContainer`;
  } else if (windowWidth < 1400) {
    classNameToToggleToast = `NavIconListContainerForPhone`;
  }
  const handleSearchScrollForPhone = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
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
        alt="Menu"
        className="Menu"
        onClick={() => {
          if (windowWidth > 1400) {
            return;
          }
          setToggleNavToastOnPhone((prev) => !prev);
        }}
        src={
          theme === "dark" ? require("./Menu.png") : require("./MenuBlack.png")
        }
      />
      <img
        alt="Home"
        onClick={() => {
          if (window.innerWidth < 801) {
            setToggleNavToastOnPhone(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          navigate("/");
        }}
        src={
          theme === "dark" ? require("./Home.png") : require("./HomeBlack.png")
        }
      />
      <img
        alt="Theme"
        onClick={() => {
          setToggleNavToastOnPhone(false);
          dispatch(switchTheme(modeToChange()));
        }}
        src={
          theme === "dark"
            ? require("./Theme.png")
            : require("./ThemeBlack.png")
        }
      />
      <img
        alt="search"
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
