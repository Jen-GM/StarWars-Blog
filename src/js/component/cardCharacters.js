import React from "react";
import icono from "../pictures/starwarsNavbar.png";

function CardCharacters(props) {
  return (
    <div className="card" style={{ maxWidth: 300 }}>
      <img src={icono} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">
          <strong>{props.name}</strong>
        </h4>
        <p className="card-gender">
          Gender: {props.gender}
          <br />
          Hair Color: {props.hairColor} <br />
          Eye-Color: {props.eyeColor}
        </p>
        <div className="two-buttons d-flex justify-content-between">
          <a href="/information" className="btn btn-outline-primary fs-5">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning fs-5">
            ♡
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardCharacters;
