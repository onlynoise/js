import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './static/css/mui.min.css'
new Vue({
    el:"#app",
    render:createElement =>createElement(App)
})