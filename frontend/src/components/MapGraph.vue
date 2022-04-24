<template>
  <div class="flex">
    <v-card class="mx-auto" max-width="400" elevation="6"
      ><v-img src="../assets/map.jpg" height="200px" width="400" cover></v-img>
      <v-card-title> Affected areas (Coming Soon) </v-card-title>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="400"
      elevation="6"
      router-link
      to="/charts"
      ><v-img
        src="../assets/chart.jpg"
        height="200px"
        width="400"
        cover
      ></v-img>
      <v-card-title> Business intelligence </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MapGraph",

  data: () => ({}),
};
</script>

<style scoped>
.flex {
  display: flex;
  margin-top: 12%;

  flex-wrap: wrap;
}
</style>
