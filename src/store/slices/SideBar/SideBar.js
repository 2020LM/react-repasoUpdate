// Third-Party & Ecosystem Imports
import { createSlice } from "@reduxjs/toolkit";


const visibleSideBar = false
const rightArrow = false

const initialState = {
  visibleSideBar,
  rightArrow,
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState,
  reducers: {
    setVisibleSideBar: (state, action) => {
      state.visibleSideBar = action.payload;
    },

    setRightArrow: (state, action) => {
      state.rightArrow = action.payload;
    },

  },
});

export const selectVisibleSideBar = (state) => state.sideBar.visibleSideBar;
export const selectRightArrow = (state) => state.sideBar.rightArrow;
export const {
  setVisibleSideBar,
  setRightArrow,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;
