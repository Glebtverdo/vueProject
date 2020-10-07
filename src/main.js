import Vue from "vue";
import App from "./App.vue";

import { store } from "./stores";
import { router } from "./routes.js";

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})