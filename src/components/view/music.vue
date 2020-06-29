<template>
  <div>
    <!-- <router-link to="../music/search">
         <span>搜索</span>
    </router-link> -->
    <div class="headerbox" >
      <div>
        <ul>
        <li :class='actives==index?"active":""' v-for="(item,index) in fenlei"
        @click="change(index)" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      fenlei: ['发现音乐', '推荐歌单', '最新音乐', '最新MV', '搜索'],
      actives: 0
    }
  },
  components: {

  },
  methods: {
    change (index) {
      this.actives = index
      if (this.actives === 4) {
        this.$router.push('../music/search')
        this.$store.commit('changes', {falg: true})
      }else if(this.actives===1){
        this.$router.push('../music/tuijian')
      }else if(this.actives===2){
        this.$router.push('../music/newsm1')
      }else if(this.actives===3){
        this.$router.push('../music/mv')
      }else if(this.actives===0){
        this.$router.push('../music/faxian')
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  ul>li{
    list-style: none;
    float: left;
    text-align: center;
    margin-left: 20px;
    font-size: 14px;
  }
  .headerbox div ul{
    height: 100%;
    line-height: 40px;
    display: table;
    margin: 0 auto;
    text-align: center;
  }
  .headerbox div ul>li:first-child{
    margin-left: 0;
  }
  .headerbox{
    width: 100%;
    height: 40px;
    position: fixed;
    top:40px;
    left: 0;
    z-index: 99;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active{
    color: rgb(68, 0, 255);
  }
</style>
