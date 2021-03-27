import React, { useState } from "react";

function RegionFilter() {
  return (
    <label htmlFor="region">
      "pla"
      <select
        name=""
        id="region"
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
      >
        <option value="all">all</option>
        <option key="pla" value="pla">
          "pla"
        </option>
      </select>
    </label>
  );
}

export default RegionFilter;
