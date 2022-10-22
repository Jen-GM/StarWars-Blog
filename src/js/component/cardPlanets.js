import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

function CardPlanets({ id, name, img_URL_planet }) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  

  useEffect(() => {
    actions.verMasPlanetas(id);
  }, []);

 console.log(name);


  return (
    <div className="card m-3 col-2">
      <img
        src={img_URL_planet}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title text-center">
          <strong>{name}</strong>
        </h4>
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
