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
      infoAdicionalPlanetas: [],
      infoPersonajes: [],
      infoPlanetas: [],
      favoritos: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      agregarFav: (item) => {
        let aux = getStore().favoritos;
        aux.push(item);
        setStore({favoritos:aux})
      },

      removerFav: (index) => {
        let aux = getStore().favoritos;
        let x = aux.filter((element, i) => i != index) 
        setStore({favoritos:x})
      },

      verMasPersonaje: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((res) => res.json())
          .then((data) => {
            setStore({infoPersonajes:data.result.properties});
          })
          .catch((err) => console.error(err));
      },

      verMasPlanetas: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((res) => res.json())
          .then((data) => {
            setStore({infoPlanetas:data.result.properties});
          })
          .catch((err) => console.error(err));
      },

      loadSomeData: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({personajes:data.results});
          })
          .catch((err) => console.error(err));

        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({planetas:data.results});
          })
          .catch((err) => console.error(err));
      },
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
