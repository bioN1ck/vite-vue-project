<template>
  <button class="search-btn" />
</template>

<style scoped lang="scss">
.search-btn {
  width: 50px;
  height: 50px;
  background: url(../assets/search.svg) no-repeat 50% 50%;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
