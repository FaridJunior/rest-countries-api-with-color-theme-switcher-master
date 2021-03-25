import React, { useState } from "react";

function RegionFilter() {
  return (
    <label htmlFor={region}>
      {label}
      <select
        name=""
        id="region"
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length == 0}
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
