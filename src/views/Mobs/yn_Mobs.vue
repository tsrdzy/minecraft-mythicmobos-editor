<template>
  <main class="mobs_main">
    <div class="main">
      <div class="left">
        <h2>设置区域:</h2>
        <mobs_basics></mobs_basics>
        <hr class="hr" />
        <mobs_drop></mobs_drop>
        <hr class="hr" />
        <mobs_options></mobs_options>
        <hr class="hr" />
        <mobs_bossbar></mobs_bossbar>
        <hr class="hr" />
        <mobs_aigoalselectors></mobs_aigoalselectors>
        <hr class="hr" />
        <mobs_aitargetselectors></mobs_aitargetselectors>
        <hr class="hr" />
        <mobs_equipment></mobs_equipment>
        <hr class="hr" />
        <mobs_damagemodifiers></mobs_damagemodifiers>
        <hr class="hr" />
        <mobs_killmessages></mobs_killmessages>
        <hr class="hr" />
        <mobs_levelmodifiers></mobs_levelmodifiers>
        <hr class="hr">
        <mobs_skills></mobs_skills>

      </div>
      <div class="right">
        <mobs_config></mobs_config>
      </div>
    </div>
  </main>
</template>

<script>
import mobs_basics from "@/views/Mobs/yn_mobs/mobs_basics";
import mobs_drop from "@/views/Mobs/yn_mobs/mobs_drop";
import mobs_options from "@/views/Mobs/yn_mobs/mobs_options";
import mobs_bossbar from "@/views/Mobs/yn_mobs/mobs_bossbar";
import mobs_aigoalselectors from "@/views/Mobs/yn_mobs/mobs_aigoalselectors";
import mobs_aitargetselectors from "@/views/Mobs/yn_mobs/mobs_aitargetselectors";
import mobs_equipment from "@/views/Mobs/yn_mobs/mobs_equipment";
import mobs_damagemodifiers from "@/views/Mobs/yn_mobs/mobs_damagemodifiers";
import mobs_killmessages from "@/views/Mobs/yn_mobs/mobs_killmessages";
import mobs_levelmodifiers from "@/views/Mobs/yn_mobs/mobs_levelmodifiers";
import mobs_skills from "@/views/Mobs/yn_mobs/mobs_skills"

import mobs_config from "@/views/Mobs/yn_config/mobs_config";
export default {
  name: "yn_mobs",
  components: {
    mobs_basics,
    mobs_drop,
    mobs_options,
    mobs_bossbar,
    mobs_aigoalselectors,
    mobs_aitargetselectors,
    mobs_equipment,
    mobs_damagemodifiers,
    mobs_killmessages,
    mobs_levelmodifiers,
    mobs_skills,


    mobs_config,
  },
};
</script>

<style lang="less">
.mobs_main {
  max-width: 1200px;
  margin: 0 auto;
  .main {
    display: flex;
    .left > h2 {
      margin-bottom: 16px;
    }

    .left,
    .right {
      width: 50%;
    }
  }
}
.card {
  display: flex;
  margin-bottom: 5px;
  h2 {
    font-size: 16px;
    min-width: 80px;
    min-height: 34px;
    line-height: 34px;
    white-space: nowrap;
  }
  input,
  select,
  textarea {
    width: 100%;
    min-height: 28px;
    line-height: 28px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline-style: none;
    padding: 2px;
    flex-grow: 1;
    font-size: 16px;
    font-family: "opposans";
    option {
      font-size: 16px;
      font-family: "opposans";
    }
  }
  input:focus,
  select:focus,
  textarea:focus {
    border-color: #7c7c7c;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 6px rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 6px rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-family: "opposans";
  }
  .hint {
    width: 34px;
    height: 34px;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }
}
.card_button {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 28px);
  button {
    height: 34px;
    width: 200px;
    border-radius: 5px;
  }
}
.card_table {
  width: calc(100% - 34px);
  margin: 5px;
  table {
    color: #fff;
    width: 100%;
    table-layout: fixed;
    border: 1px solid #fff;
    text-align: center;
    td {
      overflow: auto;
      white-space: nowrap;
      width: 80%;
    }
    tr,
    th,
    td {
      border: 1px solid #fff;

      button {
        width: 80%;
        border-radius: 5px;
        background-color: #fff;
      }
      button:hover {
        background-color: rgb(233, 127, 127);
      }
    }
    td::-webkit-scrollbar {
      width: 8px;
      height: 6px;
    }
    /*正常情况下滑块的样式*/
    td::-webkit-scrollbar-thumb {
      background-color: rgba(110, 110, 110, 0.5);
      border-radius: 10px;
      -webkit-box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.1);
    }
    /*鼠标悬浮在该类指向的控件上时滑块的样式*/
    td:hover::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
    }
    /*鼠标悬浮在滑块上时滑块的样式*/
    td::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4);
      -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
    }
    /*正常时候的主干部分*/
    td::-webkit-scrollbar-track {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
      background-color: rgb(80, 80, 80);
    }
    /*鼠标悬浮在滚动条上的主干部分*/
    td::-webkit-scrollbar-track:hover {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
      background-color: rgba(120, 120, 120, 0.5);
    }
  }
}
.iconfont {
  color: #fff;
}
.card_title {
  color: #fff;
  width: auto;
}
.hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}
</style>