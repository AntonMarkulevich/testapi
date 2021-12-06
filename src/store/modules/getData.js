import { ROUTES, instance } from "../axiosProps";

const dataState = () => ({
  things: [],
  types: [],
});

const getData = {
  namespaced: true,
  state: dataState(),
  getters: {
    things: (state) => state.things,
    types: (state) => state.types,
  },
  mutations: {
    things: (state, payload) => {
      state.things = payload;
    },
    types: (state, payload) => {
      state.types = payload;
    },
  },
  actions: {
    getThings: async (context) => {
      await instance
        .get(ROUTES.get.things)
        .then((response) => {
          context.commit("things", response.data);
        })
        .catch((err) => console.error(err));
    },
    getTypes: async (context) => {
      await instance
        .get(ROUTES.get.types)
        .then((response) => {
          context.commit("types", response.data);
        })
        .catch((err) => console.error(err));
    },
    updateThing: async (payload) => {
      await instance
        .put(ROUTES.put.things, payload)
        .catch((err) => console.error(err));
    },
  },
};
export default getData;
