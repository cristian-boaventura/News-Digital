import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/models";

const initialState: Article[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (_, action: PayloadAction<Article[]>) => {
      return action.payload;
    },
    addFavorite: (state, action: PayloadAction<Article>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Article>) => {
      return state.filter((article) => article.title !== action.payload.title);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
