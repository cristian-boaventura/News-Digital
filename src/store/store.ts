import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./states/searchInput";
import countryReducer from "./states/country";
import userReducer from "./states/user";
import favoritesReducer from "./states/favorites";
import currentArticleReducer from "./states/currentArticle";

export const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
    country: countryReducer,
    user: userReducer,
    favorites: favoritesReducer,
    currentArticle: currentArticleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
