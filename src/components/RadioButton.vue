<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  /**
   * The list of button labels
   */
  labels: string[];
  /**
   * The label chosen by default
   */
  activeLabel?: string;
}>();

const selected = ref(props.activeLabel);

const emit = defineEmits<{
  change: [value: string];
}>();

const onChange = (value: string) => {
  emit('change', value);
  selected.value = value;
};
</script>

<template>
  <div class="radio-button--container">
    <button
      class="radio-button--item"
      :class="{ active: label === selected }"
      v-for="label in labels"
      :key="label"
      @click="onChange(label)"
    >
      {{ label }}
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
