<script setup lang='ts'>
import SearchInput from './SearchInput.vue';
import Logo from './Logo.vue';
import Switcher from './Switcher.vue';
</script>

<template>
  <div class="movie-search-section">
    <div class="movie-search-section--row">
      <logo />
    </div>
    <div class="movie-search-section--container">
      <div class="movie-search-section--container-title">
        FIND YOUR MOVIE
      </div>
      <search-input class="movie-search-section--container-input" />
      <switcher label="Search by" :buttons="['title', 'genre']" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-search-section {
  height: 396px;
  background-image: url(../assets/section-bg.png);
  background-position: center;
  padding: 20px 60px;
  box-sizing: border-box;

  &--row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;
    position: relative;
  }

  &--container {
    padding: 0 3.75rem;

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
}
</style>
