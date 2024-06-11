import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sidebarSlice.js";

const store = configureStore({
    reducer: {
        sidebar: sideBarReducer,
    }
});

export default store;