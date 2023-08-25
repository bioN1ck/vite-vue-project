<script setup lang="ts">
import AppButton from '../../components/Button.vue';
import RadioButton from '../../components/RadioButton.vue';
</script>

<template>
  <div class="button-section">
    <app-button label="Primary (default)" />
  </div>
  <div class="button-section">
    <app-button label="Secondary" theme="secondary" />
  </div>
  <div class="button-section">
    <app-button label="Blurred" theme="blurred" />
  </div>
  <div class="button-section">
    <app-button label="Large" size="large" />
  </div>
  <div class="button-section">
    <div>Radio button:</div>
    <radio-button :labels="['theme', 'genre']" active-label="theme" />
  </div>
</template>

<style scoped>
.button-section {
  margin-bottom: 1.5rem;
}
.button-section div {
  margin-bottom: 8px;
}
</style>
