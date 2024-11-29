<template>
  <Header></Header>
  <ul class="nav">
    <li>
      <router-link to="/mobs"
        ><span class="iconfont">&#xeca6;</span>生物编辑器</router-link
      >
    </li>
    <li>
      <router-link to="/items"
        ><span class="iconfont">&#xf0a8;</span>物品编辑器</router-link
      >
    </li>
    <li>
      <router-link to="/skills"
        ><span class="iconfont">&#xe601;</span>技能编辑器</router-link
      >
    </li>
    <li>
      <router-link to="/spawners"
        ><span class="iconfont">&#xef4d;</span>刷怪点编辑器</router-link
      >
    </li>
    <li>
      <router-link to="/droptables"
        ><span class="iconfont">&#xe607;</span>掉落表编辑器</router-link
      >
    </li>
  </ul>
  <hr class="title_hr">
  <router-view></router-view>
  <hr />
  <Footer></Footer>
</template>

<script>
import "./assets/font/font.css";
import "./assets/globalcss/base.css";
import "./assets/font/fonticon/iconfont.css";
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less">
.title_hr {
  max-width: 1200px;
  margin: 0 auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0.178),
    rgba(255, 255, 255, 0)
  );
}
.nav {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  // margin: 10px;
  li {
    width: auto;
    height: 30px;
    margin: 10px;
    line-height: 30px;
    overflow: hidden;
    a {
      color: #bbb;
    }
    a:hover {
      color: #ddd;
    }
  }
}
body::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}
/*正常情况下滑块的样式*/
body::-webkit-scrollbar-thumb {
  background-color: rgba(110, 110, 110, 0.5);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/
body:hover::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/
body::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/
body::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: rgb(80, 80, 80);
}
/*鼠标悬浮在滚动条上的主干部分*/
body::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(120, 120, 120, 0.5);
}


</style>
