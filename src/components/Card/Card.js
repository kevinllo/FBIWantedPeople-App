import React from "react";
import "./Card.scss";
const Card = ({ data }) => {
  return (
    <div className="mainContainer__grid--cards">
      <div className="mainContainer__grid--img">
        <img
          src={`https://www.fbi.gov/${data.path}/@@images/image`}
          alt="fbi"
        />
      </div>
      <div className="mainContainer__grid--text">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Card;
