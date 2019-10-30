<template>
  <form class="search-bar" @submit.prevent="handleSearchBarSubmit">
    <input type="text" v-model="search" placeholder="Busca un pokemon" />
    <button type="submit">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSearchBarSubmit() {
      this.$emit('on-search', this.search)
    }
  },
}
</script>

<style scoped>
  form {
    display: grid;
    place-content: center;
    grid-row-gap: 0.5rem;
  }
  input[type="text"] {
    padding: 0.6em;
    color: black;
    width: 250px;
  }
  button {
    padding: 0.8em;
    width: 128px;
    background-color: #2ECC71;
    color: black;
    border: none;
    text-transform: uppercase;
    font-weight: 300;
    place-self: end;
  }
</style>