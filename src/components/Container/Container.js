import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
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
  const fetchWantedPeoplePerPage = async (currentPage) => {
    const response = await fetch(
      `https://api.fbi.gov/@wanted?pageSize=10&page=${currentPage}`
    );
    const data = await response.json();
    return data;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const dataFromServer = await fetchWantedPeoplePerPage(currentPage);
    setWantedPeople(dataFromServer.items);
  };
  return (
    <main className="mainContainer">
      <div className="mainContainer__title">
        <h1>Most Wanted</h1>
      </div>
      <div className="mainContainer__buttons">
        <div className="mainContainer__buttons--filters">
          <button>All</button>
          <button>Main</button>
          <button>Victim</button>
        </div>
        <Pagination handlePageClick={handlePageClick} />
      </div>
      <div className="mainContainer__grid">
        {wantedPeople.map((items) => {
          return (
            <div key={items.uid} className="mainContainer__grid--cards">
              <p>{items.title}</p>
              <div className="mainContainer__grid--cards--img">
                <img
                  src={`https://www.fbi.gov/${items.path}/@@images/image`}
                  alt="fbi"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Container;
