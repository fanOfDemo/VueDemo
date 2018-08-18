<template>
  <div id="app" class="app">
    <!--可以定义不变的内容-->
   
    <!-- router-link 定义点击后导航到哪个路径下 -->
  <head>

  </head>
  <img src="./assets/logo.png">
  <h1>
   <strong class="tabLayout">{{title}}</strong>
  </h1>
    
  
       <div class="tabLayout" >
         
        <div class="tab"  v-on:click='chooseMe(1)'> 首页</div>
        <div class="tab" v-on:click='chooseMe(2)'>关于</div>
        <div class="tab" v-on:click='chooseMe(2)'>关于</div>
        <div class="tab" v-on:click='chooseMe(3)'>出错</div>
       </div>
      
  
      <router-view v-on:index="chooseMe" class="pages">
       
      </router-view>
      
  </div>
</template>

<script>
import router from "@/router"; //引入管理router的js文件
export default {
  data() {
    return {
      title:'vuedemo'
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
    }
  }
};
</script>
<style>
pages {
  font-weight: normal;
  max-width: true;
   flex-direction: column;
}
.app {
  color: #ffffff;
  width: 100%;
  text-align: center;

}
.tabLayout {
  color: #42b983 ;
  width: 100%;
  background: #fff;
  text-align: center;
  display:flex;
  flex-direction: row;
  justify-content: center;

}
.tab {
    background: #ffffff;
    color: black;
    border: 2px solid #ffffff;
    height: 4rem;
     width: 100%;
    align-content: center;
    text-align: center;
    align-self: auto;
    align-items: top;
    font-weight: bold;
    
}

</style>
