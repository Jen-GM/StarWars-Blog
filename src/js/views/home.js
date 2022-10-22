import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";


export const Home = () => {
  const { store, actions } = useContext(Context);

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
                id={element.id}
                img_URL_character={element.img_URL_character}
                name={element.name}
                gender={element.gender}
                hairColor={element.hairColor}
                eyeColor={element.eyeColor}
                key={i}
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
                id={element.id}
                name={element.name}
                img_URL_planet={element.img_URL_planet}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
