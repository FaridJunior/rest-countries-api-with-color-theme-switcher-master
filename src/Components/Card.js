import { Link } from "@reach/router";
import React from "react";

function Card(props) {
  const { name, flag, region, population, capital } = props.country;
  return (
    <div className="card">
      <Link to={`details/${name}`} className="card__link">
        <div className="card__img">
          <img src={flag} alt={name} loading="lazy" />
        </div>
        <div className="card__body">
          <h3 className="card__title">{name}</h3>
          <ul className="card__details">
            <li className="card__detail">
              Population: <span className="">{population}</span>
            </li>
            <li className="card__detail">
              Region: <span className="">{region}</span>
            </li>
            <li className="card__detail">
              Capital: <span className="">{capital}</span>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Card;
