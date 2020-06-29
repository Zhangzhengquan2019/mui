<template>
  <div class="b">
    <div class="hearders">
     <div class="img1">
       <img src="" alt="">
     </div>
     <div class="js">
       <span style="margin-top:10px">名称</span><br>
       <span>介绍</span>
     </div>
    </div>
  </div>
</template>
<script>
console.log(this.$route)
export default {
  name: 'newsm1',
  data () {
    return {

    }
  }
}
</script>
<style lang="" scoped>
  .b{
   width: 100%;
   height: 100%;
   position: absolute;
   top: 40px;
   bottom: 40px;
   overflow: auto;
  }
  .hearders{
    width: 95%;
    height: 130px;
    background-color: red;
    margin: 0 auto;
    position: relative;
  }
  .img1{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    margin-left: 15px;
  }
  .js{
    width: 221.44px;
    height: 100px;
    background-color: pink;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    margin-left: 120px;
  }
</style>
