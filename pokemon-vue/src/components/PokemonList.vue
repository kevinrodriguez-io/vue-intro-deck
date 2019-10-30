<template>
  <section>
    <pokemon-card 
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :pokemon="pokemon" 
    />
  </section>
</template>

<script>
import PokemonCard from './PokemonCard';

export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
  components: {
    'pokemon-card': PokemonCard,
  }
}
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>