<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://kwimg2.kuwo.cn/star/upload/13/13/1570871504173_.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://kwimg2.kuwo.cn/star/upload/10/10/1453347776330_.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://kwimg2.kuwo.cn/star/upload/4/4/1480909297444_.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9" >
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/news">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/fenxiang">
          <span class="mui-icon mui-icon-email">
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/shops">
          <span class="mui-icon mui-icon-chatbubble">
            <span class="mui-badge" v-show="this.$store.state.show">{{this.$store.state.count}}</span>
          </span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/liuyan">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/vid">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="dj">
        <router-link to="home/lianxi">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      lists: [],
      falg: ''
    }
  },
  created () {
    // this.$http.get('https://autumnfish.cn/search').then(data => {
    //   this.lists = data
    //   console.log(this.lists)
    // })
  },
  methods: {
    getlist () {

    },
    dj () {
      this.$store.commit('changes', {falg: true})
    }
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 150px;
  background-color: red;
}
.mint-swipe img {
  width: 100%;
  height: 150px;
}
.mui-grid-view.mui-grid-9{
  border-top: none;
  background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
.mui-icon .mui-badge{
  top:4px;
  margin-left: -14px;
}
</style>
