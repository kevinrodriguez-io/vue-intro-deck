<template>
  <main>
    <h1 class="title">Pokedex 🌍</h1>
    <search-bar @on-search="handleSearch" />
    <pokemon-list :pokemons="filteredPokemons" />
  </main>
</template>

<script>
import pokemonApi from '../lib/api/pokemonApi'

import SearchBar from './SearchBar'
import PokemonList from './PokemonList'

export default {
  components: {
    'search-bar': SearchBar,
    'pokemon-list': PokemonList
  },
  data() {
    return {
      searchString: '',
      pokemons: []
    }
  },
  async beforeMount() {
    const results = await pokemonApi.get('pokedex.json')
    this.pokemons = results.data.pokemon
  },
  computed: {
    filteredPokemons() {
      const { pokemons, searchString } = this
      return pokemons.filter(({ name }) => name.toLowerCase().includes(searchString.toLowerCase()))
    }
  },
  methods: {
    handleSearch(search) {
      this.searchString = search
    }
  },
}
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1.title {
    text-align: center;
  }
</style>