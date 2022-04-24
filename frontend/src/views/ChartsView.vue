<template>
  <div>
    <NavBar />
    <div class="flex">
      <PieChart />
      <ScatterChart />
    </div>
    <CandleChart />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import NavBar from "../components/Nav-bar.vue";
import PieChart from "../components/PieChart.vue";
import ScatterChart from "../components/ScatterChart.vue";
import CandleChart from "../components/CandleChart.vue";

export default defineComponent({
  name: "ChartsView",

  components: {
    NavBar,
    PieChart,
    ScatterChart,
    CandleChart,
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
