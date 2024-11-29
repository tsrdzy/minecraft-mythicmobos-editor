<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header>
        <div style="color: white">击杀信息</div>
      </template>
      <!-- 主体部分 -->
      <div class="card">
        <h2 class="card_title">击杀信息:</h2>
        <textarea
          placeholder="一行一条击杀信息"
          rows="5"
          cols="10"
          style="resize: none"
          v-model="a"
          v-on:input="killmessages_option"
        ></textarea>
        <n-popover trigger="hover">
          <template #trigger>
            <div class="iconfont hint">&#xe8e9;</div>
          </template>
          <div>
            <span>击杀信息支持 占位符与变量</span>
            <br />
            <span>config.yml内可修改击杀信息前缀(KillMessagePrefix)</span><br />
            <span>前缀内容不支持 占位符与变量 但可作用于全部击杀信息</span>
          </div>
        </n-popover>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";
export default {
  components: {
    NCollapseItem,
    NCollapse,
    NPopover,
  },
  data() {
    return {
      a: "",
    };
  },
  methods: {
    killmessages_option() {
      this.$store.commit("killmessages", this.a);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>