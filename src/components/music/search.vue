<template>
  <div class="bg">
    <div class="search_1">
      <span
        style="color: #2e3a1f;width:300px; margin-top:20px;display: inline-block;text-align:center;font-size:25px"
      >搜索音乐</span>
      <input class="input" v-model="value" type="text" @keyup.enter="searchEnterFun"/>
      <button class="btn1" @click="search" v-show="this.issearch">搜索</button>
      <button class="btn1" v-show="this.isshow" @click="quxiao">取消</button>
    </div>
    <div class="songlist">
        <!-- <ul>
          <li v-for="(item,index) in lists" :key="index" @click="play(item.id)">{{item.name}}</li>
        </ul> -->
    </div>
    <div class="geci">
     <ul>
        <li style="width:96%" v-for="(item,index) in lists2" :key="index" @click="play(item.id)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data () {
    return {
      lists: [],
      lists2: [],
      value: '',
      isshow: false,
      issearch: true,
      showurl: '',
      geci: '',
      songname: ''
    }
  },
  methods: {
    search () {
      this.$http
        .get("https://autumnfish.cn/search", {
          params: { keywords: this.value }
        })
        .then(res => {
          this.lists2 = res.body.result.songs
          this.isshow = !false
          this.issearch = !true
        })
        .catch(error => {
          console.log(error)
        })
    },
    // search2 () {
    //   this.$http.get('https://autumnfish.cn/search',{params:{keywords: this.value}})
    //     .then( res => {
    //       this.lists2 = res.body.result.songs
    //       this.lists2 = ''
    //   })
    // },
    quxiao () {
      this.issearch = true
      this.isshow = false
      this.value = ''
      this.lists2 = ''
    },
    play (id) {
      this.$http.get('https://autumnfish.cn/song/url',{ params: { id }}).then(res => {
          this.showurl = res.body.data[0].url
          console.log(this.showurl)
          if (!window.localStorage) {
              alert('浏览器支持localstorage')
              return false
            } else {
              var storage = window.localStorage
              storage.a = this.showurl
              this.$store.commit('playurl',{url: storage.a})
            }
        })
        .catch(error => {
          console.log(error)
        }),
        this.value = ''
        this.$http
        .get('https://autumnfish.cn/lyric', {
          params: { id }
        })
        .then(res => {
          this.geci = res.bodyText
          //  console.log(res)
          console.log(this.geci)
        })
        .catch(error => {
          console.log(error)
        })
    },
    searchEnterFun (e) {
      var keyCode = window.event ? e.keyCode : e.which
      if (keyCode === 13) {
        this.lists2 = this.lists
        this.lists = ''
      }
    }

  },
  watch: {
    value (newv) {
      if (newv === '') {
        this.lists = ''
        this.issearch = true
        this.isshow = false
      } else {
        this.$http
          .get("https://autumnfish.cn/search", {
            params: { keywords: this.value }
          })
          .then(res => {
            this.lists = res.body.result.songs
            console.log(this.lists)
            this.isshow = !false
            this.issearch = !true
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  // $route (to, from) {
  //   console.log(to.from)
  // }
}
</script>
<style scoped>
.bg{
  background: url('../../assets/img/bg.jpg');
  background-size: 100% 100%;
  margin: 0px;
  width: 100%;
}
.box{
  margin-top: -10px;
}
.input {
  width: 80%;
  text-align: center;
  margin: 0;
  margin-top: 10px;
}
.btn1 {
  height: 40px;
  margin: 0;
  border-left: 1px solid white;
  margin-left: -5px;
  margin-top: 10px;
}
.search_1 {
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  z-index: 100;
}
.songlist {
  width: 240px;
  height: 300px;
  padding: 0;
  margin-left: 37px;
  overflow: auto;
  z-index: -1;
}
ul > li {
  list-style: none;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  line-height: 40px;
  font-size: 12px;
  margin-left: -12px;
  padding-left: 12px;
}
.songlist ul,
li {
  padding: 0;
  margin: 0;
}
.geci{
  width: 100%;
  height: 383px;
  position: absolute;
  top: 123px;
  z-index: 100;
  overflow: auto;
  overflow-y:scroll;
  margin-top: 24px;

}
</style>
