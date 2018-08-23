<template>
  
   <div class="page-container">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">  {{title}}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" v-on:click='chooseMe(1)' md-label="Home"></md-tab>
            <md-tab id="tab-pages" v-on:click='chooseMe(2)' md-label="Pages"></md-tab>
            <md-tab id="tab-posts" v-on:click='chooseMe(3)'  md-label="Posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible"  class="drawer">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="pages">
           <router-view v-on:index="chooseMe" >   </router-view>
      </md-app-content>
    </md-app> 
  </div>
</template>

<script>
import router from "@/router"; //引入管理router的js文件

export default {
  name: "LastRowFixed",
  data() {
    return {
      title: "首页",
      menuVisible: false
    };
  },
  methods: {
    // 根据选择的按钮进行页面跳转 或者 按钮颜色变换
    chooseMe: function(i) {
      switch (i) { //判断选择哪一个路由
        case 1:
          router.push("/index");
          this.title = "首页";
          break;
        case 2:
          router.push("/about");
          this.title = "关于";
          break;
        case 3:
          router.push("/404");
          this.title = "页面找不到了";
          break;
      }
    }
  }
};
</script>
<style lang="scss">
.md-app {
  max-height: 2000px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.page-container {
  height: 100%;
  width: 100%;
}
.md-transparent {
  background-color: white;
}

.drawer {
  background-color: white;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>