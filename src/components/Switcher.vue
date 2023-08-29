<script setup lang="ts">
import RadioButton from './RadioButton.vue'

import { RadioBtnType } from '../models/movie.model';


type Props = {
  label: string;
  buttons: RadioBtnType[];
  initBtn: RadioBtnType;
};
defineProps<Props>();

const emit = defineEmits<{
  change: [value: RadioBtnType];
}>();
</script>

<template>
  <div class="switcher">
    <span>{{ label }}</span>
    <radio-button
      :buttons="buttons"
      :active-button="initBtn"
      @change="emit('change', $event)"
    />
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
