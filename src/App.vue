<script setup>;
import navBar from './components/navBar.vue';
import { RouterView } from 'vue-router';
import { storeToRefs } from "pinia";
import { useStoreApi } from "./stores/counter";
import { computed } from "vue";
import areaLogada from './views/areaLogada.vue';

const useStateApi = useStoreApi();
const { showHome } = storeToRefs(useStateApi);

const showHomeFalse = computed(() => {
  return showHome.value;
});
</script>

<template>
  <div class="bckImage" v-if="showHomeFalse">
    <navBar />
    <RouterView />
  </div>
  <div v-else>
    <areaLogada/>
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
