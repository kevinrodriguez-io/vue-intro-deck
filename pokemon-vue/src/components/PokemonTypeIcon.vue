<template>
  <i role="img" v-if="type === 'Grass'" >🍃</i>
  <i role="img" v-else-if="type === 'Electric'" >⚡️</i>
  <i role="img" v-else-if="type === 'Poison'" >☠️</i>
  <i role="img" v-else-if="type === 'Fire'" >🔥</i>
  <i role="img" v-else-if="type === 'Ice'" >❄️</i>
  <i role="img" v-else-if="type === 'Water'" >🌊</i>
  <i role="img" v-else-if="type === 'Bug'" >🐛</i>
  <i role="img" v-else-if="type === 'Flying'" >🦅</i>
  <i role="img" v-else-if="type === 'Normal'" >🐺</i>
  <i role="img" v-else-if="type === 'Fighting'" >🥊</i>
  <i role="img" v-else-if="type === 'Ground'" >☄️</i>
  <i role="img" v-else-if="type === 'Psychic'" >🧠</i>
  <i role="img" v-else-if="type === 'Rock'" >🌑</i>
  <i role="img" v-else-if="type === 'Fairy'" >🧚🏼‍♀️</i>
  <i role="img" v-else-if="type === 'Steel'" >🔪</i>
  <i role="img" v-else-if="type === 'Ghost'" >👻</i>
  <i role="img" v-else-if="type === 'Dark'" >🧿</i>
  <i role="img" v-else-if="type === 'Dragon'" >🐉</i>
  <i role="img" v-else>🌈</i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  i {
    font-style: normal;
  }
</style>