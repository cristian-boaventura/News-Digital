import world from "@/data/world.json";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCountry } from "@/store/states/country";

const RegionsModal = () => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryCode(e.currentTarget.value);
  };

  const handleUpdate = () => {
    if (countryCode !== "wd") {
      const { alpha2, name } = world.filter((c) => c.alpha2 === countryCode)[0];

      const newCountry = {
        name: name,
        code: alpha2,
      };

      return dispatch(updateCountry(newCountry));
    }

    return dispatch(
      updateCountry({
        name: "Worldwide",
        code: "",
      })
    );
  };

  return (
    <>
      <div className="modal" id="my-modal-2">
        <div className="modal-box h-5/6 pb-0">
          <label className="label cursor-pointer">
            <span className="label-text">Worldwide</span>
            <input
              type="radio"
              name="radio"
              className="radio checked:bg-blue-700"
              value="wd"
              defaultChecked
              onChange={handleChange}
            />
          </label>
          {world.map((country) => (
            <label className="label cursor-pointer" key={country.id}>
              <span className="label-text">{country.name}</span>
              <input
                type="radio"
                name="radio"
                className="radio checked:bg-blue-700"
                value={country.alpha2}
                onChange={handleChange}
              />
            </label>
          ))}
          <div className="modal-action sticky bottom-0 mt-0 gap-2 bg-base-100 py-5 ">
            <a href="#" className="btn">
              Cancel
            </a>
            <a href="#" className="btn" onClick={handleUpdate}>
              Update
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionsModal;
