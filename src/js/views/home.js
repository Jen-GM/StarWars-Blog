import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [favoritos, setFavoritos] = useState([]);
  let arrPrueba = [1, 2, 3, 4, 5];




  /* Funciones generales: Navbar:ver favoritos**, eliminar favoritos**, Card: redireccionar, agregar favoritos**, Information: regresar.  */

  const agregarPersFav = () => {
    personajes.map((element, i) => setFavoritos([...favoritos, element.name])); //objeto.name
  };
  const agregarPlanFav = () => {
    planetas.map((element, i) => setFavoritos([...favoritos, element.name])); //objeto.name
  };

  const eliminarFav = (i) => {
    let arrayFinal = favoritos.filter((element, indice) => indice !== i);
    setFavoritos(arrayFinal);
    console.log(arrayFinal);
  };


  return (
    <>
      <div className="container-fluid ms-5">
        <div className="text-left m-5">
          <h1 className="text-danger">Characters</h1>
        </div>
        <div className="d-flex overflow-scroll">
          {store.personajes.map((element, i) => {
            return (
              <CardCharacters
                id={element.uid}
                picture="https://picsum.photos/800/600?random=3"
                name={element.name}
                gender={element.gender}
                hairColor={element.hairColor}
                eyeColor={element.eyeColor}
                agregarFavorito={agregarPersFav}
                key={i}
                type="characters"
              />
            );
          })}
        </div>
        <div className="text-left m-5">
          <h1 className="text-danger">Planets</h1>
        </div>
        <div className="d-flex overflow-scroll">
          {store.planetas.map((element, i) => {
            return (
              <CardPlanets
                id={element.uid}
                picturePla="https://picsum.photos/800/600?random=5"
                name={element.name}
                population={element.population}
                terrain={element.terrain}
                agregarFavorito={agregarPlanFav}
                key={i}
                type="planets"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
