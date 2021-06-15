import Vue from 'vue'
import App from './app.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import 'normalize.css'
import 'bootstrap'

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