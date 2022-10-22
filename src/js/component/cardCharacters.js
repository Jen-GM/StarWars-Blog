import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

function CardCharacters({
  id,
  name,
  img_URL_character
}) {
  const { store, actions } = useContext(Context);
  


  return (
    <div className="card m-3 col-2">
      <img
        src={img_URL_character}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title text-center">
          <strong>{name}</strong>
        </h4>
        <div className="two-buttons d-flex justify-content-between">
          <a
            href={`/characters/${id}`}
            className="btn btn-outline-primary fs-5"
          >
            Learn more!
          </a>
          <button
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

export default CardCharacters;
