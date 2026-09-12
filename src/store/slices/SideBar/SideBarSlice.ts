// Third-Party & Ecosystem Imports
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.js";


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

export const selectVisibleSideBar = (state: RootState) => state.sideBar.visibleSideBar;
export const selectRightArrow = (state: RootState) => state.sideBar.rightArrow;
export const {
  setVisibleSideBar,
  setRightArrow,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;
