<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">技能配置</div> </template>
      <!-- 主体部分 -->
      <div>
        <div class="card">
          <h2 class="card_title">生物标签:</h2>
          <input
            type="text"
            placeholder="生物标签"
            v-model="Label"
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
        <div class="card">
          <h2 class="card_title">生物种类:</h2>
          <select v-model="Type" v-on:change="basics_store">
            <option :key="Typex" v-for="Typex in Types" :value="Typex.value">
              {{ Typex.label }}
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
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script>
import { NCollapse, NCollapseItem, NPopover } from "naive-ui";
import mythicmobs_Types from "@/assets/json/mythicmobs/mythicmobs_types.json";
export default {
  components: {
    NCollapseItem,
    NCollapse,
    NPopover,
  },
  data() {
    return {
      Label: "",
      Type: "",
      Types: [],
      Display: "",
      Health: "",
      Damage: "",
      Armor: "",
      Faction: "",
      Mount: "",
    };
  },
  mounted() {
    this.Types = mythicmobs_Types;
  },
  methods: {
    basics_store() {
      var basics = [
        this.Label,
        this.Type,
        this.Display,
        this.Health,
        this.Damage,
        this.Armor,
        this.Faction,
        this.Mount,
      ];
      this.$store.commit("basics", basics);
      this.$store.commit("all1");
      for (var i = 0; i < this.Types.length; i++) {
        if (this.Types[i]["value"] == this.Type) {
          this.$store.commit("type", this.Types[i]["label"]);
        }
      }
    },
  },
};
</script>

<style>
</style>