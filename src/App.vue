<template>
  <nav-bar />
  <main class="m-2">
    <RouterView />
  </main>
</template>

<script>
import NavBar from './components/nav-bar.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    NavBar
  }
}
</script>
