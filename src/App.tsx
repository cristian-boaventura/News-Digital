import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Navbar,
  Category,
  ErrorPage,
  Saved,
  FullArticle,
  Search,
} from "@/pages";
import { loader as categoryLoader } from "@/pages/Category/Category";
import { useEffect } from "react";
import { authStateListener, getStore } from "./utils/firebase.utils";
import { useDispatch } from "react-redux";
import { currentUser } from "./store/states/user";
import { setFavorites } from "./store/states/favorites";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/:category"
          element={<Category />}
          loader={categoryLoader}
        />
        <Route path="/article" element={<FullArticle />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateListener(async (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        dispatch(currentUser(uid));

        const stored = await getStore(uid);
        dispatch(setFavorites(stored?.favorites));
      } else {
        // User is signed out
        dispatch(currentUser(""));
      }
    });

    return unsubscribe();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
