import { Outlet } from "react-router-dom";
import ActiveTitle from "./ActiveTitle";
import NavBar from "./components/NavBar";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <ActiveTitle />
      <Outlet />
    </div>
  );
};

export default MainContainer;
