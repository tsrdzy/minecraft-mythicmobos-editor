<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">掉落配置</div> </template>
      <!-- 主体部分 -->
      <div>
        <div class="card">
          <h2 class="card_title">掉落类型:</h2>
          <select v-model="Drop" v-on:change="drop_store">
            <option :key="Dropx" v-for="Dropx in Drops" :value="Dropx.value">
              {{ Dropx.label }}
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
          :key="Drop_configx"
          v-for="(Drop_configx, index) in Drop_config"
        >
          <h2 class="card_title">{{ Drop_configx }}:</h2>
          <input
            type="text"
            placeholder=""
            v-model="a[index]"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >MythicMobs实体名将是此插件调用实体的重要途径<br />实体名不能包含特殊字符<br />例子:<br />
                - big_zombie<br />
                - BIGZOMBIE<br />
                - 大僵尸</span
              >
            </div>
          </n-popover>
        </div>
        <div class="card_button">
          <button v-on:click="empty_drop">清空</button>
          <button v-on:click="add_drop">添加</button>
        </div>
        <div class="card_table">
          <table>
            <tr>
              <th>掉落配置</th>
              <th>操作</th>
            </tr>
            <tr
              :key="Drops_configx"
              v-for="(Drops_configx, index) in Drops_config"
            >
              <td>{{ Drops_configx }}</td>
              <td><button v-on:click="delete_drop(index)">删除</button></td>
            </tr>
          </table>
        </div>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";

import drops from "@/assets/json/mythicmobs/mythicmobs_Drops.json";
export default {
  components: {
    NCollapseItem,
    NCollapse,
    NPopover,
  },
  data() {
    return {
      a: ["", "", "", ""],
      Drop: "",
      Drops: [],
      Drop_config: [],
      Drops_config: [],
    };
  },
  methods: {
    drop_store() {
      for (var i = 0; i < this.Drops.length; i++) {
        if (this.Drops[i].value == this.Drop) {
          this.Drop_config = this.Drops[i].config;
        }
      }
    },
    add_drop() {
      if (this.Drop != "") {
        var temporary_drop = "";
        if (
          this.Drop == "skillapi-exp" ||
          this.Drop == "mcmmo-exp" ||
          this.Drop == "exp" ||
          this.Drop == "money"
        ) {
          temporary_drop = this.Drop;
          if (this.a[0] != "") {
            temporary_drop = temporary_drop + " " + this.a[0];
          }
          if (this.a[1] != "") {
            temporary_drop = temporary_drop + " " + this.a[1];
          }
        } else if (
          this.Drop == "oraxen" ||
          this.Drop == "mythicdrop" ||
          this.Drop == "phatloot"
        ) {
          temporary_drop = this.Drop;
          if (this.a[0] != "") {
            temporary_drop = temporary_drop + " " + this.a[0];
          }
          if (this.a[1] != "") {
            temporary_drop = temporary_drop + " " + this.a[1];
          }
          if (this.a[2] != "") {
            temporary_drop = temporary_drop + " " + this.a[2];
          }
        } else if (this.Drop == "cmd") {
          temporary_drop = this.Drop;
          if (this.a[0] != "") {
            temporary_drop = temporary_drop + '{c="' + this.a[0] + '"}';
          }
        } else if (this.Drop == "mmoitems") {
          temporary_drop = this.Drop + "{";
          if (this.a[0] != "") {
            temporary_drop = temporary_drop + "type=" + this.a[0] + ";";
          }
          if (this.a[1] != "") {
            temporary_drop = temporary_drop + "id=" + this.a[1];
          }
          temporary_drop = temporary_drop + "}";
          if (this.a[2] != "") {
            temporary_drop = temporary_drop + " " + this.a[2];
          }
          if (this.a[3] != "") {
            temporary_drop = temporary_drop + " " + this.a[3];
          }
        } else if (this.Drop == "mythicmob") {
          temporary_drop = this.Drop;
          if (this.a[0] != "") {
            temporary_drop = temporary_drop + "{type=" + this.a[0] + "}";
          }
          if (this.a[1] != "") {
            temporary_drop = temporary_drop + " " + this.a[1];
          }
          if (this.a[2] != "") {
            temporary_drop = temporary_drop + " " + this.a[2];
          }
        } else if (this.Drop == "ItemsAdder") {
          if (this.a[0] != "") {
            temporary_drop = this.a[0];
          }
          if (this.a[1] != "") {
            temporary_drop = temporary_drop + ":" + this.a[1];
          }
        } else if (this.Drop == "掉落表") {
          if (this.a[0] != "") {
            temporary_drop = this.a[0];
          }
        }
        this.Drop = "";
        this.a = ["", "", "", ""];
        this.Drop_config = [];
        this.Drops_config.push("- " + temporary_drop);
        this.$store.commit("drop", this.Drops_config);
        this.$store.commit("all1");
      } else {
        alert("请选择掉落类型");
      }
    },
    delete_drop(index) {
      this.Drops_config.splice(index, 1);
      this.$store.commit("drop", this.Drops_config);
      this.$store.commit("all1");
    },
    empty_drop() {
      this.Drops_config = [];
      this.$store.commit("drop", this.Drops_config);
      this.$store.commit("all1");
    },
  },
  mounted() {
    this.Drops = drops;
  },
};
</script>

<style>
</style>