<script setup lang="ts">
import MovieTile from './MovieTile.vue';

import { useMoviesStore } from '../store/movies';

const store = useMoviesStore();
</script>

<template>
  <div class="loading" v-if="store.loadingMovieList">Loading...</div>
  <div class="error" v-else-if="store.errorMovieList">Something went wrong...</div>

  <div class="movie-list" v-else>
    <movie-tile v-for="movie of store.movieList" :key="movie.id" :movie="movie" @click="() => store.navigateTo(`/${movie.id}`)" />
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
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  padding: 0 3.5rem 4rem;
}
</style>
