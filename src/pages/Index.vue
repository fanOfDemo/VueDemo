<template>
  <div class="a">
    <div class="register-l" align="center">
       <br />
				<div class="input-group" style="width: 300px;">
					<input type="text" class="form-control" placeholder="邮箱/手机号/用户名" style="height: 40px;" />
					<span class="glyphicon glyphicon-user form-control-feedback" aria-hidden="true" />
				</div>
				<br />
				<div class="input-group" style="width: 300px;">
					<input type="text" class="form-control" placeholder="密码" style="height: 40px;" />
					<span class="glyphicon glyphicon-lock form-control-feedback" />
				</div>
				<br />
				<div class="input-group" style="width: 300px;">
					<input type="text" class="form-control" placeholder="手机号" style="height: 40px;" />
					<span class="glyphicon glyphicon-phone form-control-feedback" />
				</div>
				<br />
				<div class="input-group" style="width: 300px;">
          	<input type="text" class="form-control" placeholder="验证码" style=" height: 40px; width: 150px;" />
						<div class="register-msg-btn" v-show="show" v-on:click="getCode">发送验证码</div>
						<span class="register-msg-btn" v-show="!show">{{count}} s</span>
				
					<span class="glyphicon glyphicon-font form-control-feedback" />
				</div>
				<br />
        <br />
				<button class="btn-register">注册</button>

    </div>
   
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
      title:'sd',
      show: true,    
			count: '',    
			timer: null, 
    };
  },
  methods: {
    // 根据选择的按钮进行页面跳转 或者 按钮颜色变换
    chooseMe: function(i) {
      switch (i) { //判断选择哪一个路由
        case 1:
          router.push("/index");
          break;
        case 2:
          router.push("/about");
          break;
        case 3:
          router.push("/404");
          break;
      }
    },
    getCode(){      
				const TIME_COUNT = 60;      
				if (!this.timer) {        
					this.count = TIME_COUNT;        
					this.show = false;        
					this.timer = setInterval(() => {        
						if (this.count > 0 && this.count <= TIME_COUNT) {          
							this.count--;         
						} else {          
							this.show = true;          
							clearInterval(this.timer);          
							this.timer = null;         
						}        
					}, 1000)       
				}    
			}  
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.ul {
  list-style-type: none;
  padding: 0;
  float: left;
}
.li {
  display: inline-block;
  margin: 0 10px;
}
.a {
  align-content: center;
 
  background-color: #ffffff;
  display: inline-block;
  font-weight: normal;
  color: #42b983;
  font-weight: bold;
}
 input:focus{ 
  background-color:#fff;
  border-style: solid;
  border-width: 2px;
  border-color: #42b983;
}
.form-control {
  color: #42b983;
  font-size: 1.6rem;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  outline-style: none;
	outline-width: 0 ;
  outline-color: transparent;
  float:left;
 
}
.register-l{
   width: 100%;
}
.input-group{
    display: flex;
    flex-flow: row;
    border-radius: 5px;
    border: 2px solid #ffffff;
    background: #ffffff;
    color: #42b983;
    
}
.register-msg-btn {
    border-radius: 5px;
    padding-block-end: 1rem;
    border: 2px solid #ffffff;
    background: #ffffff;
    color: #42b983;
    align-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
}
.btn-register {
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  background: #42b983;
  border-radius: 5px;
  border: 2px solid #42b983;
}

</style>
