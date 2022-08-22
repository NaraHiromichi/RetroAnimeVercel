import { useContext } from "react";
import { useSelector } from "react-redux";
import NavToast from "./components/NavToast/NavToast";
import PhoneContainer from "./components/Phone/PhoneContainer";
import DataContext from "./DataContext";

import NavBar from "./components/NavBar";
import ActiveTitle from "./ActiveTitle";
import NavigatePageBar from "./components/Home/NavigatePageBar";
import { Outlet, useParams } from "react-router-dom";
function App() {
  const { MAL_ID } = useParams();
  const theme = useSelector((state) => state.theme);
  const modeToChange = () => {
    if (theme === "light") {
      return "dark";
    }
    return "light";
  };

  return (
    <div className="App" data-theme={theme}>
      <>
        <div className="mainContainer">
          <NavBar />
          <ActiveTitle />
          <Outlet />
          {!MAL_ID && <NavigatePageBar />}
        </div>
        <PhoneContainer />
        <NavToast />
      </>
    </div>
  );
}

export default App;
