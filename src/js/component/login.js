import React, { useContext, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ]  = useState("");
 /*  const navigate = useNavigate();
 */
  const handleClick = () => {
    actions.login(username, password);
  };
  
/*   if(store.token && store.token != "" && store.token != undefined) navigate("/"); */

/* Crea el form para que user ingrese los datos y se asegura de que user se haya logueado solo 1 vez. */
  return (
    <div className="text-center mt-5">
      <h1>Login Page</h1>
      {store.token && store.token != "" && store.token != undefined ? ("Se ha logueado con el token: " + store.token) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};