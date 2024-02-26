<template>
  <div class="-mt-6 flex items-center justify-between px-2 md:-mt-10">
    <v-icon name="si-pokemon" class="h-32 w-32 text-red-500 md:h-48 md:w-48" />
    <Router-link
      to="/"
      class="rounded bg-yellow-300 px-4 py-2 text-center text-sm font-medium transition hover:bg-yellow-400"
      >Back to Pokedex</Router-link
    >
  </div>

  <div>
    <h1 class="text-center text-4xl font-bold text-red-500">{{ pokemon.name.toUpperCase() }}</h1>
    <img :src="pokemon.sprites.front_default" alt="" class="mx-auto h-48 w-48 md:h-96 md:w-96" />
    <ul class="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3">
      <li
        v-for="stat of pokemon.stats"
        :key="stat.stat.name"
        class="flex h-20 flex-col items-center rounded-lg bg-red-500 p-2"
      >
        <span class="text-lg font-bold">{{ stat.stat.name.toUpperCase() }}</span>
        <span class="text-2xl font-bold text-yellow-300">{{ stat.base_stat }}</span>
      </li>
    </ul>
    <div class="flex items-center justify-center">
      <button
        @click="toggleAccordion"
        class="mt-4 w-3/4 rounded-lg border border-red-500 bg-transparent px-4 py-2 text-xl font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        All Attacks
      </button>
    </div>

    <ul v-if="showAccordion" class="my-10">
      <li
        v-for="move of pokemon.moves"
        class="container mx-auto my-2 w-3/4 rounded-lg bg-orange-500 p-2 pl-10 text-xl font-bold"
      >
        <p><span class="text-2xl text-yellow-300">> </span>{{ move.move.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    pokemonName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pokemon: null,
      showAccordion: false
    }
  },
  methods: {
    toggleAccordion() {
      this.showAccordion = !this.showAccordion
    }
  },
  async created() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)
    const data = await response.json()
    this.pokemon = data
  }
}
</script>
