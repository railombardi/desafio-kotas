<template>
  <div class="pokemons-list">
    <PokemonsCard
      v-for="pokemon in pokemonsList"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import PokemonsCard from "./PokemonsCard.vue";

export default {
  components: {
    PokemonsCard,
  },
  props: {
    pokemonsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemons-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 153px);
  min-width: 100%;
  max-width: 858px;
  justify-content: center;
  column-gap: 15px;
  row-gap: 30px;
  padding-bottom: 80px;
  @include mobile() {
    column-gap: 23px;
    row-gap: 16px;
  }
}
</style>
