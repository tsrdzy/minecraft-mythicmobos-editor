<template>
  <n-modal
    v-model:show="isshow_login"
    preset="card"
    style="width: 50%"
    :closable="false"
    class="login_card"
  >
    <img src="@/assets/image/login/logo.png" alt="" />
    <div v-show="loginregister">
      <div class="card">
        <input v-model="name" type="text" placeholder="用户名" />
      </div>
      <div class="card">
        <input v-model="password" type="text" placeholder="密码" />
      </div>
      <div class="card">
        <input v-model="code" type="text" placeholder="验证码" />
        <div v-on:click="code_svg" v-html="svg_code"></div>
      </div>
      <div class="button">
        <div v-on:click="login"><h2>登录</h2></div>
      </div>
      <div class="h21" v-on:click="(this.loginregister = false), code_svg()">
        <h2>没有账号,注册一个</h2>
      </div>
    </div>

    <div v-show="!loginregister">
      <div class="card">
        <input v-model="reg_name" type="text" placeholder="用户名" />
      </div>
      <div class="card">
        <input v-model="reg_password" type="password" placeholder="密码" />
      </div>
      <div class="card">
        <input v-model="reg_password1" type="password" placeholder="确认密码" />
      </div>
      <div class="card">
        <input v-model="reg_email" type="text" placeholder="邮箱" />
      </div>
      <div class="card">
        <input v-model="reg_emailcode" type="text" placeholder="邮箱验证码" />
        <button>获取验证码</button>
      </div>
      <div class="card">
        <input v-model="reg_code" type="text" placeholder="验证码" />
        <div v-on:click="code_svg" v-html="svg_code"></div>
      </div>
      <div class="button">
        <div v-on:click="register"><h2>注册</h2></div>
      </div>
      <div class="h21" v-on:click="(this.loginregister = true), code_svg()">
        <h2>已有账号,返回登陆</h2>
      </div>
    </div>
  </n-modal>
  <header>
    <div class="logo">
      <h2 class="iconfont">&#xe604;</h2>
      <h1>MCBOX MythicMobs编辑器</h1>
    </div>
    <div class="login">
      <div class="head_image">
        <img src="@/assets/image/header/default_avatar.png" alt="" />
      </div>
      <div class="name" v-on:click="isshowif_login"><h2>登陆/注册</h2></div>
    </div>
  </header>
</template>

<script>
import { NModal } from "naive-ui";
export default {
  components: {
    NModal,
  },
  name: "main_header",
  data() {
    return {
      name: "",
      password: "",
      code: "",
      isshow_login: false,
      svg_code: "",
      loginregister: true,

      reg_name: "",
      reg_password: "",
      reg_password1: "",
      reg_email: "",
      reg_emailcode: "",
      reg_code: "",
    };
  },

  mounted() {
    this.axios.get("/user/login/voluntarily").then((res) => {
      alert(res.data);
    });
  },
  methods: {
    login() {
      if (this.name != "" && this.password != "" && this.code != "") {
        this.axios
          .post("/user/login", {
            name: this.name,
            password: this.password,
            code: this.code,
          })

          .then((res) => {
            if (res.data == "003") {
              alert("验证码错误");
            } else {
              alert(res.data.token);
            }
          });
      }
    },
    register() {
      if (
        this.reg_name != "" &&
        this.reg_password != "" &&
        this.reg_password1 != "" &&
        this.reg_email != "" &&
        this.reg_emailcode != "" &&
        this.code != "" &&
        this.reg_password == this.reg_password1
      ) {
        console.log(1);
      }
    },
    isshowif_login() {
      this.isshow_login = true;
      this.code_svg();
    },
    code_svg() {
      this.axios.get("/api/code").then((res) => {
        this.svg_code = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.h21 {
  width: 120px;
  margin: 0 auto;
  h2 {
    width: auto;
    text-align: center;
    font-size: 13px;
  }
  h2:hover {
    color: #d84e4e;
    text-decoration: underline;
  }
}

.button {
  width: 100%;

  div {
    h2 {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
    }
    background-color: rgb(240, 240, 240);
    display: flex;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin: 0 auto;
  }
  div:hover {
    background-color: rgba(220, 220, 220, 0.848);
  }
}

.login_card {
  img {
    display: block;
    width: 40%;
    margin: 0 auto;
  }
  .card {
    height: 35px;
    h3 {
      height: 35px;
      width: 50px;
      font-size: 16px;
      line-height: 35px;
    }
    input {
      width: auto;
    }
  }
}
header {
  display: flex;
  height: 50px;
  color: #ccc;
  font-size: 16px;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  .logo {
    display: flex;
    h2 {
      width: 30px;
      height: 30px;
      margin: 10px;
      line-height: 30px;
      font-size: 26px;
      color: #fff;
    }
    h1 {
      line-height: 50px;
      overflow: hidden;
    }
  }
}
.login {
  display: flex;
  margin: 0 10px 0 0;
  .head_image {
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid rgb(222, 222, 222);
    overflow: hidden;
    background-color: rgb(138, 138, 138);
    img {
      margin: 1px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }
  }
  .name {
    text-align: center;
    line-height: 50px;
  }
}
.login:hover {
  .head_image {
    border-color: #fff;
  }
  .name {
    color: rgb(224, 224, 224);
  }
  h2 {
    font-weight: bold;
  }
}
</style>