<template>
  <div class="pokemon-card elevated">
    <img :src="pokemon.img" />
    <p class="title">{{pokemon.name}}</p>
    <div class="two-column">
      <div>
        <label>Tipos</label>
        <ul>
          <li v-for="type in pokemon.type" :key="type">
            {{type}}
            <pokemon-type-icon :type="type" />
          </li>
        </ul>
      </div>
      <div>
        <label>Debilidades</label>
        <ul>
          <li v-for="weakness in pokemon.weaknesses" :key="weakness">
            {{weakness}}
            <pokemon-type-icon :type="weakness" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonTypeIcon from './PokemonTypeIcon';
export default {
  components: {
    'pokemon-type-icon': PokemonTypeIcon,
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .pokemon-card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid rgb(221, 221, 221);
    padding: 0.8rem;
    border-radius: 5%;
    display: grid;
    place-content: center;
  }
  .pokemon-card p {
    text-align: center;
  }
  .pokemon-card img {
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    font-weight: bold;
  }
  label {
    font-size: 13px;
  }
  ul {
    font-size: 10px;
    font-weight: 300;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
