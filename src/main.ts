import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory, Router } from 'vue-router';

import './style.css';
import App from './App.vue';

import MovieSearch from './components/MovieSearch.vue';
import MovieDetails from './components/MovieDetails.vue';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MovieSearch,
    },
    {
      path: '/:id',
      component: MovieDetails,
      props: true,
    },
  ],
});

createApp(App).use(createPinia()).use(router).mount('#app');
