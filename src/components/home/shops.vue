<template>
  <div>
    <ul>
      <li>
        <button @click="subs">-</button>
        <span>{{this.$store.state.count}}</span>
        <transition>
          <button @click="adds">+</button>
          </transition>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'shops',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    adds () {
      this.$store.commit('add')
      //  localStorage.setItem('shu',JSON.stringify(this.count))
    },
    subs () {
      this.$store.commit('sub')
      // localStorage.setItem('shu',JSON.stringify(this.count))
    },
    created () {
      // this.count = localStorage.getItem(state.all.count);
      // console.log(this.count);
    }
  }
}
</script>
<style lang="" scoped>
button {
  margin: 10px;
}
span {
  padding-top: 10px;
}
ul{
  margin-top: 60px;
}
.v-enter,
.v-leave-to{
  opacity: 0;
}
</style>
