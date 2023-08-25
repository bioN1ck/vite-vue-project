<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * The type of the input
     */
    type?: 'text' | 'number';
    /**
     * A placeholder string
     */
    placeholder?: string;
    /**
     * Initial value
     */
    value?: string | number;
  }>(),
  {
    type: 'text',
    placeholder: '',
    value: '',
  }
);

const emit = defineEmits<{
  changeValue: [value: string];
}>();

const onChangeValue = (event: Event) => {
  emit('changeValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input class="app-input" :type="type" :placeholder="placeholder" :value="value" @input="onChangeValue($event)" />
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
