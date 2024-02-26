import './assets/css/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiSearch, SiPokemon, MdCatchingpokemon } from 'oh-vue-icons/icons'

addIcons(BiSearch, SiPokemon, MdCatchingpokemon)

const app = createApp(App)

app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
