<script setup lang="ts">
import SearchButton from './SearchButton.vue';
import Logo from './Logo.vue';

import { useMoviesStore } from '../store/movies';

const store = useMoviesStore();
</script>

<template>
  <div class="top-section">
    <div class="top-section--row">
      <logo />
      <search-button @click="() => store.navigateTo('/')" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.top-section {
  background-image: url(../assets/section-bg.png);
  background-position: center;
  padding: 20px 60px 2rem;
  box-sizing: border-box;

  &--row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    position: relative;
  }
}
</style>
