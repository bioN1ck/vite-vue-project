<script setup lang="ts">
import RadioButton from './RadioButton.vue';

type Props = {
  buttons: string[];
  label: string;
};
defineProps<Props>();
</script>

<template>
  <div class="switcher">
    <span>{{ label }}</span>
    <radio-button :active-label="buttons[0]" :labels="buttons" />
  </div>
</template>

<style scoped lang="scss">
.switcher {
  display: inline-flex;
  align-items: center;

  span {
    font-size: 18px;
    text-transform: uppercase;
    margin-right: 1.2rem;
  }
}
</style>
