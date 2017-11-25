import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import './static/css/mui.min.css'
import './root.css'
// 引入vue-router来控制器各个页面的切换
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue中请求的时候,除了可以使用axios以外,还可以使用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 引入moment
import moment from 'moment'
// 引入过滤器
Vue.filter('filter', function (input, fmtString){
    return moment(input).format(fmtString)
}

)
// 引入各个页面组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import ShopCar from './components/ShopCar.vue'
import NewsList from './components/NewsList.vue'
import NewsDetail from './components/NewsDetail.vue'
import PhotoList from './components/PhotoList.vue'
import PhotoDetail from './components/PhotoDetail.vue'


var router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes:[
       { name:'root',path:"/",redirect:'/home'},
       { name:'home',path:"/home",component:Home},
       { name: 'member', path: '/member', component: Member },
       { name: 'shopcar', path: '/shopcar', component: ShopCar },
       { name: 'search', path: '/search', component: Search },
       { name: 'newslist', path: '/newslist', component: NewsList },
       { name: 'newsdetail', path: '/newsdetail/:id', component: NewsDetail },
       { name: 'photolist', path: '/photolist', component: PhotoList },
       { name: 'photodetail', path: '/photodetail/:id', component: PhotoDetail },
    //    { name: 'photoimagedata', path: '/photoimagedata/:id', component: PhotoDetail },
      
       
    ]
})



new Vue({
    el:"#app",
    router,
    VueRouter,
    render:createElement =>createElement(App)
})