import React from "react";
import icono from "../pictures/starwarsNavbar.png";

function CardCharacters({ picture, name, gender, hairColor, eyeColor, agregarFavorito }) {
  return (
    <div className="card" >
      <img src={picture} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">
          <strong>{name}</strong>
        </h4>
        <p className="card-gender">
          Gender: {gender}
          <br />
          Hair Color: {hairColor} <br />
          Eye-Color: {eyeColor}
        </p>
        <div className="two-buttons d-flex justify-content-between">
          <a href="/information" className="btn btn-outline-primary fs-5">
            Learn more!
          </a>
          <a href="#" className="btn btn-outline-warning fs-5" onClick={agregarFavorito}>
            ♡
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardCharacters;
