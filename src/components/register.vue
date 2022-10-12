<template>
  <div class="main">
    <el-container class="home_container">
      <el-header>
        <div class="header">
          <div type="primary" @click="backlogin" class="loginbtn">
            返回登录&nbsp;
            <img
              style="width: 20px; position: absolute; top: 1.5px"
              src="../assets/退出.png"
              alt=""
            />
          </div>
        </div>
      </el-header>
    </el-container>

    <div class="titlebox">
      <div class="title">欢迎来到</div>
      <div class="title">物理实验答题系统</div>
      <div class="title1">
        物理学是自然科学庞大体系中的一门基础学科。从17世纪至今，物理学一直是迅速发展、门类浩繁的自然科学体系中的带头学科。
      </div>
    </div>

    <div class="innerBox">
      <div class="box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
          style="margin: 0 auto"
        >
          <el-form-item>
            <div class="zhuce">注册</div>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入姓名"
                  class="shurukuang"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.teacher"
                  placeholder="请输入指导老师"
                  class="shurukuang"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.studentnumber"
                  placeholder="请输入学号"
                  class="shurukuang"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.studentnumber1"
                  placeholder="请再次输入学号"
                  class="shurukuang"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-select
                  v-model="ruleForm.stulevel"
                  placeholder="请选择学生层次"
                  filterable
                  class="xuanzekuang"
                >
                  <el-option
                    v-for="item in studentlevel"
                    :key="item.studentlevel"
                    :label="item.studentlevel"
                    :value="item"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-select
                  v-model="ruleForm.stugrade"
                  placeholder="请选择年级"
                  filterable
                  class="xuanzekuang"
                >
                  <el-option
                    v-for="item in grade"
                    :key="item.grade"
                    :label="item.grade"
                    :value="item"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-select
                  v-model="ruleForm.stushowspec"
                  placeholder="请选择专业"
                  filterable
                  class="xuanzekuang"
                  @change="choose"
                >
                  <el-option
                    v-for="item in showspec"
                    :key="item.showspec"
                    :label="item.showspec"
                    :value="item"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-select
                  v-model="ruleForm.stuclass1"
                  placeholder="请选择班级"
                  filterable
                  class="xuanzekuang"
                  :focus="getClass()"
                >
                  <el-option
                    v-for="item in class1"
                    :key="item"
                    :label="item"
                    :value="item"
                  ></el-option>
                </el-select>
              </el-form-item>

              <!-- <el-form-item>
                  <el-cascader
                    class="xuanzekuang"
                    placeholder="请选择专业、班级"
                    :props="perfessionObj"
                    :options="showspec"
                    @change="handlePChange"
                    ref='countrySelectRef'
                    filterable></el-cascader>
                </el-form-item> -->
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.password"
                  type="password"
                  placeholder="请输入密码"
                  class="shurukuang"
                  show-password
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-input
                  v-model="ruleForm.password1"
                  type="password"
                  placeholder="请再次输入密码"
                  class="shurukuang"
                  show-password
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button type="primary" class="btn" round @click="register()"
              >注 册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getArrangement();
    this.getGrade();
    this.getPerfession();
    // this.getClass();
  },
  data() {
    return {
      flag: true,
      chooseItem: "",
      temp: [],
      //级联选择器
      // perfessionObj:{
      //   value:'id',
      //   label:'student_spec',
      //   children:'class1',
      //   expandTrigger: 'click',
      // },
      //学生层次下拉框
      studentlevel: [],
      //年级下拉框
      grade: [],
      //专业下拉框
      showspec: [],
      //班级下拉框
      class1: [],
      ruleForm: {
        name: "",
        teacher: "",
        studentnumber: "",
        studentnumber1: "",
        password: "",
        password1: "",
        stulevel: "",
        stugrade: "",
        stushowspec: "",
        stuclass1: "",
      },
      rules: {
        //输入框
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        teacher: [
          { required: true, message: "请输入指导老师姓名", trigger: "blur" },
        ],
        studentnumber: [
          { required: true, message: "请输入学号", trigger: "blur" },
          {
            min: 11,

            max: 11,

            pattern: /^[0-9]{11}$/,

            message: "注意长度是11个数字呐",

            trigger: "blur",
          },
        ],
        studentnumber1: [
          { required: true, message: "请再次输入学号", trigger: "blur" },
          {
            min: 11,

            max: 11,

            pattern: /^[0-9]{11}$/,

            message: "注意长度为11个数字",

            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password1: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
        ],
        //选择框
        stulevel: [
          { required: true, message: "请选择你的学生层次", trigger: "change" },
        ],
        stugrade: [
          { required: true, message: "请选择你的年级", trigger: "change" },
        ],
        stushowspec: [
          { required: true, message: "请选择你的专业", trigger: "change" },
        ],
        stuclass1: [
          { required: true, message: "请选择你的班级", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    choose() {
      this.flag = true;
      this.chooseItem = this.ruleForm.stushowspec;
      this.ruleForm.stuclass1 = "";
    },
    // handlePChange(value){
    //选中后关闭下拉框
    //   this.$refs.countrySelectRef.dropDownVisible = false
    // },
    async getArrangement() {
      const { data: res } = await this.$http.get("/api/show/showlevel");
      for (var i = 0; i < res.data.length; i++) {
        this.studentlevel.push(res.data[i].student_level);
      }
    },
    // 获得年级 如:2020级
    async getGrade() {
      const { data: res } = await this.$http.get("/api/show/showyear");
      for (var i = 0; i < res.data.length; i++) {
        this.grade.push(res.data[i].student_year);
      }
    },
    async getPerfession() {
      const { data: res } = await this.$http.get("/api/show/showspec");
      for (var i = 0; i < res.data.length; i++) {
        this.showspec.push(res.data[i].student_spec);
      }
    },
    async getClass() {
      if (this.chooseItem !== "" && this.flag == true) {
        const { data: res } = await this.$http.post("/api/show/showclass", {
          specname: this.chooseItem,
        });
        let newRes = JSON.parse(JSON.stringify(res.data));
        this.class1 = newRes.map((item) => {
          this.temp = JSON.parse(JSON.stringify(item.class));
          return this.temp;
        });
        this.flag = false;
      }
    },
    backlogin() {
      this.$router.push("/login");
    },
    async register() {
      for (var key in this.ruleForm) {
        if (!this.ruleForm[key]) {
          this.$message.error("信息未填写完整！");
          return false;
        }
      }
      if (this.ruleForm.studentnumber.length!==11) {
        this.$message.error("学号应为11位");
        return false;
      }
       if (!this.ruleForm.password.replace(/\s*/g,"")) {
        this.$message.error("密码不能为空");
        return false;
      }
       if (
        this.ruleForm.studentnumber != this.ruleForm.studentnumber1
      ) {
        this.$message.error("学号两次输入不一致");
        return false;
      }
      if (
        this.ruleForm.password != this.ruleForm.password1
      ) {
        this.$message.error("密码两次输入不一致");
        return false;
      } else {
        const { data: res } = await this.$http.post("/api/users/registered", {
          student_name: this.ruleForm.name,
          student_teacher: this.ruleForm.teacher,
          student_id: this.ruleForm.studentnumber,
          password: this.ruleForm.password,
          student_level: this.ruleForm.stulevel,
          student_spec: this.ruleForm.stushowspec,
          student_year: this.ruleForm.stugrade,
          student_class: this.ruleForm.stuclass1,
        });
        if (res.code == 200) {
          this.$message.success("注册成功！");
          this.$router.push("/login");
        }
        if (res.code == 100) {
          this.$message.error("注册失败！");
        }
        if (res.code == 101) {
          this.$message.warning("注册失败！该学号已经注册过了！");
        }
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
.loginbtn {
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
  /* font-size: small; */
  color: #ffffff;
}
.zhuce {
  color: black;
  text-align: center;
  font-family: "Lato", "sans-serif";
  font-weight: 100;
  /* font-spacing:2px; */
  font-size: 24px;
  margin-top: 5%;
}
.header {
  margin-left: 95%;
}
.btn {
  width: 40%;
  margin-left: 30%;
  margin-bottom: 5%;
}
.innerBox {
  width: 100%;
  position: relative;
}
.shurukuang {
  width: 70%;
  margin-left: 16%;
}
.xuanzekuang {
  width: 70%;
  margin-left: 16%;
}
.box {
  position: absolute;
  right: 5%;
  top: 145px;
  background-color: #fff;
  margin: 3vw auto;
  width: 35%;
  border-radius: 14px;
  margin: auto 4rem;
  padding: 1rem;
  min-width: 35rem;
  max-width: 50rem;
  background-color: white;
  word-wrap: break-word;
  box-shadow: 7px 0em 0.1875em 0 rgb(0 0 0 / 10%), 20px -1em 0 -0.25em #fef0f0, 20px -1em 0.1875em -0.25em rgb(0 0 0 / 10%), 20px -1em 0px 0em #e5e5e5, 20px 0em 0.1875em -0.5em rgb(0 0 0 / 10%);
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

h1 {
  text-align: center;
  font-family: "Lato", "sans-serif";
  font-weight: 300;
  /* font-spacing:2px; */
  font-size: 48px;
}

.el-input__inner {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0;
  border: 1px solid #0094ff;
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
