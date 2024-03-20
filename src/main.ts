import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    })
  )
  .mount("#app");
