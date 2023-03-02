import actions from "./actions.js";
import mutations from "./mutations.js";

const state = {
  pokemonsList: [],
  offset: 0,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
