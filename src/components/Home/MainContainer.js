import ActiveTitle from "../../ActiveTitle";
import NavBar from "../NavBar";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <ActiveTitle />
      <HomeContainer />
    </div>
  );
};

export default MainContainer;
