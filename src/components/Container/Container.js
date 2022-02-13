import React, { useState, useEffect } from "react";
import "./Container.scss";
const Container = () => {
  const [wantedPeople, setWantedPeople] = useState([]);
  useEffect(() => {
    fetchWantedPeople();
  }, []);
  const fetchWantedPeople = async () => {
    const data = await fetch("https://api.fbi.gov/@wanted?pageSize=10&page=1");
    const response = await data.json();
    setWantedPeople(response.items);
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
        {wantedPeople.map((items) => {
          return (
            <div key={items.uid} className="mainContainer__grid--cards">
              <p>{items.title}</p>
              <img
                src={`https://www.fbi.gov/${items.path}/@@images/image`}
                alt="fbi"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Container;
