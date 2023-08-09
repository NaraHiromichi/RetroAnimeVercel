import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider } from "./DataContext";
import HomeContainer from "./components/Home/HomeContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchedItem from "./components/Home/SearchedItem";
import InfoPage from "./components/Home/AnimeInfo/InfoPage";
import SelectedGernesItems from "./components/Phone/SelectedGernesItems";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router basename="/">
      <DataProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomeContainer />} />
            <Route path="search" element={<SearchedItem />} />
            <Route path=":MAL_ID" element={<InfoPage />} />
            <Route path="genres" element={<SelectedGernesItems />} />
          </Route>
        </Routes>
      </DataProvider>
    </Router>
  </Provider>
);
