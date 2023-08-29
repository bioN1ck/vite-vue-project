<script setup lang='ts'>
import Switcher from './Switcher.vue';

import { useMoviesStore } from '../store/movies';
import { SORT_BY_BUTTONS } from '../helpers/constants';


const store = useMoviesStore();

</script>

<template>
  <div class="sort-panel">
    <div class="sort-panel-counter">
      <span>{{ store.total }}</span> movie{{ store.total > 1 && 's' }} found
    </div>
    <Switcher
      label="Sort by"
      :initBtn="store.sortBy"
      :buttons="SORT_BY_BUTTONS"
      @change="store.setSortBy"
    />
  </div>
</template>

<style scoped>
.sort-panel {
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
