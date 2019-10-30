<template>
  <div class="pokemon-card">
    <img :src="pokemon.img" />
    <p>{{pokemon.name}}</p>
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
    border: 1px solid #bbb;
    padding: 0.8rem;
  }
  .pokemon-card p {
    text-align: center;
  }
</style>
