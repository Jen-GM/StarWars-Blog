import React from "react";
import icono from "../pictures/starwarsNavbar.png";

function CardPlanets(props) {
  return (
    <div className="card" style={{ maxWidth: 300 }}>
      <img src={icono} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title"><strong>Nombre</strong></h4>
        <p className="card-gender">
          Population: <br />
          Terrain:
        </p>
        <a href="#" className="btn btn-primary">
          Learn more!
        </a>
        <a href="#" className="btn btn-outline-warning">
          ♡
        </a>
      </div>
    </div>
  );
}

export default CardPlanets;
