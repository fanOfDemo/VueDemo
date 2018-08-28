<template>
  <div class="page-container">
   <md-list v-for="(item,index) in lists" v-bind:key="index">
    <md-list-item >
      <md-card class="card">
          <md-card-media>

            <img v-if="item.has_image=='true'" :src='require(item.middle_image.url)' >
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{item.title}}</div>
            <div class="md-subhead">{{item.verified_content}}</div>
          </md-card-header>

          <md-card-actions>
            <md-button @click="go(item.article_url)">阅读</md-button>
            <br>
          </md-card-actions>

          <md-card-content>
           正文： {{item.abstract}} 
           
           
          是否有图片：{{item.has_image}} 
          {{ item.middle_image.url}}
          
            </md-card-content>
      </md-card>
    </md-list-item >

   </md-list>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.card {
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
</style>

<script>
export default {
  name: "LastRowFixed",
  data: () => ({
    menuVisible: false,
    lists: [],
    url: "gp/api/news/feed/v51/"
  }),
  methods: {
    getList() {
      console.log(this.url);
      let that = this;
      this.$http
        .post(this.url)
        .then(function(sures) {
          console.log(sures);
          var json = JSON.stringify(sures);
          var obj = JSON.parse(json);
          obj.data.data.forEach((item, index) => {
            that.$set(that.lists, index, JSON.parse(item.content));
            var content = JSON.parse(item.content);
             console.log("content: " + JSON.stringify(content) );
            console.log("\nITEM: " + content.abstract);
          });
        })
        .catch(function(catchres) {
          console.log(catchres);
          console.log("失败");
        });
    },
    go(url) {
      window.open(url);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>