// It is used to store the user's authentication status and user data.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // action: 1
        login: (state, action) => {     // This function is used to set the user's authentication status and user data.
            state.status = true;
            state.userData = action.payload;
        },
        // action: 2
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },

    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;