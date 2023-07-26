import { configureStore, createSlice } from "@reduxjs/toolkit";
import songReducer from "./songsSlice";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

export default store;
