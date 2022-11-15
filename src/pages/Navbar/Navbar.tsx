import { useState } from "react";
import { SearchInput, Sidebar } from "./components";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as MenuIcon } from "@/assets/menu.icon.svg";
import { ReactComponent as SearchIcon } from "@/assets/search.icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getStore, googleSignIn, userSignOut } from "@/utils/firebase.utils";
import { currentUser } from "@/store/states/user";
import { setFavorites } from "@/store/states/favorites";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  const toggleSearchView = () => setIsActive(!isActive);

  const handleSignIn = async () => {
    try {
      const { uid } = await googleSignIn();
      dispatch(currentUser(uid));

      const stored = await getStore(uid);
      dispatch(setFavorites(stored?.favorites));
    } catch (error: any) {
      alert(error.message);

      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await userSignOut();
      dispatch(currentUser(""));
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div
          className={`navbar sticky top-0 justify-between border-b-gray-300 bg-base-100 dark:border-b-0`}
        >
          <div className="flex">
            <label
              htmlFor="my-drawer-3"
              className="btn-ghost btn place-content-center p-3 "
            >
              <MenuIcon />
            </label>

            <Link
              to={"/"}
              className="btn-ghost btn grid grid-rows-2 text-lg normal-case xs:flex"
            >
              <p>News&nbsp;</p>
              <p>Digital</p>
            </Link>
          </div>

          <div className="mr-4">
            {isActive ? (
              <SearchInput toggleSearchView={toggleSearchView} />
            ) : (
              <button
                className="btn-ghost btn-circle btn"
                onClick={toggleSearchView}
              >
                <SearchIcon />
              </button>
            )}
            {user ? (
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            ) : (
              <button onClick={handleSignIn} className="btn">
                Sign In
              </button>
            )}
          </div>
        </div>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
