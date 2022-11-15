import RegionsModal from "./RegionsModal";
import { ReactComponent as StarIcon } from "@/assets/star.icon.svg";
import { ReactComponent as FlagIcon } from "@/assets/flag.icon.svg";
import { ReactComponent as BuildingIcon } from "@/assets/building.icon.svg";
import { ReactComponent as ChipIcon } from "@/assets/chip.icon.svg";
import { ReactComponent as FilmIcon } from "@/assets/film.icon.svg";
import { ReactComponent as CyclingIcon } from "@/assets/cycling.icon.svg";
import { ReactComponent as ScienceIcon } from "@/assets/science.icon.svg";
import { ReactComponent as DumbbellIcon } from "@/assets/dumbbell.icon.svg";
import { ReactComponent as GlobeIcon } from "@/assets/globe.icon.svg";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const currentCountry = useSelector((state: RootState) => state.country.name);
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu w-60 bg-base-100 p-4 sm:w-80">
          {user && (
            <li>
              <NavLink to="/saved" className="">
                <StarIcon /> Saved News
              </NavLink>
            </li>
          )}
          {user && <div className="m-4 h-0.5  bg-gray-400 opacity-80" />}
          <li>
            <NavLink to="/">
              <FlagIcon />
              {currentCountry}
            </NavLink>
          </li>
          <li>
            <NavLink to="/business">
              <BuildingIcon /> Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <ChipIcon /> Technology
            </NavLink>
          </li>
          <li>
            <NavLink to="/entertainment">
              <FilmIcon /> Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink to="/sports">
              <CyclingIcon /> Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/science">
              <ScienceIcon /> Science
            </NavLink>
          </li>
          <li>
            <NavLink to="/health">
              <DumbbellIcon /> Health
            </NavLink>
          </li>
          <div className="m-4 h-0.5  bg-gray-400 opacity-80" />
          <li>
            <a href="#my-modal-2" className="">
              <GlobeIcon /> Select Region
            </a>
          </li>
        </ul>
      </div>
      <RegionsModal />
    </>
  );
};

export default Sidebar;
