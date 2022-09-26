import React from "react";
import { Navbar } from "./navbar";

function PlanetaInformacion(props) {
  return (
    <>
      <Navbar />
      {/* Boton para regresar a la pagina anterior */}
      <div className="container">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-secondary btn-sm float-right">
            Return <i className="fa-solid fa-hand-point-left"></i>
          </button>
        </div>
      </div>
      {/* Container de toda la informacion del personaje */}
      <div className="container-fluid">
        {/* Primera parte: foto y texto */}
        <div
          className="card"
          style={{
            borderBottomWidth: 3,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomColor: "red",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/800/600?random=0"
                className="img-fluid rounded-start p-3"
                alt="picture of a character"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-center p-3">
                  <strong>{props.name}</strong>
                </h3>
                <p className="card-text text-center">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Características individuales del personaje */}
        <table className="table table-borderless">
          <thead>
            <tr className="text-danger">
              <th scope="col">Name</th>
              <th scope="col">Population</th>
              <th scope="col">Terrain</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-danger">
              <td>{props.name}</td>
              <td>{props.population}</td>
              <td>{props.terrain}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PlanetaInformacion;