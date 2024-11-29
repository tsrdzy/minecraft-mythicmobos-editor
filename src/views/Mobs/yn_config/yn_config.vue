<template>
  <div class="config">
    <n-input
      v-model:value="configfile"
      :v-on:change="Configurationcontent()"
      placeholder="自动调整尺寸"
      type="textarea"
      autosize
    />
  </div>
</template>

<script>
import {NInput} from 'naive-ui'
export default {
  data() {
    return {
      configfile: "",
    };
  },
  components:{
    NInput,
  },
  methods: {
    Configurationcontent() {
      this.configfile = this.$store.state.configfile;
    },
  },
};
</script>

<style lang="less" scoped>
.config {
  width: 100%;
  textarea {
    width: 100%;
    resize: none;
  }
}
</style>>

