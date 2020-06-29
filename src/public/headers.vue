<template>
  <div>
    <mt-header fixed title="study MUI">
      <router-link to="/home" slot="left" v-show="this.$store.state.all.falg">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: 'headers',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.go(-1)
      this.$store.commit('changes', {falg: false})
    }
  }
}
</script>
<style scoped>

</style>
