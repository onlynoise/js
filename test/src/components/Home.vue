<template>
  <div class="temp">
      <!-- 图片轮播部分  mint-ui导入 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1">1</mt-swipe-item>
            <mt-swipe-item class="slide2">2</mt-swipe-item>
            <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe> -->

        

         <!-- <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1" v-for="(item,index) in homeData" :key="index">
                <a :href="item.url">
                    <img class="img" :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe> -->
        <Lunbo :lunboData="homeData"></Lunbo>
        
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻列表</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图文</div>
                    </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div>
                    </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div>
                  </a>
                </li>
		        </ul> 
		    </div>
      
  </div>
</template>
<script>
import tool from '../tool/tool'
import Lunbo from './sub/Lunbo.vue'
export default {
  data () {
    return {
      homeData:[],
    }
  },
  components:{
        Lunbo
    },
  created(){
    this.getHomeDate()
  },
  methods:{
    getHomeDate(){
      // var url = 'http://vue.studyit.io/api/getlunbo'      
      var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getlunbo`     
      this.$http.get(url).then(
        res=>{
          // console.log(res)
         this.homeData = res.body.message
        //  console.log(this.homeData)
        },
        res =>{
          console.log("轮播图加载失败")
        }
      )
    }
  }
}
</script>

<style scoped>
 /* scoped 用于指定仅此组件有此样式 */
  .mui-icon-home {
    background-image:url("../images/callme.png");
    background-repeat:round;
    
  }
  .mui-icon-email {
    background-image:url("../images/feedback.png");
    background-repeat:round;
    
  }
  .mui-icon-home:before,
  .mui-icon-email:before
   {
    content: '';
}
  .mui-icon {
    height:40px;
    width:40px;
  }
 .mui-grid-view.mui-grid-9 {
   background-color:white;
 }
 a {
   height:83px;
 }
</style>
