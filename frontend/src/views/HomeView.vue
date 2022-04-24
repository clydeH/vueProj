<template>
  <div class="pageBackground">
    <NavBar />
    <ParticleEarth />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

// Components
import NavBar from "../components/Nav-bar.vue";
import ParticleEarth from "../components/Particle.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    ParticleEarth,
  },
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      user,
      isAuthenticated,
    };
  },
});
</script>

<style scoped>
.pageBackground {
  background-color: #000000;
  height: 100%;
}
</style>
