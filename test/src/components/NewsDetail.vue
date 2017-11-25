<template>
  <div class="temp">
      <div class="title">
            <h4>{{newsDetaildata.title}}</h4>
            
            <div class ="info">
                {{newsDetaildata.add_time | filter('YYYY-MM-DD')}}
                    <div>{{newsDetaildata.click}}浏览
                    分类：经济民生
                    </div>  
            </div>
            <hr>
            <div class="content" v-html="newsDetaildata.content">
            </div>
      </div>
      
  </div>
</template>
<script>
import tool from '../tool/tool'
export default {
    data () {
        return{
            newsDetaildata:{}
        }
    },
    created(){
        //获取id值
        var id = this.$route.params.id
        this.getNewsDetailData(id) 
    },
    methods:{
        getNewsDetailData(id){
            
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnew/`+id;
            
            this.$http.get(url).then(
            
                res =>{
                    this.newsDetaildata = res.body.message[0]
                    console.log(res)
                },
                res =>{
                    console.log("新闻列表错误")
                }
            )

    }
  }
}
</script>
<style scoped>
    h4 {
        color:blue;
    }
    .info {
        display:flex;
        justify-content: space-between;
    }
    .title {
        padding:10px;
    }
</style>
