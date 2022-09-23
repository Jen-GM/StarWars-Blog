import React, { useState } from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import Information from "../component/information";

export const Home = () => {
  /* Funciones generales: Navbar:ver favoritos, eliminar favoritos, Card: redireccionar, agregar favoritos, Information: regresar.  */

  const [favoritos, setFavoritos] = useState([]);

  const agregarFav = () => {
    setFavoritos(props.name);
  };

  const eliminarFav = () => {
    const arrayFinal = favoritos.filter((name) => name !== favoritos.name);
    console.log(arrayFinal);
    setFavoritos(arrayFinal);
  };

  console.log(favoritos);

  return (
    <>
      <Navbar array={[1, 2, 3]} borrarFav={eliminarFav} />
      <div className="container-fluid ms-5">
        <div className="text-left m-5">
          <h1 className="text-danger">Characters</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-6 g-4 overflow-auto">
          <div className="col">
            <CardCharacters
              picture=""
              name=""
              gender=""
              hairColor=""
              eyeColor=""
              agregarFavorito={agregarFav}
            />
          </div>
        </div>
        <div className="text-left m-5">
          <h1 className="text-danger">Planets</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-6 g-4">
          <div className="col">
            <CardPlanets
              picturePla=""
              name=""
              population=""
              terrain=""
              agregarFavorito={agregarFav}
            />
          </div>
        </div>
      </div>
    </>
  );
};
