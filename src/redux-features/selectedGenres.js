import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const selectedGenres = createSlice({
  name: "selectedGenres",
  initialState,
  reducers: {
    addGenre: (state, action) => {
      state.push(action.payload);
    },
    removeGenre: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addGenre, removeGenre } = selectedGenres.actions;
export default selectedGenres.reducer;
