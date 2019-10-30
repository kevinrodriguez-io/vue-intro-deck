import Vue from 'vue'

import App from './components/App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
