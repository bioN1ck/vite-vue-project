<script setup lang="ts">
import { onMounted, ref } from 'vue';

import MovieDetails from './MovieDetails.vue';
import MovieList from './MovieList.vue';
import TopSection from './TopSection.vue';
import MovieSearch from './MovieSearch.vue';
import SortPanel from './SortPanel.vue';

import { Movie } from '../models/movie.model';
import { useMoviesStore } from '../store/movies';

const store = useMoviesStore();
onMounted(() => store.refreshMovies());

const selectedMovie = ref<Movie | null>(null);
const setSelectedMovie = (movie: Movie | null) => {
  selectedMovie.value = movie;
};
</script>

<template>
  <top-section @search="() => setSelectedMovie(null)">
    <movie-search v-if="!selectedMovie" />
    <movie-details v-if="selectedMovie" :movie="selectedMovie" />
  </top-section>

  <sort-panel />

  <movie-list @select="setSelectedMovie" />
</template>
