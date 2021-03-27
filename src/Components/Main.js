import React from "react";
import Card from "./Card";
import Search from "./Search";
import RegionFilter from "./RegionFilter";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__header">
          <Search />
          <RegionFilter />
        </div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}

export default Main;
