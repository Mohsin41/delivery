import Vue from 'vue'
import App from './app.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import 'normalize.css'
import 'bootstrap'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
/*createApp(App)
  .use(store)
  .use(router)
  .mount('#app')*/
Vue.config.productionTip = false

async function main() {
  let storeInstance = await store()

  new Vue({
    router:router(storeInstance),
    store:storeInstance,
    render: h => h(App),
  }).$mount('#app')
}

main()