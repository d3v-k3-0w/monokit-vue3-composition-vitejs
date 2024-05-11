import './assets/main.css';

import { createPinia } from 'pinia';
import piniaPersisted from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//++ crear una instancia de Pinia, el sistema de gestión de estado Vuex para Vue 3
const pinia = createPinia();

//++ registrar el plugin piniaPluginPersistedstate en la instancia de Pinia para mantener el estado persistente
//   en localStorage o sessionStorage
pinia.use(piniaPersisted);

//++ crear una instancia de la aplicación Vue.js
const app = createApp(App);

//++ usar la instancia de Pinia en nuestra aplicación Vue.js
app.use(pinia);
//++ usar las rutas definidas en nuestro router
app.use(router);

//++ montar la aplicación Vue.js en el elemento del DOM con el ID '#app'
app.mount('#app');
