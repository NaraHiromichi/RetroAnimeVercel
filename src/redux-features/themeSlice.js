import { createSlice } from "@reduxjs/toolkit";

const initialState = "dark";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
