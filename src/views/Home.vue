<template>
  <div @scroll="getNextPokemons" class="home">
    <InputSearch v-model="search" placeholder="Pesquise por nome ou código" />
    <span class="list-title primary-text"> Pokemons </span>
    <PokemonsList :pokemonsList="filteredPokemonsList" />
  </div>
</template>

<script>
import PokemonsList from "../components/PokemonsList.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import InputSearch from "../components/InputSearch.vue";

export default {
  name: "home-view",
  components: {
    PokemonsList,
    InputSearch,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState("pokemons", ["pokemonsList", "offset"]),

    filteredPokemonsList() {
      let filteredList = this.pokemonsList.slice();
      if (this.search) {
        filteredList = filteredList.filter(
          (p) =>
            p.name.toLowerCase().includes(this.search.toLowerCase()) ||
            p.id == this.search
        );
      }
      return filteredList.sort((a, b) => a.id - b.id);
    },
  },
  async mounted() {
    if (this.pokemonsList.length === 0) {
      await this.getPokemonsList(this.offset);
    }
  },
  methods: {
    ...mapActions("pokemons", ["getPokemonsList"]),
    ...mapMutations("pokemons", ["incrementOffset"]),

    getNextPokemons(e) {
      let bottomOfList =
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;
      if (bottomOfList && this.offset < 888) {
        this.incrementOffset();
        this.getPokemonsList(this.offset);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  justify-content: center;
  grid-template-rows: 48px min-content 1fr;
  row-gap: 38px;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 15px 19px;
  @include mobile() {
    grid-template-rows: 48px 1fr;
    row-gap: 30px;
  }
  .list-title {
    padding: 48px 0 0 4px;
    @include mobile() {
      display: none;
    }
  }
}
::-webkit-scrollbar {
  @include desktop() {
    height: 100%;
  }
  &-thumb {
    width: 13px;
    height: 80%;
    background: rgba(196, 196, 196, 0.31);
    border-radius: 10px;
  }
}
</style>
