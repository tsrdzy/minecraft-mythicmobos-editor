<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header>
        <div style="color: white">伤害调整</div>
      </template>
      <!-- 主体部分 -->
      <div class="card">
        <h2 class="card_title">调整类型:</h2>
        <select v-model="damagemodifiers" v-on:change="damagemodifiers_store">
          <option
            :key="damagemodifierssx"
            v-for="damagemodifierssx in damagemodifierss"
            :value="damagemodifierssx.value"
          >
            {{ damagemodifierssx.label }}
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
      <div class="card" v-if="this.damagemodifiers_options_show">
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
        <button v-on:click="empty_damagemodifiers">清空</button>
        <button v-on:click="add_damagemodifiers">添加</button>
      </div>
      <div class="card_table">
        <table>
          <tr>
            <th>掉落配置</th>
            <th>操作</th>
          </tr>
          <tr
            :key="damagemodifiers_configsx"
            v-for="(damagemodifiers_configsx, index) in damagemodifiers_configs"
          >
            <td>{{ damagemodifiers_configsx }}</td>
            <td>
              <button v-on:click="delete_damagemodifiers(index)">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import mobs_damagemodifiers from "@/assets/json/mythicmobs/mythicmobs_damagemodifiers.json";
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
      damagemodifierss: [],
      damagemodifiers: "",
      damagemodifiers_options_show: false,
      damagemodifiers_configs: [],
    };
  },
  mounted() {
    this.damagemodifierss = mobs_damagemodifiers;
  },
  methods: {
    damagemodifiers_store() {
      this.damagemodifiers_options_show = true;
    },
    add_damagemodifiers() {
      this.damagemodifiers_options_show = false;
      this.damagemodifiers_configs.push(this.damagemodifiers + " " + this.a);
      this.a = "";
      this.damagemodifiers = "";
      this.damagemodifiers_options_show = false;
      this.$store.commit("damagemodifiers", this.damagemodifiers_configs);
      this.$store.commit("all1");
    },
    delete_damagemodifiers(index) {
      this.damagemodifiers_configs.splice(index, 1);
      this.$store.commit("damagemodifiers", this.damagemodifiers_configs);
      this.$store.commit("all1");
    },
    empty_damagemodifiers() {
      this.damagemodifiers_configs = [];
      this.$store.commit("damagemodifiers", this.damagemodifiers_configs);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>