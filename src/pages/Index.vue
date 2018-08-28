<template>
  <div class="box" >
    <!-- <md-input class="input" v-model="newItem" v-on:keyup.enter="addItem" placeholder="请输入记事"> -->

     <md-field>
      <label>请记录笔记</label>
      <md-input  v-model="newItem" v-on:keyup.enter="addItem" ></md-input>
    </md-field>

     <md-list class="ul">
      <md-list-item class="li" @click="toggleFinish(item)"  v-for="(item,index ) in lists"   v-bind:key="index" >
          <span class="item" v-bind:class="{underLine:item.finish}"  >  {{item.label}} </span> <div v-show="show">{{item.finish}}</div>  
          <md-checkbox v-model="item.finish" ></md-checkbox>
      </md-list-item>
     
    </md-list>
  </div>

</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          label: "java",
          finish: true
        },
        {
          label: "c",
          finish: false
        },
        {
          label: "c++",
          finish: false
        },
        {
          label: "vue",
          finish: false
        },
        {
          label: "c1",
          finish: false
        },
        {
          label: "c+",
          finish: false
        },
        {
          label: "vuex",
          finish: false
        },
        {
          label: "c#",
          finish: false
        },
        {
          label: "js",
          finish: false
        }
      ],
      newItem: "",
      show: false
    };
  },
  methods: {
    toggleFinish(item) {
      item.finish = !item.finish;
    },
    addItem() {
      this.lists.push({
        label: this.newItem,
        finish: false
      });
    },
    visiable() {
      this.show = !this.show;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
h1,
h2 {
  font-weight: normal;
}
body {
  white-space: nowrap;
  background-color: white;
}
.md-app {
  max-height: 100%;
  height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

.ul {
  list-style-type: none;
  display: block;
}
.li {
  display: list-item;
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  align-content: stretch;
  color: black;
  font: bold;
  font-size: 14px;
}
.item {
  font: bold;
  font-size: 14px;
}
.underLine {
  text-decoration: underline;
  font: bold;
}
.input {
  border: 0;
  width: 100%;
  height: 100px;
  border-style: none;
  outline-style: none;
  border-color: aqua;
  outline-offset: 0;
  outline-color: aqua;
}
.box {
  align-content: flex-start;
  align-self: auto;
  height: 100%;
}
</style>