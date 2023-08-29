<script setup lang="ts">
import { ref } from 'vue';

import { RadioBtnType } from '../models/movie.model';


const props = defineProps<{
  /**
   * The list of button labels
   */
  buttons: RadioBtnType[];
  /**
   * The label chosen by default
   */
  activeButton: RadioBtnType;
}>();

const selected = ref(props.activeButton);

const emit = defineEmits<{
  change: [value: RadioBtnType];
}>();

const onChange = (btn: RadioBtnType) => {
  emit('change', btn);
  selected.value = btn;
};
</script>

<template>
  <div class="radio-button--container">
    <button
      class="radio-button--item"
      v-for="button in buttons"
      :key="button.value"
      :class="{ active: button.value === selected.value }"
      @click="onChange(button)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<style scoped>
.radio-button--container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.radio-button--item {
  height: 36px;
  padding: 0 18px;
  border: none;
  background-color: rgba(50, 50, 50, 0.8);
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
}
.radio-button--item:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.radio-button--item:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.active {
  background-color: #f65261;
}
</style>
