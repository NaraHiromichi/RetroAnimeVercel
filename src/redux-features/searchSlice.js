import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});
export const selectSearchBarData = (state) => state.search.searchData;
export const { updateSearchData } = searchSlice.actions;
export default searchSlice.reducer;
