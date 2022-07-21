import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext";

const NavToast = () => {
  const { switchTheme, theme } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div
      className={
        theme === "dark"
          ? `NavIconListContainer NaviDark`
          : `NavIconListContainer`
      }
    >
      <img
        className="Menu"
        src={
          theme === "dark" ? require("./Menu.png") : require("./MenuBlack.png")
        }
      />
      <img
        onClick={() => navigate("/")}
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
        src={
          theme === "dark"
            ? require("./About.png")
            : require("./AboutBlack.png")
        }
      />
    </div>
  );
};

export default NavToast;
