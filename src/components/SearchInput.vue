<script setup lang="ts">
import { ref } from 'vue';

import AppInput from './Input.vue';
import AppButton from './Button.vue';

const queryString = ref('');

const onChangeValue = (value: string) => {
  queryString.value = value;
};

const emit = defineEmits<{
  onSearch: [text: string];
}>();

const onButtonPress = () => {
  emit('onSearch', queryString.value);
};
</script>

<template>
  <div class="search-input--container">
    <app-input class="search-input--field" placeholder="Search" @changeValue="onChangeValue" />
    <app-button size="large" label="search" @click="onButtonPress" />
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
</style>
