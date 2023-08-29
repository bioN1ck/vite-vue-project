<script setup lang='ts'>
import Logo from './Logo.vue';
import SearchButton from './SearchButton.vue';

const emit = defineEmits<{
  search: [];
}>();
</script>

<template>
  <div class="top-section">
    <div class="top-section--row">
      <logo />
      <search-button @click="emit('search')" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.top-section {
  min-height: 396px;
  background-image: url(../assets/section-bg.png);
  background-position: center;
  padding: 20px 60px 2rem;
  box-sizing: border-box;

  &--row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    position: relative;
  }
}
</style>
