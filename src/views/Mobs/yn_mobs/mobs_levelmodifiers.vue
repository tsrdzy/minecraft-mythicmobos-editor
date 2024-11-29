<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header>
        <div style="color: white">等级调整</div>
      </template>
      <!-- 主体部分 -->
      <div class="card">
        <h2 class="card_title">调整类型:</h2>
        <select v-model="levelmodifiers" v-on:change="levelmodifiers_store">
          <option
            :key="levelmodifierssx"
            v-for="levelmodifierssx in levelmodifierss"
            :value="levelmodifierssx.value"
          >
            {{ levelmodifierssx.label }}
          </option>
        </select>
        <n-popover trigger="hover">
          <template #trigger>
            <div class="iconfont hint">&#xe8e9;</div>
          </template>
          <div>
            <span>种类将决定该MythicMobs基于什么原版实体</span>
          </div>
        </n-popover>
      </div>
      <div class="card" v-if="this.levelmodifiers_options_show">
        <h2 class="card_title">调整数值:</h2>
        <input type="text" placeholder="数值" v-model="a" />
        <n-popover trigger="hover">
          <template #trigger>
            <div class="iconfont hint">&#xe8e9;</div>
          </template>
          <div>
            <span>0.9表示10%免疫,0表示100%免疫  负数表示增益 1.25表示负增益</span>
          </div>
        </n-popover>
      </div>
      <div class="card_button">
        <button v-on:click="empty_levelmodifiers">清空</button>
        <button v-on:click="add_levelmodifiers">添加</button>
      </div>
      <div class="card_table">
        <table>
          <tr>
            <th>掉落配置</th>
            <th>操作</th>
          </tr>
          <tr
            :key="levelmodifiers_configsx"
            v-for="(levelmodifiers_configsx, index) in levelmodifiers_configs"
          >
            <td>{{ levelmodifiers_configsx }}</td>
            <td>
              <button v-on:click="delete_levelmodifiers(index)">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import mobs_levelmodifiers from "@/assets/json/mythicmobs/mythicmobs_levelmodifiers.json";
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
      levelmodifierss: [],
      levelmodifiers: "",
      levelmodifiers_options_show: false,
      levelmodifiers_configs: [],
    };
  },
  mounted() {
    this.levelmodifierss = mobs_levelmodifiers;
  },
  methods: {
    levelmodifiers_store() {
      this.levelmodifiers_options_show = true;
    },
    add_levelmodifiers() {
      this.levelmodifiers_options_show = false;
      this.levelmodifiers_configs.push(this.levelmodifiers + ": " + this.a);
      this.a = "";
      this.levelmodifiers = "";
      this.levelmodifiers_options_show = false;
      this.$store.commit("levelmodifiers", this.levelmodifiers_configs);
      this.$store.commit("all1");
    },
    delete_levelmodifiers(index) {
      this.levelmodifiers_configs.splice(index, 1);
      this.$store.commit("levelmodifiers", this.levelmodifiers_configs);
      this.$store.commit("all1");
    },
    empty_levelmodifiers() {
      this.levelmodifiers_configs = [];
      this.$store.commit("levelmodifiers", this.levelmodifiers_configs);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>