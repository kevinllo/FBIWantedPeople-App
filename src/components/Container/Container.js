import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import "./Container.scss";

const Container = () => {
  const [wantedPeople, setWantedPeople] = useState([]);
  useEffect(() => {
    fetchWantedPeople();
  }, []);
  const fetchWantedPeople = async () => {
    const response = await fetch(
      "https://api.fbi.gov/@wanted?pageSize=10&page=1"
    );
    const data = await response.json();
    setWantedPeople(data.items);
  };
  return (
    <main className="mainContainer">
      <div className="mainContainer__title">
        <h1>Most Wanted</h1>
      </div>
      <div className="mainContainer__buttons">
        <button>All</button>
        <button>Main</button>
        <button>Victim</button>

      </div>
      <div className="mainContainer__grid">
        {wantedPeople.map((data) => {
          return <Card data={data} key={data.uid} />;
        })}
      </div>
        <Pagination setWantedPeople={setWantedPeople} />
    </main>
  );
};
export default Container;
