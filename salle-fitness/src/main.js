import { createApp } from "vue";
import router from "./router";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from "./App.vue"


import Header from '@/components/header_footer/header.vue';
const app =createApp(App)
app.component('app-header',Header)
app.use(router)
app.mount('#app')