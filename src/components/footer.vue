<template>
  <footer>
    <div class="footer">
      <div class="footer_left">
        <div class="sign">
          <a href=""
            ><img src="@/assets/image/footer/yqlj2.png" target="_BLANK" alt=""
          /></a>
          <a href="https://www.naiveui.com/zh-CN/os-theme" target="_BLANK"
            ><img src="@/assets/image/footer/yqlj1.png" alt=""
          /></a>
        </div>

        <h2>推荐使用 Chrome 浏览器访问本站</h2>
        <h2>本站与Mojang以及微软公司没有从属关系</h2>
        <h2>本站原创图文内容版权属于源鸟工作室 未经许可不得转载</h2>
      </div>
      <div class="footer_right">
        <ul>
          <li class="iconfont">&#xe606;</li>
          <li class="iconfont">&#xe63d;</li>
          <li class="iconfont">&#xe61c;</li>
          <li class="iconfont">&#xe882;</li>
        </ul>
        <hr />
        <h2><a href="beian.miit.gov.cn">渝ICP备2023004699号-1</a></h2>
        <h2>渝公网安备 备案中</h2>
        <h2>© 2022-2023 TsrCraft工作室 版权所有</h2>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "main_footer",
};
</script>

<style lang="less" scoped>
a {
  color: rgb(168, 168, 168);
}
h2 {
  text-align: center;
}
footer {
  background-color: rgb(43, 47, 49);

  .footer {
    display: flex;
    justify-content: space-between;
    // justify-content:center;
    color: rgb(200, 200, 200);
    padding: 10px 0;
    max-width: 1200px;
    margin: 0 auto;
    .sign {
      width: auto;
      display: flex;
      justify-content: center;
      img {
        height: 45px;
        width: 120px;
        border-radius: 3px;
        border: 1px solid #bbb;
        margin: 0 1px;
      }
    }
    display: flex;
    flex-wrap: wrap;
    .footer_left,
    .footer_right {
      flex-grow: 2;
    }
    .footer_right {
      hr {
        border: 0;
        height: 1px;
        background: #333;
        background-image: linear-gradient(to right, #333, #ccc, #333);
      }
      ul {
        height: 37.6px;
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        li {
          line-height: 45px;
          font-size: 24px;
          max-width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>