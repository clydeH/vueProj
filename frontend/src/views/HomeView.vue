<template>
  <div class="pageBackground">
    <NavBar />
    <ParticleEarth />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "../components/Nav-bar.vue";
import ParticleEarth from "../components/Particle.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    ParticleEarth,
  },
});
</script>

<style scoped>
.pageBackground {
  background-color: #000000;
  height: 100%;
}
</style>
