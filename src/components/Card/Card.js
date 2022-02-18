import React from "react";
import "./Card.scss";
const Card = ({ items }) => {
  return (
    <div className="mainContainer__grid--cards">
      <p>{items.title}</p>
      <div className="mainContainer__grid--cards--img">
        <img
          src={`https://www.fbi.gov/${items.path}/@@images/image`}
          alt="fbi"
        />
      </div>
    </div>
  );
};

export default Card;
