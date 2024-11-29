<template>
  <n-collapse>
    <n-collapse-item>
      <template #arrow><div class="iconfont">&#xe65f;</div></template>
      <template #header> <div style="color: white">生物装备</div> </template>
      <!-- 主体部分 -->

      <div>
        <div class="card">
          <h2 class="card_title">头部装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="Head"
            v-on:input="equipment_store"
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
      </div>
      <div>
        <div class="card">
          <h2 class="card_title">身体装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="Chest"
            v-on:input="equipment_store"
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
      </div>
      <div>
        <div class="card">
          <h2 class="card_title">护腿装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="Legs"
            v-on:input="equipment_store"
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
      </div>
      <div>
        <div class="card">
          <h2 class="card_title">脚部装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="Feet"
            v-on:input="equipment_store"
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
      </div>
      <div>
        <div class="card">
          <h2 class="card_title">主手装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="Hand"
            v-on:input="equipment_store"
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
          <h2 class="card_title">副手装备:</h2>
          <input
            type="text"
            placeholder="英文ID/mmitems标签"
            v-model="OffHand"
            v-on:input="equipment_store"
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
      Head: "",
      Chest: "",
      Legs: "",
      Feet: "",
      Hand: "",
      OffHand: "",
    };
  },
  methods: {
    equipment_store() {
      this.$store.commit("equipment", [
        this.Head,
        this.Chest,
        this.Legs,
        this.Feet,
        this.Hand,
        this.OffHand,
      ]);
      this.$store.commit("all1");
    },
  },
};
</script>

<style>
</style>