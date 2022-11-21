import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

export const colorSlice = createSlice({
    name: "color",
    initialState: {value: initialState}, 
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

// export the actions and the reducer
export const {changeColor} = colorSlice.actions;

export default colorSlice.reducer;