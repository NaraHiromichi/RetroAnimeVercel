import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux-features/themeSlice";
import pagesReducer from "../redux-features/pages";
import searchReducer from "../redux-features/searchSlice";
import selectedGenresReducer from "../redux-features/selectedGenres";
import { RecomandedApi } from "../api/RecomandedApi";
import { AnimeInfoApi } from "../api/AnimeInfo";
import { SearchApi } from "../api/SearchApi";
import { GenresListApi } from "../api/GenresList";
import { GenresResultApi } from "../api/GenresResult";

export const store = configureStore({
  reducer: {
    [RecomandedApi.reducerPath]: RecomandedApi.reducer,
    [AnimeInfoApi.reducerPath]: AnimeInfoApi.reducer,
    [SearchApi.reducerPath]: SearchApi.reducer,
    [GenresListApi.reducerPath]: GenresListApi.reducer,
    [GenresResultApi.reducerPath]: GenresResultApi.reducer,
    theme: themeReducer,
    pages: pagesReducer,
    search: searchReducer,
    selectedGenres: selectedGenresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RecomandedApi.middleware),
});
