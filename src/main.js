import Vue from 'vue'
import App from './App.vue'
import { Header, Button, Picker, Field, Radio} from 'mint-ui'
import router from './router'
import store from './store/index'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

// Vue.use(MINT)
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Picker.name, Picker);
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);

new Vue({
    el: '#app',
    router,
    store,
    render: c => c(App)
})

Vue.use(VueRouter)