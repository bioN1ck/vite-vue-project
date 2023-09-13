<script setup lang="ts">
defineProps<{ modelValue: string }>();
defineEmits<{ 'update:modelValue': [value: string] }>();
</script>

<template>
  <input class="app-input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped>
.app-input {
  width: 100%;
  height: 57px;
  background: rgba(50, 50, 50, 0.95);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  box-shadow: none;
  border: none;
  padding-left: 1.2rem;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
}
/* Chrome, Safari, Edge, Opera */
.app-input::-webkit-outer-spin-button,
.app-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.app-input[type='number'] {
  -moz-appearance: textfield;
}
</style>
