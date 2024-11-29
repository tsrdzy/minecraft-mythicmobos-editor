<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">属性配置</div> </template>
      <!-- 主体部分 -->
      <div>
        <div class="card">
          <h2 class="card_title">掉落类型:</h2>
          <select v-model="option" v-on:change="option_store">
            <option
              :v-if="false"
              :key="optionsx"
              v-for="optionsx in options"
              :value="optionsx.value"
            >
              {{ optionsx.label }}
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
        <div
          class="card"
          :key="option_configx"
          v-for="option_configx in option_config_1"
        >
          <h2 class="card_title">{{ option_configx[0] }}:</h2>
          <input
            type="text"
            :placeholder="option_configx[1]"
            v-model="a"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span>种类将决定该MythicMobs基于什么原版实体</span>
            </div>
          </n-popover>
        </div>
        <div
          class="card"
          :key="option_configx"
          v-for="option_configx in option_config_2"
        >
          <h2 class="card_title">{{ option_configx[0] }}:</h2>
          <select v-model="a">
            <option>true</option>
            <option>false</option>
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

        <div class="card_button">
          <button v-on:click="empty_option">清空</button>
          <button v-on:click="add_option">添加</button>
        </div>
        <div class="card_table">
          <table>
            <tr>
              <th>掉落配置</th>
              <th>操作</th>
            </tr>
            <tr
              :key="all_optionsx"
              v-for="(all_optionsx, index) in all_options"
            >
              <td>{{ all_optionsx }}</td>
              <td><button v-on:click="delete_option(index)">删除</button></td>
            </tr>
          </table>
        </div>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";

import mythicmobs_options from "@/assets/json/mythicmobs/mythicmobs_options";
export default {
  components: {
    NCollapseItem,
    NCollapse,
    NPopover,
  },
  data() {
    return {
      a: "",
      options: [],
      option: "",
      option_config_1: [],
      option_config_2: [],
      all_options: [],
    };
  },
  methods: {
    option_store() {
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].value == this.option) {
          if (this.options[i].number[0][1] == "true/false") {
            this.option_config_1 = [];
            this.option_config_2 = this.options[i].number;
          } else {
            this.option_config_2 = [];
            this.option_config_1 = this.options[i].number;
          }
        }
      }
    },
    add_option() {
      if (this.option != "" && this.option != undefined) {
        if (this.a != "" && this.a != undefined) {
          this.all_options.push(this.option + ": " + this.a);
          this.a = "";
          this.option = "";
          this.option_config_1 = [];
          this.option_config_2 = [];
          this.$store.commit("option", this.all_options);
          this.$store.commit("all1");
        } else {
          alert("请先设置属性");
        }
      }
    },
    empty_option() {
      this.all_options = [];
      this.$store.commit("option", this.all_options);
      this.$store.commit("all1");
    },
    delete_option(index) {
      this.all_options.splice(index, 1);
      this.$store.commit("option", this.all_options);
      this.$store.commit("all1");
    },
  },
  mounted() {
    this.options = mythicmobs_options;
    this.options = JSON.parse(JSON.stringify(mythicmobs_options));
    for (var i = 0; i < this.options.length; i++) {
      if (
        this.options[i].name != this.$store.state.type &&
        this.options[i].name != undefined
      ) {
        this.options.splice(i, 1);
        i = i - 1;
      }
    }
  },
  computed: {
    type() {
      return this.$store.state.type;
    },
  },
  watch: {
    type: {
      handler(new1) {
        this.options = JSON.parse(JSON.stringify(mythicmobs_options));
        for (var i = 0; i < this.options.length; i++) {
          if (
            this.options[i].name != new1 &&
            this.options[i].name != undefined
          ) {
            this.options.splice(i, 1);
            i = i - 1;
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style>
</style>