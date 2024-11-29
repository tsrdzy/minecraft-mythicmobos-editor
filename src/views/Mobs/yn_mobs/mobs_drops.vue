<template>
  <div>
    <n-collapse>
      <n-collapse-item title="生物掉落">
        <!-- 外观设置 -->
        <template #arrow>
          <div style="color: #fff" class="iconfont">&#xe65f;</div>
        </template>
        <template #header>
          <div style="color: #fff; font-size: 16px">生物掉落</div>
        </template>
        <!-- 具体内容 -->
        <div>
          <div class="mobs_card">
            <h2>掉落类型:</h2>
            <n-select
              v-model:value="drop"
              :options="dropstype"
              v-on:updata="drops"
              placeholder="掉落类型"
            />
            <div class="hint iconfont">
              <n-popover trigger="hover">
                <template #trigger>
                  <div class="hint_font">&#xe8e9;</div>
                </template>
                <span>1</span>
              </n-popover>
            </div>
          </div>
          <div>
            <div
              class="mobs_card"
              :key="dropt"
              v-for="(dropt, index) in dropsumber"
            >
              <h2>{{ dropt.name }}:</h2>
              <n-input
                type="text"
                :placeholder="dropt.name"
                v-model:value="an[index]"
              />
              <div class="hint iconfont">
                <n-popover trigger="hover">
                  <template #trigger>
                    <div class="hint_font">&#xe8e9;</div>
                  </template>
                  <span>1</span>
                </n-popover>
              </div>
            </div>
          </div>
          <div class="all_button">
            <button class="button" v-on:click="empty_drops">清空</button
            ><button class="button" v-on:click="add_drop">添加</button>
          </div>
          <div class="all_table">
            <table class="table">
              <tr>
                <th class="table_left">掉落配置</th>
                <th class="table_right">选项</th>
              </tr>
              <tr :key="all_drops1" v-for="(all_drops1, input) in all_drops">
                <td>{{ all_drops1 }}</td>
                <td>
                  <button v-on:click="delete_drops(input)">删除</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
import { NPopover, NInput, NSelect, NCollapse, NCollapseItem } from "naive-ui";
import mythicmobs_DropsTypes from "@/assets/json/mythicmobs/mythicmobs_DropsTypes.json";

export default {
  data() {
    return {
      an: ["", "", "", ""],
      drop: null,
      dropstype: [],
      dropsumber: [],
      droptype: "",
      all_drops: [],
    };
  },
  components: {
    NPopover,
    NInput,
    NSelect,
    NCollapse,
    NCollapseItem,
  },
  methods: {
    drops() {
      this.an = ["", "", "", ""];
      if (
        this.drop == "skillapi-exp" ||
        this.drop == "mcmmo-exp" ||
        this.drop == "exp" ||
        this.drop == "money"
      ) {
        this.dropsumber = [{ name: "掉落数量" }, { name: "掉落几率" }];
      }
      if (this.drop == "oraxen" || this.drop == "phatloot") {
        this.dropsumber = [
          { name: "掉落名称" },
          { name: "掉落数量" },
          { name: "掉落几率" },
        ];
      }
      if (this.drop == "cmd") {
        this.dropsumber = [{ name: "后台指令" }];
      }
      if (this.drop == "mmoitems") {
        this.dropsumber = [
          { name: "掉落类型" },
          { name: "掉落ID" },
          { name: "掉落数量" },
          { name: "掉落几率" },
        ];
      }
      if (this.drop == "掉落表") {
        this.dropsumber = [{ name: "掉落表名" }];
      }
      if (this.drop == "ItemsAdder") {
        this.dropsumber = [{ name: "空间命名" }, { name: "内部命名" }];
      }
      if (this.drop == "mythicdrop") {
        this.dropsumber = [
          { name: "物品标签" },
          { name: "物品数量" },
          { name: "掉落几率" },
        ];
      }
      if (this.drop == "mythicmob") {
        this.dropsumber = [
          { name: "实体标签" },
          { name: "实体数量" },
          { name: "生成几率" },
        ];
      }
    },
    config_drops() {
      this.$store.commit("drop", this.all_drops);
      this.$store.commit("all1");

    },
    add_drop() {
      if (this.drop != null) {
        if (this.drop == "skillapi-exp") {
          this.all_drops.push(
            "- skillapi-exp " + this.an[0] + " " + this.an[1]
          );
        } else if (this.drop == "oraxen") {
          this.all_drops.push(
            "- oraxen " + this.an[0] + " " + this.an[1] + " " + this.an[2]
          );
        } else if (this.drop == "mcmmo-exp") {
          this.all_drops.push("- mcmmo-exp " + this.an[0] + " " + this.an[1]);
        } else if (this.drop == "exp") {
          this.all_drops.push("- exp " + this.an[0] + " " + this.an[1]);
        } else if (this.drop == "money") {
          this.all_drops.push("- money " + this.an[0] + " " + this.an[1]);
        } else if (this.drop == "mythicdrop") {
          this.all_drops.push(
            "- " + this.an[0] + " " + this.an[1] + " " + this.an[2]
          );
        } else if (this.drop == "phatloot") {
          this.all_drops.push(
            "- phatloot " + this.an[0] + " " + this.an[1] + " " + this.an[2]
          );
        } else if (this.drop == "cmd") {
          this.all_drops.push('- cmd{c="' + this.an[0] + '"}');
        } else if (this.drop == "mmoitems") {
          this.all_drops.push(
            "- mmoitems{type=" +
              this.an[0] +
              ";id=" +
              this.an[1] +
              "} " +
              this.an[2] +
              "" +
              this.an[3]
          );
        } else if (this.drop == "mythicmob") {
          this.all_drops.push(
            "- mythicmob{type=" +
              this.an[0] +
              "} " +
              this.an[1] +
              " " +
              this.an[2]
          );
        } else if (this.drop == "ItemsAdder") {
          this.all_drops.push("- " + this.an[0] + ":" + this.an[1]);
        } else if (this.drop == "掉落表") {
          this.all_drops.push("- " + this.an[0]);
        }
      } else {
        alert("请先选择掉落类型");
      }
      this.an = ["", "", "", ""];
      this.drop = null;
    },
    delete_drops(a) {
      this.all_drops.splice(a, 1);
    },
    empty_drops() {
      this.all_drops = [];
    },
  },
  mounted() {
    this.dropstype = mythicmobs_DropsTypes;
  },
  watch: {
    drop() {
      this.drops();
    },
    all_drops: {
      handler() {
        this.$store.commit("drop", this.all_drops);
        this.$store.commit("all1");
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>