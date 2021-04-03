import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import RegionFilter from "./RegionFilter";

function Main() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.eu/rest/v2/all")
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return loading ? (
    "loading"
  ) : (
    <main className="main">
      <div className="container">
        <div className="main__header">
          <Search searchText={searchText} setSearchText={setSearchText} />
          <RegionFilter region={region} setRegion={setRegion} />
        </div>
        <div className="cards-container">
          {filterCounties(countries, searchText, region).map(
            (country, index) => (
              <Card country={country} key={index} />
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;

function filterCounties(countries, searchText, region = "") {
  return countries.filter(function filterCountries(country) {
    return matchRegion(country) && matchName(country);
  });

  function matchRegion(country) {
    if (region === "" || region === "All") {
      return true;
    }
    return country.region === region;
  }

  function matchName(country) {
    return country.name.toLowerCase().includes(searchText.toLowerCase());
  }
}
