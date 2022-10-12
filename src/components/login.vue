<template>
  <div class="main">
    <!-- 顶栏容器 -->
    <el-container class="home_container">
            <el-header>
                <div class="header">
                    <img src="https://www.nsu.edu.cn/img/logo.png" alt="">
                </div>
            </el-header>
    </el-container>

    <!-- 背景文字 -->
    <div class="titlebox">
      <div class="title">欢迎来到</div>
      <div class="title">物理实验答题系统</div>
      <div class="title1">
        物理学是自然科学庞大体系中的一门基础学科。从17世纪至今，物理学一直是迅速发展、门类浩繁的自然科学体系中的带头学科。
      </div>
    </div>

    <!-- 登录盒子 -->
    <div class="innerBox">
      <div class="loginbox">
        <el-form
          :rules="rules"
          class="login-form"
          :model="loginForm"
          @keyup.enter.native="login"
        >
          <el-form-item>
            <div class="denglu">登录</div>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              placeholder="请输入学号"
              prefix-icon="el-icon-s-custom"
              type="text"
              v-model="loginForm.student_id"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <div class="forget">
            <router-link :to="{ path: '/register' }" replace
              >没有账号?点击注册
            </router-link>
          </div>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              style="width: 100%"
              round
              @click="login"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        student_id: "",
        password: "",
      },
      loading: false,
      rules: {
        student_id: [
          { required: true, message: "请输入用户名", trigger: "biur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post(
        "/api/users/login",
        this.loginForm
      );

      if (res.code == 200) {
        this.$message.success("登录成功！");
        localStorage.setItem("token", "Bearer " + res.data.token);
        // localStorage.setItem("state1", res.data.state1);
        // localStorage.setItem("state2", res.data.state2);
        this.$router.push("/home");
      }
      if (res.code == 100) {
        this.$message.error("登录失败！");
      }
    },
  },
};
</script>

<style scoped>
.titlebox {
  width: 640px;
  position: absolute;
  top: 35%;
  left: 8%;
}
.title {
  font-size: 65px;
  margin-bottom: 10px;
}
.title1 {
  font-size: 20px;
}
.home_container {
  background-color: #749AD8;
}
.main {
  color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url("https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202209032015192.png");
  background-size: cover;
}
.innerBox {
  height: 500px;
  width: 100%;
  display: flex;
  position: relative;
  /* flex-direction: column;
justify-content: center;
align-items: center; */
}
.loginbox {
  position: absolute;
  height: 350px;
  width: 430px;
  background-color: #fff;
  border-radius: 14px;
  top: 50%;
  left: 57%;
  margin: auto 4rem;
  padding: 1rem;
  min-width: 20rem;
  max-width: 30rem;
  background-color: white;
  word-wrap: break-word;
  box-shadow: 7px 0em 0.1875em 0 rgb(0 0 0 / 10%), 20px -1em 0 -0.25em #fef0f0, 20px -1em 0.1875em -0.25em rgb(0 0 0 / 10%), 20px -1em 0px 0em #e5e5e5, 20px 0em 0.1875em -0.5em rgb(0 0 0 / 10%);
}
.forget {
  margin-bottom: 14px;
  margin-left: 56%;
  /* float: right; */
}
a {
  font-size: 15px;
  color: #0094ff;
  text-decoration: none;
}
.denglu {
  color: black;
  text-align: center;
  font-family: "Lato", "sans-serif";
  font-weight: 100;
  /* font-spacing:2px; */
  font-size: 24px;
}
h2 {
  text-align: center;
  font-family: "Lato", "sans-serif";
  font-weight: 300;
  /* font-spacing:2px; */
  font-size: 28px;
}
.login-form {
  margin: 0 auto;
  width: 300px;
  padding-top: 30px;
}
.el-input__inner {
  background-color: rgba(219, 203, 203, 0.356);
  border-radius: 0;
  border: 1px solid #1126e9;
  color: rgba(0, 0, 0, 0.7);
}
.el-input__inner::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.el-button {
  border-radius: 4px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  display: flex;
  align-items: center;
}

.header img {
  width: 180px;
}
</style>
