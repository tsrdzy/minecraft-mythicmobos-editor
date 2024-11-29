<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header>
        <div style="color: white">AI行动选择器</div>
      </template>
      <!-- 主体部分 -->
      <div class="card">
        <h2 class="card_title">AI类型:</h2>
        <select v-model="aigoalselectors" v-on:change="aigoalselectors_store">
          <option
            :v-if="false"
            :key="aigoalselectorssx"
            v-for="aigoalselectorssx in aigoalselectorss"
            :value="aigoalselectorssx.value"
          >
            {{ aigoalselectorssx.label }}
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
        :key="aigoalselectors_optionsx"
        v-for="(aigoalselectors_optionsx, index) in aigoalselectors_options"
      >
        <h2 class="card_title">{{ aigoalselectors_optionsx.id }}:</h2>
        <input
          type="text"
          :placeholder="aigoalselectors_optionsx.title"
          v-model="a[index]"
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
      <div class="card_button">
        <button v-on:click="empty_aigoalselectors">清空</button>
        <button v-on:click="add_aigoalselectors">添加</button>
      </div>
      <div class="card_table">
        <table>
          <tr>
            <th>掉落配置</th>
            <th>操作</th>
          </tr>
          <tr
            :key="aigoalselectors_configsx"
            v-for="(aigoalselectors_configsx, index) in aigoalselectors_configs"
          >
            <td>{{ aigoalselectors_configsx }}</td>
            <td>
              <button v-on:click="delete_aigoalselectors(index)">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import mobs_aigoalselectors from "@/assets/json/mythicmobs/mythicmobs_aigoalselectors.json";
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";

export default {
  components: {
    NCollapseItem,
    NCollapse,
    NPopover,
  },
  data() {
    return {
      a: ["", "", "", "", "", "", "", "", "", "", ""],
      aigoalselectorss: [],
      aigoalselectors: "",
      aigoalselectors_options: [],
      aigoalselectors_configs: [],
    };
  },
  mounted() {
    this.aigoalselectorss = mobs_aigoalselectors;
  },
  methods: {
    aigoalselectors_store() {
      for (var i = 0; i < this.aigoalselectorss.length; i++) {
        if (this.aigoalselectorss[i].value == this.aigoalselectors) {
          this.aigoalselectors_options = this.aigoalselectorss[i].property;
        }
      }
    },
    add_aigoalselectors() {
      if (this.aigoalselectors != "") {
        var yy = "";
        for (var n = 0; n < this.aigoalselectorss.length; n++) {
          if (this.aigoalselectorss[n].value == this.aigoalselectors) {
            if (this.aigoalselectorss[n].property == []) {
              this.aigoalselectors_configs.push(this.aigoalselectors);
            } else {
              for (
                var x = 0;
                x < this.aigoalselectorss[n].property.length;
                x++
              ) {
                if (this.a[x] != "") {
                  yy =
                    yy +
                    this.aigoalselectorss[n].property[x].name +
                    "=" +
                    this.a[x] +
                    ";";
                }
              }
              if (yy != "") {
                if (
                  this.aigoalselectorss[n].value == "distance" ||
                  this.aigoalselectorss[n].value == "speed" ||
                  this.aigoalselectorss[n].value == "safespeed"
                ) {
                  if (yy.charAt(yy.length - 1) == ";") {
                    yy = yy.slice(0, yy.length - 1);
                    //删除最后一个;
                  }
                  this.aigoalselectors_configs.push(this.aigoalselectors + yy);
                } else if (
                  this.aigoalselectorss[n].value == "patrol" ||
                  this.aigoalselectorss[n].value == "gotolocation"
                ) {
                  this.aigoalselectors_configs.push(
                    (this.aigoalselectors + yy)
                      .replace("=", " ")
                      .replace("(", "")
                      .replace(")", "")
                  );
                } else {
                  if (yy.charAt(yy.length - 1) == ";") {
                    yy = yy.slice(0, yy.length - 1);
                    //删除最后一个;
                  }
                  this.aigoalselectors_configs.push(
                    this.aigoalselectors + "{" + yy + "}"
                  );
                }
              } else {
                this.aigoalselectors_configs.push(this.aigoalselectors);
              }
            }
          }
        }
        this.$store.commit("aigoalselectors", this.aigoalselectors_configs);
        this.$store.commit("all1");
      } else {
        alert("请先选择AI类型");
      }
      this.aigoalselectors = "";
      this.a = ["", "", "", "", "", "", "", "", "", "", ""];
      this.aigoalselectors_options = [];
      this.all_options = [];
    },
    delete_aigoalselectors(index) {
      this.aigoalselectors_configs.splice(index, 1);
      this.$store.commit("aigoalselectors", this.aigoalselectors_configs);
      this.$store.commit("all1");
    },
    empty_aigoalselectors() {
      this.aigoalselectors_configs = [];
      this.$store.commit("aigoalselectors", this.aigoalselectors_configs);
      this.$store.commit("all1");
    },
  },

};
</script>

<style>
</style>