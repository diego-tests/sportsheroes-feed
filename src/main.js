import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import store from './store'
import fr from './i18n/fr'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fr',
  messages: { fr },
})

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
