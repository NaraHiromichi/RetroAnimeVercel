import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  homePage: {
    pageNumber: 1,
    has_next_page: true,
  },
  searchPage: {
    pageNumber: 1,
    has_next_page: true,
  },
  genresPage: {
    pageNumber: 1,
    has_next_page: true,
  },
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    incrasePageNumber: (state, action) => {
      if (action.payload === "home") {
        if (state.homePage.has_next_page) {
          state.homePage.pageNumber += 1;
        }
      } else if (action.payload === "search") {
        if (state.searchPage.has_next_page) {
          state.searchPage.pageNumber += 1;
        }
      } else if (action.payload === "genres") {
        if (state.genresPage.has_next_page) {
          state.genresPage.pageNumber += 1;
        }
      }
    },
    decrasePageNumber: (state, action) => {
      if (action.payload === "home") {
        if (state.homePage.pageNumber === 1) {
          return;
        }
        state.homePage.pageNumber -= 1;
      } else if (action.payload === "search") {
        if (state.searchPage.pageNumber === 1) {
          return;
        }
        state.searchPage.pageNumber -= 1;
      } else if (action.payload === "genres") {
        if (state.genresPage.pageNumber === 1) {
          return;
        }
        state.genresPage.pageNumber -= 1;
      }
    },
    pageReset: (state, action) => {
      if (action.payload === "home") {
        state.homePage.pageNumber = 1;
      } else if (action.payload === "search") {
        state.searchPage.pageNumber = 1;
      } else if (action.payload === "genres") {
        state.genresPage.pageNumber = 1;
      }
    },
    handleHasNextPage: (state, action) => {
      if (action.payload.routePath === "/") {
        state.homePage.has_next_page = action.payload.nextPage;
      } else if (action.payload.routePath === "/search") {
        state.searchPage.has_next_page = action.payload.nextPage;
      } else if (action.payload.routePath === "/genres") {
        state.genresPage.has_next_page = action.payload.nextPage;
      }
    },
  },
});
export const selectHomePageNumber = (state) => state.pages.homePage.pageNumber;
export const selectHasNextPage = (state) => state.pages.homePage.has_next_page;
export const selectSearchPageNumber = (state) =>
  state.pages.searchPage.pageNumber;
export const selectHasNextPageInSearch = (state) =>
  state.pages.searchPage.has_next_page;
export const selectGenresPageNumber = (state) =>
  state.pages.genresPage.pageNumber;
export const selectHasNextPageInGenres = (state) =>
  state.pages.genresPage.has_next_page;
export const {
  incrasePageNumber,
  decrasePageNumber,
  handleHasNextPage,
  pageReset,
} = pagesSlice.actions;
export default pagesSlice.reducer;
