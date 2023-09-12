<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label?: string;
    /**
     * The theme of the button (primary, secondary or blurred)
     */
    theme?: 'primary' | 'secondary' | 'blurred';
    /**
     * Size of the button
     */
    size?: 'small' | 'large';
  }>(),
  {
    label: '',
    theme: 'primary',
    size: 'small',
  }
);

const classes = computed(() => ({
  'app-button': true,
  [`app-button--${props.theme}`]: true,
  [`app-button--${props.size}`]: true,
}));
</script>

<template>
  <button :class="classes">{{ label }}</button>
</template>

<style scoped>
.app-button {
  border-radius: 4px;
  font-size: 1.25rem;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #f65261;
  box-shadow: none;
  white-space: nowrap;
}
.app-button--primary {
  color: #ffffff;
  background-color: #f65261;
}
.app-button--primary:active {
  background-color: #bd323f;
  border-color: #bd323f;
}
.app-button--secondary {
  color: #f65261;
  background: transparent;
}
.app-button--secondary:active {
  color: #bd323f;
  border-color: #bd323f;
}
.app-button--blurred {
  color: #f65261;
  background-color: rgba(151, 151, 151, 0.68);
  border: none;
}
.app-button--blurred:active {
  background-color: rgba(138, 138, 138, 0.68);
}
.app-button--small {
  height: 46px;
  padding: 0 1.12rem;
  font-weight: 600;
}
.app-button--large {
  height: 57px;
  padding: 0 3rem;
  font-weight: 500;
}
</style>
