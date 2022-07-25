import { useContext } from "react";

import NavToast from "./components/NavToast/NavToast";
import PhoneContainer from "./components/Phone/PhoneContainer";
import DataContext from "./DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ActiveTitle from "./ActiveTitle";
import SearchedItem from "./components/Home/SearchedItem";
import HomeContainer from "./components/Home/HomeContainer";
import InfoPage from "./components/Home/AnimeInfo/InfoPage";
import SelectedGernesItems from "./components/Phone/SelectedGernesItems";
import NavigatePageBar from "./components/Home/NavigatePageBar";
function App() {
  const { theme } = useContext(DataContext);
  console.log(theme);
  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mainContainer">
                  <NavBar />
                  <ActiveTitle />
                  <HomeContainer />
                  <NavigatePageBar />
                </div>
                <PhoneContainer />
                <NavToast />
              </>
            }
          />
          <Route
            path=":MAL_ID"
            element={
              <>
                <div className="mainContainer">
                  <NavBar />
                  <ActiveTitle />
                  <InfoPage />
                </div>
                <PhoneContainer />
                <NavToast />
              </>
            }
          />
          <Route
            path="search"
            element={
              <>
                <div className="mainContainer">
                  <NavBar />
                  <ActiveTitle />
                  <SearchedItem />
                  <NavigatePageBar />
                </div>
                <PhoneContainer />
                <NavToast />
              </>
            }
          />
          <Route
            path="gernes"
            element={
              <>
                <div className="mainContainer">
                  <NavBar />
                  <ActiveTitle />
                  <SelectedGernesItems />
                  <NavigatePageBar />
                </div>
                <PhoneContainer />
                <NavToast />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
