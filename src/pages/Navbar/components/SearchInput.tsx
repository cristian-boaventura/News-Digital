import { getSearch } from "@/utils";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ArrowLeftIcon } from "@/assets/arrow-left.icon.svg";
import { ReactComponent as XMarkIcon } from "@/assets/x-mark.icon.svg";
import { setSearchInput } from "@/store/states/searchInput";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  toggleSearchView: () => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { toggleSearchView } = props;
  const [isWritting, setIsWritting] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearSearch = () => {
    setSearchValue("");
    setIsWritting(false);
    inputRef.current?.focus();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    dispatch(setSearchInput(searchValue));
    navigate("/search");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    e.target.value ? setIsWritting(true) : setIsWritting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`absolute top-1.5 left-2 right-32`}
    >
      <span
        className="btn-ghost btn-square btn absolute flex h-full items-center"
        onClick={toggleSearchView}
      >
        <ArrowLeftIcon />
      </span>
      <input
        type="text"
        placeholder="Search…"
        autoFocus
        className="input-bordered input h-[3.2rem] w-full pl-12 pr-12"
        value={searchValue}
        ref={inputRef}
        onChange={handleChange}
      />
      {isWritting && (
        <span
          className="btn-ghost btn-square btn absolute inset-y-0 right-0 flex h-full items-center"
          onClick={clearSearch}
        >
          <XMarkIcon />
        </span>
      )}
    </form>
  );
};

export default SearchInput;
