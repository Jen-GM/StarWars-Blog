import React from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";

export const Home = () => (
  <div className="container-fluid ms-5">
    <div className="text-left m-5">
      <h1 className="text-danger">Characters</h1>
    </div>
    <div className="row row-cols-1 row-cols-md-6 g-4 overflow-auto">
      <div class="col">
        <CardCharacters 
		picture=""
		name=""
		gender=""
		hairColor=""
		eyeColor=""		
		/>
      </div>
    </div>
    <div className="text-left m-5">
      <h1 className="text-danger">Planets</h1>
    </div>
    <div className="row row-cols-1 row-cols-md-6 g-4">
      <div class="col">
        <CardPlanets 
		picturePla=""
		namePla=""
		population=""
		terrain=""		
		/>
      </div>
    </div>
  </div>
);
