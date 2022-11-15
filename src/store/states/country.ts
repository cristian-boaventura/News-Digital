import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Country {
  name: string;
  code: string;
}

const initialState: Country = { name: "Worldwide", code: "" };

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    updateCountry: (_, action: PayloadAction<Country>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCountry } = countrySlice.actions;

export default countrySlice.reducer;
