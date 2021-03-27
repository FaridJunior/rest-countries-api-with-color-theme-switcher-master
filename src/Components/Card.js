import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="card__body">
        <h3 className="card__title">Germany</h3>
        <ul className="card__details">
          <li className="card__detail">Population: 50:0050</li>
          <li className="card__detail">Region: ---</li>
          <li className="card__detail">Capital: Berlin</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
