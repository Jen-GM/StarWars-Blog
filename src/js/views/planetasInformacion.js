import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetasInformacion() {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    if (params?.theid) {
      actions.verMasPlanetas(params?.theid);
    }
  }, [params?.theid]); //Se ejecuta SOLO cuando se obtiene el theid
  console.log(store.infoPlanetas);

  return (
    <>
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
                src={`https://starwars-visualguide.com/assets/img/planets/${params?.theid}.jpg`}
                className="img-fluid rounded-start p-3"
                alt="picture of a character"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-center p-3">
                  <strong>{store.infoPlanetas?.name}</strong>
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
              <td>{store.infoPlanetas?.name}</td>
              <td>{store.infoPlanetas?.population}</td>
              <td>{store.infoPlanetas?.terrain}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PlanetasInformacion;
