<script setup lang="ts">
import MovieTile from './MovieTile.vue';

import { Movie } from '../models/movie.model';
import { useMoviesStore } from '../store/movies';


const store = useMoviesStore();

const emit = defineEmits<{
  select: [movie: Movie];
}>();
</script>

<template>
  <div class="movie-list">
    <movie-tile
      v-for="movie of store.movies"
      :key="movie.id"
      :movie="movie"
      @click="emit('select', movie)"
    />
  </div>
</template>

<style scoped lang="scss">
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  padding: 0 3.5rem;
  margin-bottom: 4rem;
}
</style>
