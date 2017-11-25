<template>
  
    <div class="temp">
        <div class="menu">
            <ul>
                <li>
                    <a v-if="isTrue" @click="getImagesData(0)">全部</a>  
                </li>
                <li v-for="(item,index) in newslistData" :key = "index">
                    <a @click= "getImagesData(item.id)">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="image" v-for="(item,index) in imagesData" :key = "index">
           <router-link v-bind='{to:"/photodetail/"+ item.id}'>
                <img :src="item.img_url" alt="">
           <div class="zhaiyao">
               <p>{{item.zhaiyao}}</p>
           </div>
           </router-link>
       </div>
    </div>
</template> 
<script>
import tool from '../tool/tool';
// 由于此插件没有引入成功，需要重新引入
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            newslistData:[],
            imagesData:[],
            isTrue:false
        }
    },
    created(){
        this.getPhotoListData()
        this.getImagesData(0)
    },
  methods:{
      getPhotoListData(){
          
          var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimgcategory`
          this.$http.get(url).then(
              res =>{
                //   console.log(res)
                  this.newslistData = res.body.message
                  this.isTrue = true
              },
              res =>{
                  console.log("图片列表错误")
              }
          )     
      },
      getImagesData(id){
          Indicator.open('Loading...');
          var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimages/${id}`
          this.$http.get(url).then(
              res =>{
                //   console.log(res)
                this.imagesData = res.body.message
                Indicator.close();
              },
              res =>{
                  console.log("图片信息错误")
                  Indicator.close();
              }
          ) 
      }
  }
}
</script>
<style scoped>
.menu ul {
    list-style:none;
    padding:5px;
    display: flex;
    
    overflow-x:auto;
 }
.menu li{
    margin-right:10px;
    flex-shrink: 0;
}
.image{
        position: relative;
        
}
    .zhaiyao p{
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: white;
        background-color: rgba(1,1,1,0.3);
        margin-bottom:2px;
    }
    .image img{
        width:100%;
        height: auto;
    }

</style>
