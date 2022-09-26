import React from "react";


function CardPlanets({ picturePla, name, population, terrain, agregarFavorito }) {
  return (
    <div className="container-fluid px-5" >
      <img src={picturePla} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title"><strong>{name}</strong></h4>
        <p className="card-gender">
          Population: {population} <br />
          Terrain: {terrain}
        </p>
        <div className="two-buttons d-flex justify-content-between">
          <a href="#" className="btn btn-outline-primary fs-5">
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

export default CardPlanets;
