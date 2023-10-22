<script setup lang="ts">
import MovieList from './MovieList.vue';
import TopSection from './TopSection.vue';
import SortPanel from './SortPanel.vue';
import FooterSection from './FooterSection.vue';
</script>

<template>
  <top-section>
    <router-view />
  </top-section>

  <sort-panel />

  <movie-list />

  <footer-section />
</template>
