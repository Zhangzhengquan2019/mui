<template>
  <div class="b">
    <div class="vw" v-for="(item,index) in mvlist" :key="index" >
      <div class="mv">
        <div class="playcount">
        <i style="" class="iconfont icon-guankan"></i>
        <span style="font-size:14px">{{item.playCount}}</span>
      </div>

      <i style="font-size:50px" class="iconfont icon-bofang1" @click="play(item.id,index)"></i>
      <img :src="item.picUrl">
      <div class="jj">
        演唱:
        <span>{{item.artistName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        歌名:
        <span>{{item.name}}</span>
      </div>
      <video class="vd" :src="mvurl" autoplay controls v-if="activeindex===index? true : false " :style="{'z-index':activeindex===index?'0':'-1'}" ></video>
      </div>
    </div>
  </div>
</template>
<script>
console.log(this.$route)
export default {
  name: 'mv',
  data () {
    return {
      mvlist: [],
      activeindex: '',
      mvurl: ''
      // mvshow: false
    }
  },
  created () {
    this.$http.get('https://autumnfish.cn/personalized/mv')
      .then(res => {
        this.mvlist = res.body.result
        console.log(res)
      })
  },
  methods: {
    play (id, i) {
      console.log(id)
      this.$http.get('https://autumnfish.cn/mv/url', {params: {id}})
        .then( res => {
          console.log(res)
          this.mvurl = res.body.data.url
          this.activeindex = i
          console.log(this.activeindex)
        })
    }
  }
}
</script>
<style lang="" scoped>
  .b{
    width: 95%;
    margin:0 auto;
  }
  .mv:first-child{
    margin-top: 40px;
  }
  .mv{
    margin-bottom: -30px;
  }
  .vw{
    width: 100%;
    position: relative;
  }
  .vw .mv img{
    width: 100%;
    height: 200px;
  }
  .icon-bofang1{
    position: absolute;
    left: 50%;
    margin-top: 80px;
    margin-left: -20px;
    color: white;
  }
  .playcount{
    position: absolute;
    top: 10px;
    right: 20px;
    color: white;
  }
  .jj{
    font-size: 14px;
  }
  .vd{
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
  }
</style>
