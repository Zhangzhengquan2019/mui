<template>
  <div id="app">
    <headers></headers>
    <transition>
       <router-view class="box"/>
    </transition>
      <span></span>
     <audio :src="this.$store.state.url.url" :class='actives' autoplay loop controls="controls">
       打撒打撒阿萨
     </audio>
    <tabbar></tabbar>
  </div>
</template>

<script>
import headers from './public/headers'
import tabbar from './public/tabbar'
export default {
  data () {
    return {
      showurl: '',
      actives: 'audio'
    }
  },
  name: 'App',
  components: {
    headers,
    tabbar
  },
  created () {
    if (!window.localStorage) {
      alert('浏览器支持localstorage')
      return false
    } else {
      var storage = window.localStorage
      var a = storage.a
      this.showurl = a
      console.log(a)
      this.$store.commit('playurl', {url: storage.a})
    }
  },
  watch: {
    $route (to, from) {
      this.url = this.$route.path
      console.log(this.url)
      if (this.url === '/music/search') {
        this.actives = 'audios'
      } else {
        this.actives = 'audio'
        console.log(this.actives)
      }
    }
  }
}
</script>
<style>
@import './MUI-style/dist/css/mui.min.css';
@import './MUI-style/dist/css/icons-extra.css';
/* #app{
  position: relative;
} */
.box{
  width: 100%;
  position: absolute;
  top: 40px;
  bottom: 50.4px;
  overflow: auto;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity:1;
  transform: translateX(-100%)
}
.audio{
  width: 100%;
  border-radius: 0;
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 50.4px;
  z-index: -2;
}
.audios{
  width: 100%;
  border-radius: 0;
  position: absolute;
  left: 0;
  bottom: 50.4px;
  z-index: 0;
}
</style>
