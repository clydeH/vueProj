<template>
  <v-card class="overflow-hidden">
    <v-app-bar app elevation="6" color="#000000" dense dark>
      <v-btn router-link to="/"
        ><span style="color: #fff">Vue showcase</span></v-btn
      >
      <v-spacer></v-spacer>
      <v-btn router-link to="/analysis" color="#fff"> analysis </v-btn>
      <!-- Authentication via auth0 not completed  -->
      <v-btn v-if="!isAuthenticated" @click="login" color="#fff"> Login </v-btn>
      <v-btn v-if="isAuthenticated" @click="logout" color="#fff">
        Logout
      </v-btn>
      <!-- -->
    </v-app-bar>
    <hr />
  </v-card>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "NavBar",
  setup() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
    };
  },

  data: () => ({}),
};
</script>
