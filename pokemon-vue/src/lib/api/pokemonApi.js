import axios from 'axios'

export default axios.create({
  baseURL: 'https://raw.githubusercontent.com/biuni/pokemongo-pokedex/master/',
})
