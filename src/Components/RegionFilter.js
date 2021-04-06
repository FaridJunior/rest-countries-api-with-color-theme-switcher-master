import React from "react";

function RegionFilter({ region, setRegion }) {
  return (
    <label htmlFor="region">
      <select
        name=""
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        onBlur={(e) => setRegion(e.target.value)}
      >
        <option value="All">all</option>
        <option value="Africa" key="africa">
          Africa
        </option>
        <option value="Americas" key="america">
          America
        </option>
        <option value="Asia" key="asia">
          Asia
        </option>
        <option value="Europe" key="europe">
          Europe
        </option>
        <option value="Oceania" key="Oceania">
          Oceania
        </option>
      </select>
    </label>
  );
}

export default RegionFilter;
