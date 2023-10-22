<template>
  <router-link class="logo" :to="{ path: '/', query: { search: '' } }"> <span>netflix</span>roulette </router-link>
</template>

<style scoped>
.logo {
  display: inline-block;
  font-size: 20px;
  color: #f65261;
  font-weight: 500;
  cursor: pointer;
}
.logo span {
  color: #f65261;
  font-weight: 900;
}
</style>
