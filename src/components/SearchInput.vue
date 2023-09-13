<script setup lang="ts">
import { ref, watch } from 'vue';

import AppInput from './Input.vue';
import AppButton from './Button.vue';

import { useMoviesStore } from '../store/movies';

const store = useMoviesStore();
const queryString = ref('');

watch(
  () => store.searchQuery,
  (query) => (queryString.value = query),
  { immediate: true }
);

const onSearch = () => {
  store.setSearchQuery(queryString.value);
};
</script>

<template>
  <div class="search-input--container">
    <app-input class="search-input--field" placeholder="Search" v-model="queryString" @keyup.enter="onSearch" />
    <app-button class="search-input--btn" size="large" label="search" @click="onSearch" />
  </div>
</template>

<style scoped>
.search-input--container {
  display: flex;
  align-items: center;
}
.search-input--field {
  margin-right: 14px;
}
.search-input--btn {
  width: 282px;
}
</style>
