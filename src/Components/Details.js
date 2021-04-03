import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

function Details({ name }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setCountry(data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return loading ? (
    "loading"
  ) : error ? (
    "check internet connection"
  ) : (
    <section className="details">
      <div className="container">{name}</div>
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
