<template>
  <h2>展示区域:</h2>
  <div contenteditable="true">
    {{ this.$store.state.configfile }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: "",
      config_word1:"",

    };
  },
  methods:{
  },
};
</script>

<style lang="less" scoped>
h2 {
  margin-bottom: 16px;
}
div {
  max-width: 100%;
  min-height: 28px;
  line-height: 28px;
  border: 1px solid #ccc;
  overflow-x: scroll;
  overflow-y: hidden;
  border-radius: 5px;
  outline-style: none;
  padding: 2px;
  flex-grow: 1;
  font-size: 16px;
  font-family: "opposans";
  white-space: pre-line;
  white-space: pre;
}
div::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}
/*正常情况下滑块的样式*/
div::-webkit-scrollbar-thumb {
  background-color: rgba(110, 110, 110, 0.5);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/
div:hover::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/
div::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/
div::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: rgb(80, 80, 80);
}
/*鼠标悬浮在滚动条上的主干部分*/
div::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(120, 120, 120, 0.5);
}
</style>