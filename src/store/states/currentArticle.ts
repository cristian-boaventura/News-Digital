import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/models";

const initialState: Article = {
  source: { id: "", name: "" },
  author: "",
  title: "",
  description: "",
  url: "",
  urlToImage: "",
  publishedAt: "",
  content: "",
};

export const currentArticleSlice = createSlice({
  name: "currentArticle",
  initialState,
  reducers: {
    setCurrentArticle: (_, action: PayloadAction<Article>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentArticle } = currentArticleSlice.actions;

export default currentArticleSlice.reducer;
