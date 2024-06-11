import { createSlice } from "@reduxjs/toolkit";

const sidebarSlices = createSlice({
    name: 'sidebar',
    initialState: {
        isSignInOpen: false,
        isRegisterOpen: false,
    },

    reducers: {
        setSignInOpen(state, action) {
            state.isSignInOpen = action.payload;
            state.isRegisterOpen = false;
        },

        setRegisterOpen(state, action) {
            state.isRegisterOpen = action.payload;
            state.isSignInOpen = false;
        }
    }
});

export const { setSignInOpen, setRegisterOpen } = sidebarSlices.actions;

export default sidebarSlices.reducer;