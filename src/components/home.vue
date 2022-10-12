<template>
  <div class="main">
    <el-container class="home_container">
      <el-header>
        <div class="header">
          <img src="https://www.nsu.edu.cn/img/logo.png" alt="" />
          <div class="loginbtn" @click="login">
            退出登录&nbsp;<img
              style="width: 20px; position: absolute; top: 1.5px"
              src="../assets/退出.png"
              alt=""
            />
          </div>
        </div>
      </el-header>
    </el-container>
    <div class="innerBox">
      <div class="box">
        <div
          style="
            text-align: center;
            color: rgb(0, 0, 0);
            margin: 0 auto;
            position: relative;
          "
        >
          <font
            size="4"
            id="mess"
            :class="{ beblue: this.themes, bewith: !this.themes }"
            @click="selfmes"
            >个人信息</font
          >
          <font size="7"
            >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font
          >
          <font
            id="kaoshi"
            size="4"
            :class="{ beblue: this.thetest, bewith: !this.thetest }"
            @click="intotest"
            >在线考试</font
          >
        </div>

        <div class="form" v-show="istest">
          <el-form :model="Form" style="margin: 0 auto">
            <tr>
              姓名 :
              <span :model="Form.student_name">{{ Form.student_name }}</span>
            </tr>
            <tr>
              学号 :
              <span  :model="Form.student_num">{{ Form.student_num }}</span>
            </tr>
            <tr>
              学生层次 :
              <span :model="Form.student_level">{{ Form.student_level }}</span>
            </tr>
            <tr>
              年级 :
              <span :model="Form.student_year">{{ Form.student_year }}</span>
            </tr>
            <tr>
              专业 :
              <span :model="Form.student_spec">{{ Form.student_spec }}</span>
            </tr>
            <tr>
              班级 :
              <span :model="Form.student_class">{{ Form.student_class }}</span>
            </tr>
          </el-form>
        </div>
        <div class="tiaozhuan" v-show="!istest">
          <input
            type="button"
            class="btn"
            @click="daxuewuli"
            value="实验误差与数据处理"
          />
          <input type="button" class="btn" @click="danbai" value="单摆法测重力加速度" />
          <input
            type="button"
            class="btn"
            @click="shiboqi"
            value="示波器的调整与使用"
          />
          <input
            type="button"
            class="btn"
            @click="huoer"
            value="霍尔效应测量磁感应强度"
          />
          <input
            type="button"
            class="btn"
            @click="zizushi"
            value="自组式直流电桥测量电阻值"
          />
          <input
            type="button"
            class="btn"
            @click="xiangShi"
            value="箱式直流电桥测量电阻值"
          />
          <input
            type="button"
            class="btn"
            @click="dianBiaoGaiZhuang"
            value="电表的改装设计"
          />
          <input
            type="button"
            class="btn"
            @click="oumubiao"
            value="欧姆表的改装设计"
          />
          <input
            type="button"
            class="btn"
            @click="wanyongbiao"
            value="万用表的改装设计"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        student_name: "",
        student_num: "",
        student_level: "",
        student_year: "",
        student_spec: "",
        student_class: "",
      },
      istest: false,
      themes: false,
      thetest: true,
    };
  },
  created() {
    this.getmessage();
  },
  methods: {
    async getmessage() {
      const { data: res } = await this.$http.post("/api/selectstudent1");
      // console.log(res);
      if (res.code == 200) {
        localStorage.setItem("state1", res.data[0].state);
        localStorage.setItem("state2", res.data[0].state_danbai);
        this.Form = res.data[0];
      }
    },
    async daxuewuli() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.state1;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/daxuewulishiyan");
      }
    },
    async danbai() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.state3;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/danbai");
      }
    },
    async shiboqi() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.shiboqi;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/shiboqi");
        
      }
    },
    async oumubiao() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.oumubiao;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/oumubiao");
      }
    },
    async wanyongbiao() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.wangyongbiao;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/wanyongbiao");
      }
    },
    async huoer() {
      const { data: res } = await this.$http.post("/api/pd");
      // console.log(res);
      var state = res.data.huoer;
      if (state == 3) {
        this.$message.error("该实验已完成作答");
        return false;
      } else if (state == 0 || state == 1 || state == 2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false;
      } else {
        this.$router.push("/huoer");
      }
    },
    async zizushi() {
      const { data: res } = await this.$http.post('/api/pd')
      // console.log(res);
      var state = res.data.zhiliu_dianqiao
      if (state == 0 || state == 1 || state ==2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false
      }
      if (state==3) {
        this.$message.error("该实验已完成作答");
        return false
      }
      else {
        this.$router.push("/zizushi");
      }
    },
    async xiangShi() {
      const { data: res } = await this.$http.post('/api/pd')
      // console.log(res);
      var state = res.data.xiangshi_dianqiao
      if (state == 0 || state == 1 || state ==2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false
      }
      if (state==3) {
        this.$message.error("该实验已完成作答");
        return false
      }
      else {
        this.$router.push("/xiangShi");
      }
    },
    async dianBiaoGaiZhuang() {
      const { data: res } = await this.$http.post('/api/pd')
      // console.log(res);
      var state = res.data.dianbiao
      if (state == 0 || state == 1 || state ==2) {
        this.$message.error("您的实验数据异常，请联系您的教师");
        return false
      }
      if (state==3) {
        this.$message.error("该实验已完成作答");
        return false
      }
      else {
        this.$router.push("/dianBiaoGaiZhuang");
      }
    },
    intotest() {
      this.istest = false;
      this.themes = false;
      this.thetest = true;
    },
    selfmes() {
      this.istest = true;
      this.themes = true;
      this.thetest = false;
    },
    login() {
      window.localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.loginbtn {
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
  /* font-size: small; */
  color: #ffffff;
}
.btn:hover {
  background-color: #0094ff;
  color: #fff;
  width: 80.2%;
  /* box-shadow: 1px 1px 2px 2px #6d9fe1; */
  z-index: 2;
}
#kaoshi {
  display: block;
  width: 50%;
  /* float: left; */
  position: absolute;
  right: 0;
  top: 30px;
}
#mess {
  display: block;
  width: 50%;
  /* float: left; */
  position: absolute;
  left: 0;
  top: 30px;
}
tr {
  color: black;
  /* text-align: center; */

  display: block;
  margin: 0 auto;
  width: 70%;
  /* margin-top:30px; */
  padding: 10px;
  /* background-color: antiquewhite; */
}
tr > td:first-child {
  display: block;
  width: 40%;
  float: left;
  padding-left: 13%;
  /* background-color: #83b0eb; */
}
.el-input {
  border: 0;
}
.beblue {
  border-bottom: 3px solid !important;
  border-color: #83b0eb !important;
  /* border: 3px solid; */
  padding-bottom: 14px;

  box-shadow: 0px 9px 12px -10px #6d9fe1;
}
.beblue:hover {
  color: blue;
}
.bewith:hover {
  color: blue;
}
.bewith {
  border-bottom: 3px solid #ccc !important;
  padding-bottom: 14px;
  border-color: rgb(219, 218, 218) !important;
  /* display: block;
  width: 50%; */
}
.tiaozhuan {
  margin: 30px 0px;
}
.form {
  margin: 20px 0;
  font-size: 30px;
  margin: 75px auto;
  padding-left: 150px;
  /* text-align: center; */
}
.btn {
  width: 80%;
  border: 0.1px solid rgb(242, 242, 242);
  border-radius: 20px;
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  /* margin-bottom: 5%; */
  font-size: 27px;
  padding: 7px 20px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.89);
  margin: 5vw auto;
  height: 550px;
  /* border-radius: 10px; */
  margin: auto 4rem;
  padding: 1rem;
  min-width: 45rem;
  max-width: 70rem;
  background-color: white;
  word-wrap: break-word;
  box-shadow:10px 1em 0.1875em 0 rgb(0 0 0 / 10%), inset 17px 0.85em 0 -0.25em #fef0f0, 18px 1em 0.1875em -0.25em rgb(0 0 0 / 10%), 16px 0.78em 0px 0em #e5e5e5, 12px 0.2em 0.1875em -0.5em rgb(0 0 0 / 10%);
}
.el-input {
  width: 60%;
  margin-left: 20%;
  margin: 0;
}
/* .el-input__inner {
   border: 0!important;
} */
.lablecss {
  color: black;
  float: right;
}
.home_container {
  background-color: #749AD8;
}

.main {
  color: #fff;
  height: 100%;
  position: relative;
  background-image: url("https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202209032015192.png");
  background-size: 100%;
}

font {
  /* background-color: blue; */
  cursor: pointer;
}

.el-input__inner {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0;
  border: 1px solid #0094ff;
  color: rgba(0, 0, 0, 0.7);
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
