<template>
  <div>
    <NavBar />
    <MapGraph />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "../components/Nav-bar.vue";
import MapGraph from "../components/MapGraph.vue";

export default defineComponent({
  name: "AnalysisView",

  components: {
    NavBar,
    MapGraph,
  },
});
</script>
