import React from "react";
import icono from "../pictures/starwarsNavbar.png";

function CardCharacters({ id, name, gender, hairColor, eyeColor, agregarFavorito }) {
  return (
    <div className="container-fluid px-5" >
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" />
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
          <a href={`/characters/${id}`} className="btn btn-outline-primary fs-5">
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
