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
  async getCurrentPokemon({ commit }, id) {
    const { data: data } = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    commit("setCurrentPokemon", data);
  },
  async getPokemonAbilities({ commit }, endpoints) {
    let abilities = [];
    endpoints.map(async (url) => {
      let { data: data } = await Axios.get(url);
      data = data.effect_entries.find(
        (e) => e.language.name == "en"
      ).short_effect;
      abilities.push(data);
    });
    commit("setPokemonAbilities", abilities);
  },
};
