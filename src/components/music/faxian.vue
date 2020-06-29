<template>
  <div class="fxbox" style="margin-top:40px">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imglist" :key="index">
        <img :src="item.pic" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="gdbox"  >
      <div class="gedan" v-for="(item,index) in gd" :key="index">
        <img :src="item.picUrl" alt="">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
console.log(this.$route)
export default {
  name: 'faxian',
  data () {
    return {
      imglist: [],
      gd: {}
    }
  },
  created () {
    this.$http.get('https://autumnfish.cn/banner',{
      params:{ type: 1}
    }).then( res =>{

      this.imglist = res.body.banners
    }),
     this.$http.get('https://autumnfish.cn/personalized',{
      params:{ limit: 21 }
    }).then( res =>{
      this.gd = res.body.result
        console.log(this.gd)
      }

    )
  }
}
</script>
<style lang="" scoped>
  .fxbox{
    width:90%;
    margin: 0 auto;
  }
  .mint-swipe {
  height: 150px;
}
.mint-swipe img {
  width: 100%;
  height: 150px;
}
.gedan{
  margin-top: 20px;
  width: 105px;
  height: 130px;
  font-size: 10px;
  position: relative;
  overflow: hidden;
}
.gedan img{
  width: 100%;
  height: 105px;
  z-index: 2;
}
.gdbox{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: space-between;
}
.gedan div{
  height: 20px;
}
.gedan div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
</style>
