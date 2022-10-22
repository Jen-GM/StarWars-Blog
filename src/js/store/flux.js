const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      planetas: [],
      personajes: [],
      infoPersonajes: [],
      infoPlanetas: [],
      favoritos: [],
      token:"",
    },
    actions: {
      // Use getActions to call a function within a fuction
      agregarFav: (item) => {
        let aux = getStore().favoritos;
        aux.push(item);
        setStore({ favoritos: aux });
      },

      removerFav: (index) => {
        let aux = getStore().favoritos;
        let x = aux.filter((element, i) => i != index);
        setStore({ favoritos: x });
      },

      verMasPersonaje: (id) => {
        fetch(process.env.BACKEND_URL + "/character/" + id)
          .then((res) => res.json())
          .then((data) => {
            setStore({ infoPersonajes: data.character });
          })
          .catch((err) => console.error(err));
      },

      verMasPlanetas: (id) => {
        fetch(process.env.BACKEND_URL + "/planet/" + id)
          .then((res) => res.json())
          .then((data) => {
            setStore({ infoPlanetas: data.planet });
          })
          .catch((err) => console.error(err));
      },

      loadSomeData: () => {
        fetch(process.env.BACKEND_URL + "/character")
          .then((res) => res.json())
          .then((data) => {
            setStore({ personajes: data.character });
          })
          .catch((err) => console.error(err));

        fetch(process.env.BACKEND_URL + "/planet")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planetas: data.planet });
          })
          .catch((err) => console.error(err));
      },
      //token actions to get it through the backend
      login: async (email, password) => {
        /*  Metodo para enviar el email y password ingresados por el usuario */
        const results = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        /* Trae la informacion del backend por medio del fetch */
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/token", results)
          if (resp.status !== 200) {
            alert("Error al cargar");
            return false;
          }

          const data = await resp.json();
          console.log("Result from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;

        } catch (error) {
          console.error("Error al cargar", error);
        }
      },

      //token actions to get it through the backend
     /*  login: async (email, password) => { */
        /*  Metodo para enviar el email y password ingresados por el usuario */
        /* const results = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }; */
        /* Trae la informacion del backend por medio del fetch */
        /* try {
          const resp = await fetch(process.env.BACKEND_URL + "/token", results)
          if (resp.status !== 200) {
            alert("Error al cargar");
            return false;
          }

          const data = await resp.json();
          console.log("Result from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;

        } catch (error) {
          console.error("Error al cargar", error);
        }
      }, */

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
