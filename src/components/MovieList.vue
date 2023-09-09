<script setup lang="ts">
import MovieTile from './MovieTile.vue';

import { Movie } from '../models/movie.model';
import { useMoviesStore } from '../store/movies';

const store = useMoviesStore();

const emit = defineEmits<{ select: [movie: Movie] }>();
</script>

<template>
  <div class="loading" v-if="store.loading">Loading...</div>
  <div class="error" v-else-if="store.error">Something went wrong...</div>

  <div class="movie-list" v-else>
    <movie-tile v-for="movie of store.movies" :key="movie.id" :movie="movie" @click="emit('select', movie)" />
  </div>
</template>

<style scoped lang="scss">
@mixin fallback-screen {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}

.loading {
  @include fallback-screen;
}
.error {
  @include fallback-screen;
  color: #f65261;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  padding: 0 3.5rem 4rem;
}
</style>
