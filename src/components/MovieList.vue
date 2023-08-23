<script setup lang='ts'>
import MovieTile from './MovieTile.vue';
import { Movie } from '../models/movie.model';

type Props = {
  movies: Movie[];
};

defineProps<Props>();
</script>

<template>
  <div class="movie-list">
    <movie-tile v-for="movie of movies" :key="movie.id" :movie="movie"/>
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
