<script setup>
// import ladingPage from './views/ladingPage.vue';
import navBar from './components/navBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="bckImage">
    <navBar />
    <!-- <ladingPage /> -->
    <RouterView />
  </div>
</template>

<style scoped>
.bckImage {
  background-image: url("./assets/background.webp") !important;
  min-height: 100%;
  min-width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  height: 100vh;
}
</style>
