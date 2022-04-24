<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "../components/Nav-bar.vue";

export default defineComponent({
  name: "MapsView",

  components: {
    NavBar,
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
