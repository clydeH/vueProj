import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(
    createAuth0({
      domain: "dev-rp-hfxja.us.auth0.com",
      client_id: "Aclt6Ux35R2s1cVLuj5sdYUgP6miQACM",
      redirect_uri: window.location.origin,
    })
  )
  .mount("#app");
