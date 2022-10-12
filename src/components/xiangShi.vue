<template>
  <div class="allStyle">
    <h4>一.实验数据记录与处理</h4>
    <el-form :model="xiangShiForm" ref="xiangShiForm">
      <!-- 1.箱式直流电桥测量电阻值 -->
      <table style="background-color: #EFEFEF;">
        <tr>
          <th colspan="8" style="text-align: left">1.箱式直流电桥测量电阻值</th>
        </tr>
        <tr>
          <th style="width: 200px">
            <div class="out">
              <b>测量次数</b>
              <em>测量内容</em>
            </div>
          </th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th colspan="3">测量结果</th>
        </tr>
        <tr>
          <td class="t1">比例臂</td>
          <td>0.1</td>
          <td>0.1</td>
          <td>0.1</td>
          <td rowspan="3" style="width: 5%">RX=</td>
          <td rowspan="3" style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rx"
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 4}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rx"/>
          </td>
          <td rowspan="3" style="width: 5%">Ω</td>
        </tr>
        <tr>
          <td class="t1">电阻臂R0(Ω)</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.ra1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.ra1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.ra2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.ra2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.ra3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.ra3"/>
          </td>
        </tr>
        <tr>
          <td class="t1">待测电阻值RX(Ω)</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rx1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rx1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rx2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rx2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rx3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rx3"/>
          </td>
        </tr>
      </table>
      <!-- 2.测量并计算箱式直流电桥的灵敏度 -->
      <table style="background-color: #EFEFEF;">
        <tr>
          <th colspan="8" style="text-align: left">
            2.测量并计算箱式直流电桥的灵敏度
          </th>
        </tr>
        <tr>
          <th style="width: 200px">
            <div class="out">
              <b>测量次数</b>
              <em>测量内容</em>
            </div>
          </th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th colspan="3">测量结果</th>
        </tr>
        <tr>
          <td class="t1">电阻臂R0(Ω)</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rb1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')"  type="text" v-model="xiangShiForm.rb1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rb2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rb2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rb3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rb3"/>
          </td>
          <td rowspan="4" style="width: 5%">S=</td>
          <td rowspan="4"  style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.s"
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 5}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.s"/>
          </td>
        </tr>
        <tr>
          <td class="t1">变化量ΔR0(Ω)</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td class="t1">偏转格数Δn</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rchange1a"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rchange1a"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rchange2a"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rchange2a"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rchange3a"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rchange3a"/>
          </td>
        </tr>
        <tr>
          <td class="t1">电桥灵敏度S</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.s1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.s1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.s2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.s2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.s3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.s3"/>
          </td>
        </tr>
      </table>
      <!-- 3.箱式直流电桥测量电阻值 -->
      <table style="background-color: #EFEFEF;">
        <tr>
          <th colspan="8" style="text-align: left">3.箱式直流电桥测量电阻值</th>
        </tr>
        <tr>
          <th style="width: 200px">
            <div class="out">
              <b>测量次数</b>
              <em>测量内容</em>
            </div>
          </th>
          <th>R2</th>
          <th>R3</th>
          <th>R1</th>
          <!-- <th colspan="3">测量结果</th> -->
        </tr>
        <tr>
          <td class="t1">比例臂</td>
          <td>1</td>
          <td>100</td>
          <td>0.1</td>
        </tr>
        <tr>
          <td class="t1">电阻臂R0(Ω)</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rc1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rc1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rc2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rc2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rc3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rc3"/>
          </td>
        </tr>
        <tr>
          <td class="t1">待测电阻值RX(Ω)</td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rwait1"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rwait1"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rwait2"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rwait2"/>
          </td>
          <td style="background-color: #fff;">
            <!-- <el-input
              v-model="xiangShiForm.rwait3"
              type="textarea"
              :autosize="{ minRows: 1, maxRows: 1}"
            ></el-input> -->
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="xiangShiForm.rwait3"/>
          </td>
        </tr>
      </table>
    </el-form>
    <el-form
      :model="formTable"
      :rules="rulesTable"
      ref="formTable"
      class="formTable"
    >
      <h4>二、选择题</h4>
      <!-- 选择题第一题 -->
      <div>
        1.在使用箱式直流电桥测量电阻时，为什么选取的比例臂一般应使单电桥的四个测量盘尽可能用上?
        (&nbsp;<span v-html="contentOne"></span>&nbsp;)
      </div>
      <el-form-item prop="xz1">
        <el-radio-group v-model="formTable.xz1">
          <el-radio label="A" @change="getRadioValOne">A.测量盘必须全用上</el-radio>
          <el-radio label="B" @change="getRadioValOne">B.比例臂的选取与测量盘使用个数无关</el-radio>
          <el-radio label="C" @change="getRadioValOne">C.使用一个测量盘时，读出的测量值精度最高</el-radio>
          <el-radio label="D" @change="getRadioValOne">D.读出的测量值有效位数多，测量精度有保证</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 选择题第二题 -->
      <div>2.为了提高电桥测量的灵敏度，应采取哪些措施?(&nbsp;<span v-html="contentTwo"></span>&nbsp;)</div>
      <el-form-item prop="xz2">
        <el-radio-group v-model="formTable.xz2">
          <el-radio label="A" @change="getRadioValTwo">A.提高电源电压</el-radio>
          <el-radio label="B" @change="getRadioValTwo">B.使用低灵敏度检流计</el-radio>
          <el-radio label="C" @change="getRadioValTwo">C.比例臂可以随意选取</el-radio>
          <el-radio label="D" @change="getRadioValTwo">D.不使用等臂电桥</el-radio>
        </el-radio-group>
      </el-form-item>
      <h4>三、判断题</h4>
      <!-- 判断题第一题 -->
      <div>
        1.因为电桥箱是设计生产精良的专业实验仪器，电桥箱中的检流计不用调零。
        <!-- (&nbsp;<span v-html="contentThree"></span>&nbsp;) -->
      </div>
      <el-form-item prop="pd1">
        <el-radio-group v-model="formTable.pd1">
          <el-radio label="0" @change="getRadioValThree">正确</el-radio>
          <el-radio label="1" @change="getRadioValThree">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 判断题第二题 -->
      <div>2.在电阻值的测量过程中，只用按下内接检流计开关这一个开关。
        <!-- (&nbsp;<span v-html="contentFour"></span>&nbsp;) -->
      </div>
      <el-form-item prop="pd2">
        <el-radio-group v-model="formTable.pd2">
          <el-radio label="0" @change="getRadioValFour">正确</el-radio>
          <el-radio label="1" @change="getRadioValFour">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submitButton"
          type="primary"
          plain
          @click="submitForm('xiangShiForm')"
          >
          提交
          </el-button>
          <br />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentOne: '',
      contentTwo: '',
      // contentThree: '',
      // contentFour: '',
      // 表格
      xiangShiForm: {
        ra1: '',
        ra2: '',
        ra3: '',
        rx: '',
        rx1: '',
        rx2: '',
        rx3: '',
        rb1: '',
        rb2: '',
        rb3: '',
        rchange1a: '',
        rchange2a: '',
        rchange3a: '',
        s1: '',
        s2: '',
        s3: '',
        s: '',
        rc1: '',
        rc2: '',
        rc3: '',
        rwait1: '',
        rwait2: '',
        rwait3: ''
      },
      // 选择题 + 判断题
      formTable: {
        xz1: "",
        xz2: "",
        pd1: "",
        pd2: "",
      },
      // 验证规则
      rulesTable: {
        xz1: [{ required: true, message: "请选择选项", trigger: "change" }],
        xz2: [{ required: true, message: "请选择选项", trigger: "change" }],
        pd1: [
          { required: true, message: "请选择选项", trigger: "change" },
        ],
        pd2: [
          { required: true, message: "请选择选项", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    async submitForm() {
      for (var key in this.xiangShiForm) {
        if (!this.xiangShiForm[key]) {
          this.$message.error("题目未做完！")
          return false
        }
      }
      this.$refs['formTable'].validate((valid) => {
        if (valid) {
          // alert("submit!");
        } else {
          // console.log("error submit!!");
          // return false;
          this.$message.error("题目未做完！")
          return false
        }
      })
      const student_id = localStorage.getItem("student_id")
      const { data: res } = await this.$http.post(
        "/api/xiangshi/luru",
        {
          student_id :student_id,
          ra1: this.xiangShiForm.ra1,
          ra2: this.xiangShiForm.ra2,
          ra3: this.xiangShiForm.ra3,
          rx: this.xiangShiForm.rx,
          rx1: this.xiangShiForm.rx1,
          rx2: this.xiangShiForm.rx2,
          rx3: this.xiangShiForm.rx3,
          rb1: this.xiangShiForm.rb1,
          rb2: this.xiangShiForm.rb2,
          rb3: this.xiangShiForm.rb3,
          rchange1a: this.xiangShiForm.rchange1a,
          rchange2a: this.xiangShiForm.rchange2a,
          rchange3a: this.xiangShiForm.rchange3a,
          s1: this.xiangShiForm.s1,
          s2: this.xiangShiForm.s2,
          s3: this.xiangShiForm.s3,
          s: this.xiangShiForm.s,
          rc1: this.xiangShiForm.rc1,
          rc2: this.xiangShiForm.rc2,
          rc3: this.xiangShiForm.rc3,
          rwait1: this.xiangShiForm.rwait1,
          rwait2: this.xiangShiForm.rwait2,
          rwait3: this.xiangShiForm.rwait3,
          xz1: this.formTable.xz1,
          xz2: this.formTable.xz2,
          pd1: this.formTable.pd1,
          pd2: this.formTable.pd2
        }
      )
      // console.log(res)
      if(res.data.res1 == false) {
        this.$message.error("请勿重复提交！");
        this.$router.push("/home");
      } else {
        if (res.code == 100) {
          this.$message.error("提交失败！");
        }
        if (res.code == 150) {
          this.$message.error("请勿重复提交！");
        }
        if (res.code == 422) {
          this.$message.error("请填完所有题目");
        }
        if (res.code == 200) {
          this.$message.success("提交成功！");
          // localStorage.setItem("state1", 2);
          this.$router.push("/home");
        }
      }
    },
    getRadioValOne () {
      // console.log(this.formTable.xz1);
      this.contentOne = this.formTable.xz1
    },
    getRadioValTwo () {
      // console.log(this.formTable.xz2);
      this.contentTwo = this.formTable.xz2
    },
    getRadioValThree () {
      // console.log(this.formTable.pd1);
      this.contentThree = this.formTable.pd1
    },
    getRadioValFour () {
      // console.log(this.formTable.pd2);
      this.contentFour = this.formTable.pd2
    }
  },
};
</script>

<style scoped>
.allStyle {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
}

.el-radio {
  display: block;
  /* height: 20px; */
  width: 50%;
  /* line-height: 20px; */
  /* padding: 5px; */
  margin-top: 5px;
  margin-bottom: 5px;
}

.el-radio-group {
  margin-top: 5px;
  margin-bottom: 5px;
}

.el-form-item__content .submitButton {
  width: 20%;
  display: block;
  margin: 0 auto;
}

table {
  border-collapse: collapse;
  border: 1px #525152 solid;
  width: 90%;
  margin: 0 auto;
  font-size: 17px;
  text-align: center;
}

th,
td {
  /* border-collapse: collapse; */
  border: 0.5px #525152 solid;
  text-align: center;
  /* font-size: 17px; */
  line-height: 30px;
}

/*模拟对角线*/
.out {
  border-top: 55px #d6d3d6 solid;
  /*上边框宽度等于表格第一行行高*/
  width: 0px;
  /*让容器宽度为0*/
  height: 0px;
  /*让容器高度为0*/
  border-left: 200px #EFEFEF solid;
  /*左边框宽度等于表格第一行第一格宽度*/
  position: relative;
  /*让里面的两个子容器绝对定位*/
}

/* 测量次数 */
b {
  font-style: normal;
  display: block;
  position: absolute;
  top: -50px;
  left: -90px;
  width: 100px;
}

/* 测量内容 */
em {
  font-style: normal;
  display: block;
  position: absolute;
  top: -30px;
  left: -200px;
  width: 100px;
}
input{
  background-color: #fff;
  border: none;
  text-align: center;
  width: 90%;
  font-size: 17px;
  /* color: #539aea; */
  }
input:focus{
  outline: none;
  /* background-color: #ECF5FF; */
  }
</style>
