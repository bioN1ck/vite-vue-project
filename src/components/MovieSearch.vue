<script setup lang="ts">
import SearchInput from './SearchInput.vue';
import Switcher from './Switcher.vue';

import { useMoviesStore } from '../store/movies';
import { SEARCH_BY_BUTTONS } from '../helpers/constants';

const store = useMoviesStore();
</script>

<template>
  <div class="movie-search">
    <div class="movie-search-title">FIND YOUR MOVIE</div>
    <search-input class="movie-search-input" />
    <switcher label="Search by" :init-btn="store.searchBy" :buttons="SEARCH_BY_BUTTONS" @change="store.setSearchBy" />
  </div>
</template>

<style scoped lang="scss">
.movie-search {
  padding: 2rem 3.75rem 3rem;

  &-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2.375rem;
    letter-spacing: 1.1px;
  }

  &-input {
    margin-bottom: 0.8rem;
  }
}
</style>
