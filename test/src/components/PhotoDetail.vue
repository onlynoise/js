<template>
  <div class="temp">
      <div class="title">
        <h3>{{PhotoDetailData.title}}</h3>
      </div>
      <div class="otitle">
        
        <div>
          {{PhotoDetailData.click}}次浏览
        </div>
        分类：经济民生
      </div>
      <!-- 图片 -->
      <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li v-for = "(item,index) in PhotoImageData" :key = "index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/newslist">
		                   <img class = img :src="item.src" alt="">
                    </router-link>
                </li>
		        </ul> 
		  </div>
      
      <div class="content">
        <p v-html = "PhotoDetailData.content"></p>
      </div>
      
  </div>
</template>
<style>
.img {
  width:70px;
  height:70px;
}
.content {
  padding:5px;
}
  .title{
      text-align: center;
      color:blueviolet;
      padding: 5px;
  }
  .otitle {
    display: flex;
    font-size:14px;
    justify-content: space-around;
    color:rgba(0,0,0,0.5)
  }
  .mui-grid-view.mui-grid-9 {
    background-color:white;
  }
</style>
<script>

import tool from '../tool/tool';
export default {
  data(){
    return {
     PhotoDetailData:{},
     PhotoImageData:[]
    }
  },
  created(){
    var id = this.$route.params.id
     this.getPhotoDetailData(id)
     this.getPhotoImageData(id)
  },
  methods:{
    getPhotoDetailData(id){
      var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimageInfo/${id}`
      this.$http.get(url).then(
        res =>{
      // console.log(res)
      this.PhotoDetailData = res.body.message[0]
        },
        res =>{
          console.log("图片详情加载失败")
        }
      )
    },
    getPhotoImageData(id){
      var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getthumimages/${id}`
      this.$http.get(url).then(
        res =>{
          // console.log(res)
          this.PhotoImageData = res.body.message
        },
        res =>{
          console.log("图片详情加载失败")
        }
      )
    }
  }
}
</script>
