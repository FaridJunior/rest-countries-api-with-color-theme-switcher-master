import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

function Details({ name }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setCountry(data[0]);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isEmpty(country)) {
      getBorderCountries();
    }
  }, [country]);

  function getBorderCountries() {
    const borderCountriesCodesString = getCodesString(country);
    if (borderCountriesCodesString !== "") {
      const url = `https://restcountries.eu/rest/v2/alpha?codes=${borderCountriesCodesString}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBorderCountries(data);
        })
        .catch(() => {
          setError(true);
        });
    }
  }

  return loading ? (
    <span className="loading" id="loading"></span>
  ) : error ? (
    "check internet connection"
  ) : (
    <section className="details">
      <div className="container">
        <div className="col">
          <button className="back-btn">
            <Link to="/"> &larr; back </Link>
          </button>
          <div className="flag-img">
            <img src={country.flag} alt={country.name} />
          </div>
        </div>
        <div className="col">
          <div className="country-info">
            <h2 className="country-name row">{country.name}</h2>
            <div className="col">
              <p>
                Native Name:{" "}
                <span className="country-info__data">{country.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span className="country-info__data">{country.population}</span>
              </p>
              <p>
                Region:{" "}
                <span className="country-info__data">{country.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="country-info__data">{country.subregion}</span>
              </p>
              <p>
                Capital:{" "}
                <span className="country-info__data">{country.capital}</span>
              </p>
            </div>
            <div className="col">
              <p>
                Top Level Domain:{" "}
                <span className="country-info__data">
                  {country.topLevelDomain &&
                    country.topLevelDomain.map((domain) => ` ${domain}`)}
                </span>
              </p>
              <p>
                Currencies:{" "}
                <span className="country-info__data">
                  {country.currencies &&
                    country.currencies.map((cu) => ` ${cu.name}`)}
                </span>
              </p>
              <p>
                Language:{" "}
                <span className="country-info__data">
                  {country.languages &&
                    country.languages.map((lang) => ` ${lang.name}`)}
                </span>
              </p>
            </div>
            <p className="border-country row">
              <span> Border Countries:</span>
              <span className="data">
                {borderCountries &&
                  borderCountries.map((country) => (
                    <span className="badge" key={country.name}>
                      {country.name}
                    </span>
                  ))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

function getCodesString(country) {
  return country.borders.join(";");
}

function isEmpty(obj) {
  return Object.keys(obj).length <= 0;
}
