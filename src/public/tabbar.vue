<template>
    <div>
        <nav class="mui-bar mui-bar-tab" @click="back">
			    <router-link tag="a" class="mui-tab-item" to="/home" >
				    <span class="mui-icon mui-icon-home"></span>
				    <span class="mui-tab-label" >首页</span>
          </router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" v-show="this.$store.state.show">{{this.$store.state.count}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/music">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">音乐</span>
			</router-link>
		    </nav>
    </div>
</template>
<script>
export default {
  name:"tabbar",
  data() {
    return {

    }
  },
  methods:{
    back(){
      this.$store.commit('changes',{falg:false})
    }
  }
}
</script>
<style scoped>

</style>
