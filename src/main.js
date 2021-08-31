import Vue from 'vue' //GLOBAL VIEW OBJECT VUE sendo importado no módulo
import App from './App.vue' //COMPONENTE

Vue.config.productionTip = false

//INSTANCIA DA VUE
//criada a partir do global view object 
new Vue({
  render: h => h(App),
}).$mount('#app')
