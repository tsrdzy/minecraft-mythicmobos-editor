<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">BOSS血条</div> </template>
      <!-- 主体部分 -->

      <div>
        <div class="card">
          <h2 class="card_title">是否开启:</h2>
          <select v-model="Enabled" v-on:change="bossbar_store">
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
        <div class="card">
          <h2 class="card_title">血条标题:</h2>
          <input
            type="text"
            placeholder="血条标题"
            v-model="Title"
            v-on:input="bossbar_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span></span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">显示范围:</h2>
          <input
            type="text"
            placeholder="显示范围"
            v-model="Range"
            v-on:input="bossbar_store"
          />
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span></span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">血条颜色:</h2>
          <select v-model="Color" v-on:change="bossbar_store">
            <option value="PINK">粉色</option>
            <option value="BLUE">蓝色</option>
            <option value="RED">红色</option>
            <option value="GREEN">绿色</option>
            <option value="YELLOW">黄色</option>
            <option value="PURPLE">紫色</option>
            <option value="WHITE">白色</option>
          </select>
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span></span>
            </div>
          </n-popover>
        </div>
        <div class="card">
          <h2 class="card_title">血条样式:</h2>
          <select v-model="Style" v-on:change="bossbar_store">
            <option value="SOLID">平滑</option>
            <option value="SEGMENTED_6">分6段</option>
            <option value="SEGMENTED_10">分10段</option>
            <option value="SEGMENTED_12">分12段</option>
            <option value="SEGMENTED_20">分20段</option>
          </select>
          <n-popover trigger="hover">
            <template #trigger>
              <div class="iconfont hint">&#xe8e9;</div>
            </template>
            <div>
              <span></span>
            </div>
          </n-popover>
        </div>

        <div class="card">
          <h2 class="card_title">迷雾效果:</h2>
          <select v-model="CreateFog" v-on:change="bossbar_store">
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
        <div class="card">
          <h2 class="card_title">改变阴天:</h2>
          <select v-model="CreateFog" v-on:change="bossbar_store">
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
        <div class="card">
          <h2 class="card_title">播放音效:</h2>
          <select v-model="CreateFog" v-on:change="bossbar_store">
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
      Enabled: "",
      Title: "",
      Range: "",
      Color: "",
      Style: "",
      CreateFog: "",
      DarkenSky: "",
      PlayMusic: "",
    };
  },
  methods: {
    bossbar_store() {
      if (
        this.Enabled != "" ||
        this.Title != "" ||
        this.Range != "" ||
        this.Color != "" ||
        this.Style != "" ||
        this.CreateFog != "" ||
        this.DarkenSky != "" ||
        this.PlayMusic != ""
      )
        this.$store.commit("bossbar", [
          this.Enabled,
          this.Title,
          this.Range,
          this.Color,
          this.Style,
          this.CreateFog,
          this.DarkenSky,
          this.PlayMusic,
        ]);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>