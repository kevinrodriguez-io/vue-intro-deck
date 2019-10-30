<template>
  <div class="pokemon-card elevated">
    <img :src="pokemon.img" />
    <p>{{pokemon.name}}</p>
    <label>Tipos:</label>
    <ul>
      <li v-for="type in pokemon.type" :key="type">
        {{type}}
        <i role="img" v-if="type == 'Electric'" >⚡️</i>
      </li>
    </ul>
    <label>Debilidades:</label>
    <ul>
      <li v-for="weakness in pokemon.weaknesses" :key="weakness">
        {{weakness}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  }
  .pokemon-card p {
    text-align: center;
  }
</style>
