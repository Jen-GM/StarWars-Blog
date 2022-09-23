import React, { useState } from "react";
import { Link } from "react-router-dom";
import icono from "../pictures/starwarsIcon.png";

export const Navbar = ({ array, borrarFav }) => {
  let counter = array.length;
  const printArray = array;

  console.log(printArray);

  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <Link to="/">
        <div className="container">
          <img className="img-top ps-5" src={icono} alt="starwars icon" />
        </div>
      </Link>
      {/* Boton de dropdown */}
      <div className="dropdown me-2 pe-5">
        <div className="dropdown pe-2">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="bg-secondary">{counter}</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
              {`${
                counter
                  ? array.forEach(element => {
                    element + <i className="fa-solid fa-trash ps-3" style={{ border: 0 }} onClick={borrarFav}></i>
              })
                  : "(Empty)"
              }`}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
