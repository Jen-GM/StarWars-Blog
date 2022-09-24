import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";

export const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [planetas, setPlanetas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  //Funcion para obtener los 10 objetos de personaje.
  const getCards = () => {
    //Pasar esto para cards
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((err) => console.error(err));
  };

  //Funcion para obtener los 10 objetos de personaje.
  const getPlanets = () => {
    //Pasar esto para cards
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => {
        setPlanetas(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCards();
    getPlanets();
  }, []);

  console.log(personajes, planetas);

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
            {personajes.map((element, i) => {
              return (
                <CardCharacters
                  id={element.uid}
                  picture=""
                  name={element.name}
                  gender={element.gender}
                  hairColor={element.hairColor}
                  eyeColor={element.eyeColor}
                  agregarFavorito={agregarFav}
                  key={i}
                />
              );
            })}
            ;
          </div>
        </div>
        <div className="text-left m-5">
          <h1 className="text-danger">Planets</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-6 g-4">
          <div className="col">
            {planetas.map((element, i) => {
              return (
                <CardPlanets
                  id={element.uid}
                  picturePla=""
                  name={element.name}
                  population={element.population}
                  terrain={element.terrain}
                  agregarFavorito={agregarFav}
                  key={i}
                />
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
};
