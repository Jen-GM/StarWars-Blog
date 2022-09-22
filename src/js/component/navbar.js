import React from "react";
import { Link } from "react-router-dom";
import icono from "../pictures/starwarsIcon.png";

export const Navbar = () => {
	let counter = 0;

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
              Favorites {counter}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  (Empty)
				  <i className="fa-solid fa-trash ps-3" style={{border:0}}></i>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};
