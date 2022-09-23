import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";

export const Home = () => {
  let url = "https://www.swapi.tech/api/people/";
  let personajes = {};
  let planetas = {};
  const [favoritos, setFavoritos] = useState([]);

  //Funcion para obtener los 10 objetos de personaje.
  const getCards = () => {
    //Pasar esto para cards
    for (var i = 1; i < 11; i++) {
      fetch(url + i)
        .then((res) => res.json())
        .then((data) => {
          personajes = data.result.properties;
          console.log(personajes);
        })
        .catch((err) => console.error(err));
    }
    return personajes;
  };

  //Funcion para obtener los 10 objetos de personaje.
  const getPlanets = () => {
    //Pasar esto para cards
    for (var i = 1; i < 11; i++) {
      fetch("https://www.swapi.tech/api/planets/" + i)
        .then((res) => res.json())
        .then((data) => {
          planetas = data.result.properties;
          console.log(planetas);
        })
        .catch((err) => console.error(err));
    }
    return planetas;
  };

  useEffect(() => {
    getCards();
    getPlanets();
  }, []);

  /* Funciones generales: Navbar:ver favoritos**, eliminar favoritos**, Card: redireccionar, agregar favoritos**, Information: regresar.  */

  const agregarFav = () => {
    setFavoritos(); //objeto.name
  };

  const eliminarFav = () => {
    const arrayFinal = favoritos.filter((name) => name !== favoritos.name);
    console.log(arrayFinal);
    setFavoritos(arrayFinal);
  };

  console.log(favoritos);

  return (
    <>
      <Navbar array={[]} borrarFav={eliminarFav} />
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
