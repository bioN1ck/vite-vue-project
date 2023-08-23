<script setup lang="ts">
import { computed, ComputedRef } from 'vue';

import MovieSearchSection from './MovieSearchSection.vue';
import Switcher from './Switcher.vue';
import MovieList from './MovieList.vue';

import { useFetch } from '../composables/useFetch';
import { Movie, MovieResponse } from '../models/movie.model';
import { mapRawToMovie } from '../helpers/functions';

const { result, execute } = useFetch<MovieResponse>('http://localhost:4000/movies?limit=12');
execute();

const movies: ComputedRef<Movie[]> = computed(() => {
  return result.value ? result.value.data.map(mapRawToMovie) : [];
});
const total = computed(() => {
  return result.value?.totalAmount || 0;
});
</script>

<template>
  <movie-search-section />

  <div class="movie-list-page--row">
    <div class="movie-list-page--row-counter">
      <span>{{ total }}</span> movie{{ total > 1 && 's' }} found
    </div>
    <Switcher label="Sort by" :buttons="['Release date', 'Rating']" />
  </div>

  <movie-list :movies="movies" />
</template>

<style scoped lang="scss">
.movie-list-page--row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.5rem;
  background: #888888;
  padding: 1rem 7.5rem;

  &-counter span {
    font-weight: 600;
  }
}
</style>
