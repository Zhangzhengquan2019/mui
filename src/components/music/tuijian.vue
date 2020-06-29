<template>
  <div class="b">
     <div class="gdbox"  >
      <div class="gedan" v-for="(item,index) in lists" :key="index">
        <div style="width:110px;height:110px">
          <img :src="item.picUrl" alt="" @click="play(item.id)"></div>
        <div>
          <span style="font-size:12px">{{item.name}}</span><br>
          <span style="display:block;color:chocolate;font-size:10px">{{item.song.artists[0].name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
console.log(this.$route)
export default {
  name: 'tuijian',
  data () {
    return {
      lists:[],
      curl: ''
    }
  },
  created(){
    this.$http.get('https://autumnfish.cn/personalized/newsong').then( res =>{
      // console.log(res)
      this.lists = res.body.result
    })
  },
  methods: {
    play(id){
      this.$http.get("https://autumnfish.cn/song/url", {params: { id }
        }).then(res=>{
          this.curl = res.body.data[0].url
          console.log(this.curl)
         this.$store.commit('playurl',{url: this.curl})
        })
    }
  }
}
</script>
<style lang="" scoped>
.gedan{
  width: 50%;
  height: 130px;
  font-size: 10px;
  display: flex;
  align-items: center;
}
.gedan img{
  width: 95px;
  height: 95px;
}
.gdbox{
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: space-between;
}
.b{
  width: 90%;
  margin: 0 auto;
}
</style>
