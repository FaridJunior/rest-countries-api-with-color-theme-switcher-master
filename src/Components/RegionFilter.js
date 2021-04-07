import React from "react";

function RegionFilter({ region, setRegion }) {
  return (
    <div className="dropdown">
      <button></button>
      <div className="options" onChange={(e) => setRegion(e.target.value)}>
        {/* <option value="All">all</option> */}

        <input id="all" type="radio" name="region" value="All" defaultChecked />
        <label style={{ "--index": 1 }} htmlFor="all">
          Filter By Region
        </label>

        <input id="radio-africa" type="radio" name="region" value="Africa" />
        <label style={{ "--index": 2 }} htmlFor="radio-africa">
          Africa
        </label>

        <input id="radio-America" type="radio" name="region" value="Americas" />
        <label style={{ "--index": 3 }} htmlFor="radio-America">
          America
        </label>

        <input id="radio-asia" type="radio" name="region" value="Asia" />
        <label style={{ "--index": 4 }} htmlFor="radio-asia">
          Asia
        </label>

        <input id="radio-europe" type="radio" name="region" value="Europe" />
        <label style={{ "--index": 5 }} htmlFor="radio-europe">
          Europe
        </label>

        <input id="radio-oceania" type="radio" name="region" value="Oceania" />
        <label style={{ "--index": 6 }} htmlFor="radio-oceania">
          Oceania
        </label>
      </div>

      <svg viewBox="0 0 24 24">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </svg>
    </div>
  );
}

export default RegionFilter;
