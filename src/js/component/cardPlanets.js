import React, { useContext } from "react";
import { Context } from "../store/appContext";

function CardPlanets({ id, name, population, terrain }) {
  const { store, actions } = useContext(Context);

  console.log(store.favoritos);

  return (
    <div className="container-fluid px-5">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title">
          <strong>{name}</strong>
        </h4>
        <p className="card-gender">
          Population: {store.population} <br />
          Terrain: {terrain}
        </p>
        <div className="two-buttons d-flex justify-content-between">
          <a href={`/planets/${id}`} className="btn btn-outline-primary fs-5">
            Learn more!
          </a>
          <button
            href="#"
            className="btn btn-outline-warning fs-5"
            onClick={() => actions.agregarFav({ id: id, name: name })}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPlanets;
