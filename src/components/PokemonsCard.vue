<template>
  <div @click="redirectToDetails" class="pokemons-card">
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
      :width="40"
      :height="40"
    />
    <span class="pokemons-card__title primary-text">{{ pokemon.name }}</span>
    <span class="pokemons-card__subtitle">Cód: {{ pokemon.id }}</span>
    <div class="pokemons-card__tags">
      <TypeTag v-for="type in pokemonTypes" :key="type" :type="type" />
    </div>
  </div>
</template>

<script>
import TypeTag from "./TypeTag.vue";
export default {
  components: { TypeTag },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pokemonTypes() {
      const types = this.pokemon.types.map((t) => t.type.name);
      return types;
    },
  },
  methods: {
    redirectToDetails() {
      this.$router.push({ path: `/details/${this.pokemon.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemons-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  row-gap: 15px;
  flex-direction: column;
  max-width: 153px;
  height: 190px;
  padding: 10px;
  background: white;
  box-shadow: 0px 4px 20px #e1e1e1;
  border-radius: 8px;
  cursor: pointer;
  &__title {
    line-height: 110%;
    text-transform: capitalize;
  }
  &__subtitle {
    font-family: $font-quicksand;
    font-weight: 700;
    font-size: 9px;
    color: #000;
  }
  &__tags {
    display: flex;
    justify-content: center;
    column-gap: 4px;
    padding-top: 38px;
  }
}
</style>
