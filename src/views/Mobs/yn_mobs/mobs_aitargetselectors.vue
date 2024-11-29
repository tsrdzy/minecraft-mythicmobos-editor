<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header>
        <div style="color: white">AI目标选择器</div>
      </template>
      <!-- 主体部分 -->
      <div class="card">
        <h2 class="card_title">AI类型:</h2>
        <select
          v-model="aitargetselectors"
          v-on:change="aitargetselectors_store"
        >
          <option
            :v-if="false"
            :key="aitargetselectorssx"
            v-for="aitargetselectorssx in aitargetselectorss"
            :value="aitargetselectorssx.value"
          >
            {{ aitargetselectorssx.label }}
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
        :key="aitargetselectors_optionsx"
        v-for="(aitargetselectors_optionsx, index) in aitargetselectors_options"
      >
        <h2 class="card_title">{{ aitargetselectors_optionsx.id }}:</h2>
        <input
          type="text"
          :placeholder="aitargetselectors_optionsx.title"
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
        <button v-on:click="empty_aitargetselectors">清空</button>
        <button v-on:click="add_aitargetselectors">添加</button>
      </div>
      <div class="card_table">
        <table>
          <tr>
            <th>掉落配置</th>
            <th>操作</th>
          </tr>
          <tr
            :key="aitargetselectors_configsx"
            v-for="(
              aitargetselectors_configsx, index
            ) in aitargetselectors_configs"
          >
            <td>{{ aitargetselectors_configsx }}</td>
            <td>
              <button v-on:click="delete_aitargetselectors(index)">删除</button>
            </td>
          </tr>
        </table>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import mobs_aitargetselectors from "@/assets/json/mythicmobs/mythicmobs_aitargetselectors.json";
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
      aitargetselectorss: [],
      aitargetselectors: "",
      aitargetselectors_options: [],
      aitargetselectors_configs: [],
    };
  },
  mounted() {
    this.aitargetselectorss = mobs_aitargetselectors;
  },
  methods: {
    aitargetselectors_store() {
      for (var i = 0; i < this.aitargetselectorss.length; i++) {
        if (this.aitargetselectorss[i].value == this.aitargetselectors) {
          this.aitargetselectors_options = this.aitargetselectorss[i].property;
        }
      }
    },
    add_aitargetselectors() {
      if (this.aitargetselectors != "") {
        for (var n = 0; n < this.aitargetselectorss.length; n++) {
          if (this.aitargetselectorss[n].value == this.aitargetselectors) {
            if (this.aitargetselectorss[n].property == []) {
              this.aitargetselectors_configs.push(this.aitargetselectors);
            } else {
              this.aitargetselectors_configs.push(
                this.aitargetselectors + " " + this.a[0]
              );
            }
          }
        }
        this.$store.commit("aitargetselectors", this.aitargetselectors_configs);
        this.$store.commit("all1");
      } else {
        alert("请先选择AI类型");
      }

      this.aitargetselectors = "";
      this.a = [""];
      this.aitargetselectors_options = [];
    },
    delete_aitargetselectors(index) {
      this.aitargetselectors_configs.splice(index, 1);
      this.$store.commit("aitargetselectors", this.aitargetselectors_configs);
      this.$store.commit("all1");
    },
    empty_aitargetselectors() {
      this.aitargetselectors_configs = [];
      this.$store.commit("aitargetselectors", this.aitargetselectors_configs);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>