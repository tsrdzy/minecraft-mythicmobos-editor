<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">基础配置</div> </template>
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
        <div class="card">
          <h2 class="card_title">生物名称:</h2>
          <input
            type="text"
            placeholder="生物名称"
            v-model="Display"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >设置实体的显示名,它将全息显示于实体头部上方<br />当实体类型为
                Marker 时无效<br />使用 Setname(修改名称)以重新读取占位符
                或修改显示名<br />允许使用占位符<br />若显示名包括单引号(不包括用于包裹字符的单引号)则需用**&lt;&sq&gt;来替代'**<br />
                显示名文本支持形如&lt;#FFFFFF&gt;的颜色Hax代码(仅工作于 MC
                1.17.1 及以上)</span
              >
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物血量:</h2>
          <input
            type="text"
            placeholder="生物血量"
            v-model="Health"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >设置实体最大生命<br />服务器数值上限为多少,最大生命数值上限就为多少,但是Spigot核
                <br />心默认配置下的 最大生命数值上限为2048,需在服务器文件夹内
                <br />的_spigot.yml_修改_MaxHealth_部分 <br />支持计算, 格式:
                <br />Damage: 数值 ADD(加法,
                此选项放空则为乘以)加上/乘以的数值(5.2.1)</span
              >
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物伤害:</h2>
          <input
            type="text"
            placeholder="生物伤害"
            v-model="Damage"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >支持计算, 格式: 数值 ADD(加法,
                此选项放空则为乘以)加上/乘以的数值(5.2.1)
                <br />设置实体近距离近身攻击伤害 <br />1伤害 = 0.5颗心
                就比如6伤害将令目标损失3颗心
                <br />仅影响近距离普通攻击伤害,不影响弓、三叉戟、弩等等
                <br />与手持武器攻击力叠加,这意味着正常情况下手持铁剑且普通攻击伤害为13的实体,可以秒杀无防具、状态效果玩家
                <br />值为0时会使用该实体种类的原版默认近身攻击伤害
                <br />上述漏洞修复于 MM 5.0.3</span
              >
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物护甲:</h2>
          <input
            type="text"
            placeholder="生物护甲"
            v-model="Armor"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >为实体提供额外生命 <br />1 = 5点额外生命 <br />仅工作于 MC 1.16
                以下 <br />经测试 MC1.19 可用</span
              >
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物阵营:</h2>
          <input
            type="text"
            placeholder="生物阵营"
            v-model="Faction"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >设置实体阵营,一般搭配AI使用 <br />字符串不能有特殊字符
              </span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">生物坐骑:</h2>
          <input
            type="text"
            placeholder="生物坐骑"
            v-model="Mount"
            v-on:input="basics_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span
                >令指定MythicMobs实体作为坐骑 <br />坐骑会在生成后自动被骑乘
              </span>
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