import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
