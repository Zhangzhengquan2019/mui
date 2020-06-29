<template>
    <div style="text-align:center" class="lg">
      <span class="lg-name" style="font-size:20px;">欢迎登陆/注册study MUI</span>
      <div class="login">
        <div class="login-h">
          <span>用户名登陆</span>
          <span>短信验证登陆</span>
        </div>
        <div class="login-jm">
          用户名:
          <input class="login-jm-1" type="text"><br>
          密码:
           <input class="login-jm-1" type="text"><br>
           验证码
           <input style="width:40%" type="text">
           <input style="width:20%" type="text"><br>
           <input style="margin-top:20px" type="checkbox"><span style="font-size:13px">我已阅读用户协议</span>
           <button style="width:80%;background: blue;color:white;">登陆</button>
           <div style="font-size:12px;margin-top:10px">或其他登陆方式</div>
           <div class="log1">
             <div class="log-san">
               <img src="../../assets/img/timg2.jpg" alt="">
             </div>
             <div class="log-san">
                <img src="../../assets/img/timg 1.jpg" alt="">
             </div>
             <div class="log-san">
                <img src="../../assets/img/timg.jpg" alt="">
             </div>
           </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'member',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.login{
  width: 80%;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -225px;
  margin-left: -40%;
}
.lg .lg-name{
  width: 100%;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -50%;
}
.login-h{
  margin-top: 40px;
}
.login-h span{
  margin: 15px;
  font-size: 14px;
}
.login-jm{
  width: 100%;
  margin-top: 30px;
}
.login-jm-1{
  width: 60%;
  text-align: left;
}
.log-san{
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  margin: 20px;
}
.log-san img{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.log1{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
