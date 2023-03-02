import Axios from "axios";
export default {
  async getPokemonsList({ commit, state }) {
    let endpoints = [];
    let limit = 0;

    if (state.offset === 888) {
      limit = 11;
    } else {
      limit = 25;
    }
    for (let i = state.offset + 1; i < state.offset + limit; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    endpoints.map(async (url) => {
      const { data: data } = await Axios.get(url);
      commit("setPokemons", data);
    });
  },
};
