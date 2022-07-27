import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider } from "./DataContext";
import HomeContainer from "./components/Home/HomeContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedItem from "./components/Home/SearchedItem";
import InfoPage from "./components/Home/AnimeInfo/InfoPage";
import SelectedGernesItems from "./components/Phone/SelectedGernesItems";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <DataProvider>
        <Routes>
          <Route path="/Retroanime" element={<App />}>
            <Route index element={<HomeContainer />} />
            <Route path="search" element={<SearchedItem />} />
            <Route path=":MAL_ID" element={<InfoPage />} />
            <Route path="gernes" element={<SelectedGernesItems />} />
          </Route>
        </Routes>
      </DataProvider>
    </React.StrictMode>
  </Router>
);
