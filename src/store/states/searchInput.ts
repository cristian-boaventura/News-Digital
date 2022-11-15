import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInput: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
