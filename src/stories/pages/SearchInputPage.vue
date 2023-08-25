<script setup lang="ts">
import { ref } from 'vue';

import SearchInput from '../../components/SearchInput.vue';

const searchedText = ref('');

const onSearch = (text: string) => {
  searchedText.value = text;
};
</script>

<template>
  <search-input @onSearch="onSearch" />
  <div class="searched-value">Searched text: {{ searchedText }}</div>
</template>

<style scoped>
.searched-value {
  margin-top: 2rem;
}
</style>
