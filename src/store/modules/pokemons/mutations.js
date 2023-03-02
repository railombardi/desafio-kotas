export default {
  setPokemons(state, pokemons) {
    state.pokemonsList.push(pokemons);
  },
  incrementOffset(state) {
    state.offset += 24;
  },
};
