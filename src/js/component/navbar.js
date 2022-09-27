import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import icono from "../pictures/starwarsIcon.png";
import { Link } from 'react-router-dom';


export const Navbar = ({ array, borrarFav, resultado }) => {
  const { store, actions } = useContext(Context);

  console.log(store.favoritos);

 /*  let counter = arrayPantalla.length; */

  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
      <Link to="/">
        <img className="img-top ps-5" src={icono} alt="starwars icon" />
        </Link> 
      </div>
      {/* Boton de dropdown */}
      <div className="dropdown me-2 pe-5">
        <div className="dropdown pe-2">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="bg-secondary"></span>
          </button>
          <ul className="dropdown-menu">
            {store.favoritos.map((element, i) => {
              return (
                <li>
                  {element.name}
                  <i
                    className="fa-solid fa-trash ps-3"
                    style={{ border: 0, cursor: "pointer" }}
                    onClick={() => {
                      actions.removerFav(i);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
