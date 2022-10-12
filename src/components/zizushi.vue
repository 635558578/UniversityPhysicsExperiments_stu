<template>
  <div class="all">
    <!-- 五：实验内容及实验数据记录与处理 -->
    <div>
            <div style=" background-color: #EEEEEE;padding: 2%;border-radius: 3px;text-align: left;min-width: 600px;">
                <div>
                    <div>
                        <!-- 1.自组式直流电桥测量电阻值 -->
                        <table border="1" cellpadding="5" cellspacing="0" style="margin: 0 auto;text-align: center;">
                            <tr>
                                <th colspan="8" style="text-align: left;">1.自组式直流电桥测量电阻值</th>
                            </tr>
                            <tr>
                            <th style="width: 200px;padding: 0;">
                                <div style=" border-top: 55px #D6D3D6 solid;width: 0px;height: 0px;border-left: 200px #BDBABD solid;position: relative;">
                                    <b style="font-style: normal;display: block;position: absolute;top: -50px;left: -90px;width: 100px;">测量次数</b>
                                    <em style="font-style: normal;display: block;position: absolute;top: -30px;left: -200px;width: 100px;">测量内容</em>
                                </div>
                            </th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th colspan="3">测量结果</th>
                            </tr>
                            <tr>
                                <td>R1(Ω)</td>
                                <td>500</td>
                                <td>2000</td>
                                <td>100</td>
                                <td rowspan="4" style="width: 10%">RX=</td>
                                <td rowspan="4" style="width: 10%"><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx"></el-input></td>
                                <td rowspan="4" style="width: 10%">Ω</td>
                            </tr>
                            <tr>
                                <td>R2(Ω)</td>
                                <td>500</td>
                                <td>2000</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>电阻臂R0(Ω)</td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra1"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra2"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra3"></el-input></td>
                            </tr>
                            <tr>
                            <td>待测电阻值RX(Ω)</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_a1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_a2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_a3"></el-input></td>
                            </tr>
                        </table>
                        <!-- 2.测量并计算自组式直流电桥的灵敏度 -->
                        <table border="1" cellpadding="5" cellspacing="0" style="margin: 0 auto;text-align: center;">
                            <tr>
                                <th colspan="8" style="text-align: left;">2.测量并计算自组式直流电桥的灵敏度</th>
                            </tr>
                            <tr>
                            <th style="width: 200px;padding: 0;">
                                <div style=" border-top: 55px #D6D3D6 solid;width: 0px;height: 0px;border-left: 200px #BDBABD solid;position: relative;">
                                    <b style="font-style: normal;display: block;position: absolute;top: -50px;left: -90px;width: 100px;">测量次数</b>
                                    <em style="font-style: normal;display: block;position: absolute;top: -30px;left: -200px;width: 100px;">测量内容</em>
                                </div>
                            </th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th colspan="3">测量结果</th>
                            </tr>
                            <tr>
                            <td>电阻臂R0(Ω)</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb3"></el-input></td>
                            <td rowspan="4" style="width: 10%">S=</td>
                            <td rowspan="4" style="width: 10%"><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.s"></el-input></td>
                            </tr>
                            <tr>
                                <td>偏转格数Δn</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>变化量ΔR0(Ω)</td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra_change1"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra_change2"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ra_change3"></el-input></td>
                                </tr>
                            <tr>
                            <td>电桥灵敏度S</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.s1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.s2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.s3"></el-input></td>
                            </tr>
                        </table>
                        <!-- 3.自组式直流电桥测量电阻值 -->
                        <table border="1" cellpadding="5" cellspacing="0" style="margin: 0 auto;text-align: center;">
                            <tr>
                                <th colspan="8" style="text-align: left;">3.自组式直流电桥测量电阻值</th>
                            </tr>
                            <tr>
                            <th style="width: 200px;padding: 0;">
                                <div style=" border-top: 55px #D6D3D6 solid;width: 0px;height: 0px;border-left: 200px #BDBABD solid;position: relative;">
                                    <b style="font-style: normal;display: block;position: absolute;top: -50px;left: -90px;width: 100px;">测量次数</b>
                                    <em style="font-style: normal;display: block;position: absolute;top: -30px;left: -200px;width: 100px;">测量内容</em>
                                </div>
                            </th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th colspan="3">测量结果</th>
                            </tr>
                            <tr>
                                <td>R1(Ω)</td>
                                <td>200</td>
                                <td>500</td>
                                <td>1000</td>
                                <td rowspan="4" style="width: 10%">RX=</td>
                                <td rowspan="4" style="width: 10%"><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rxx"></el-input></td>
                                <td rowspan="4" style="width: 10%">Ω</td>
                            </tr>
                            <tr>
                                <td>R2(Ω)</td>
                                <td>100</td>
                                <td>1000</td>
                                <td>4000</td>
                            </tr>
                            <tr>
                                <td>电阻臂R0(Ω)</td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rc1"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rc2"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rc3"></el-input></td>
                            </tr>
                            <tr>
                            <td>待测电阻值RX(Ω)</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_b1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_b2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rx_b3"></el-input></td>
                            </tr>
                        </table>
                        <!-- 4.测量并计算自组式直流电桥的灵敏度 -->
                        <table border="1" cellpadding="5" cellspacing="0" style="margin: 0 auto;text-align: center;">
                            <tr>
                                <th colspan="8" style="text-align: left;">4.测量并计算自组式直流电桥的灵敏度</th>
                            </tr>
                            <tr>
                            <th style="width: 200px;padding: 0;">
                            <div style=" border-top: 55px #D6D3D6 solid;width: 0px;height: 0px;border-left: 200px #BDBABD solid;position: relative;">
                                <b style="font-style: normal;display: block;position: absolute;top: -50px;left: -90px;width: 100px;">测量次数</b>
                                <em style="font-style: normal;display: block;position: absolute;top: -30px;left: -200px;width: 100px;">测量内容</em>
                            </div>
                            </th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th colspan="3">测量结果</th>
                            </tr>
                            <tr>
                            <td>电阻臂R0(Ω)</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rd1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rd2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rd3"></el-input></td>
                            <td rowspan="4" style="width: 10%">S=</td>
                            <td rowspan="4" style="width: 10%"><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ss"></el-input></td>
                            </tr>
                            <tr>
                                <td>偏转格数Δn</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>变化量ΔR0(Ω)</td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb_change1"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb_change2"></el-input></td>
                                <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.rb_change3"></el-input></td>
                                </tr>
                            <tr>
                            <td>电桥灵敏度S</td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ss1"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ss2"></el-input></td>
                            <td><el-input onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="tableState.ss3"></el-input></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <el-form
    :model="Form"
    :rules="rules"
    ref="Form"
    class="Form"
    >
      <h4>一、选择题</h4>
      <div>1.在使用箱式直流电桥测量电阻时，为什么选取的比例臂一般应使单电桥的四个测量盘尽可能用上？(  )</div>
      <el-form-item prop="one">
        <el-radio-group v-model="Form.one">
          <el-radio label="A">A. 测量盘必须全用上</el-radio>
          <el-radio label="B">B. 比例臂的选取与测量盘使用个数无关</el-radio>
          <el-radio label="C">C. 使用一个测量盘时，读出的测量值精度最高</el-radio>
          <el-radio label="D">D. 读出的测量值有效位数多，测量精度有保证</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>2.为了提高电桥测量的灵敏度，应采取哪些措施?:(  )</div>
      <el-form-item prop="two">
        <el-radio-group v-model="Form.two">
          <el-radio label="A">A. 提高电源电压</el-radio>
          <el-radio label="B">B. 使用低灵敏度检流计</el-radio>
          <el-radio label="C">C. 比例臂可以随意选取</el-radio>
          <el-radio label="D">D. 不使用等臂电桥</el-radio>
        </el-radio-group>
      </el-form-item>
          <h4>一、判断题</h4>
      <div>1.因为电桥箱是设计生产精良的专业实验仪器，电桥箱中的检流计不用调零。( )</div>
       <el-form-item prop="pone">
        <el-radio-group v-model="Form.pone">
          <el-radio label="0">正确</el-radio>
          <el-radio label="1">错误</el-radio>
        </el-radio-group>
      </el-form-item>

      <div>2.在电阻值的测量过程中，只用按下内接检流计开关这一个开关。( )</div>
      <el-form-item prop="ptwo">
        <el-radio-group v-model="Form.ptwo">
          <el-radio label="0">正确</el-radio>
          <el-radio label="1">错误</el-radio>
        </el-radio-group>
      </el-form-item>


      <el-form-item class="footer">
        <el-button class="btn" type="primary" @click="send(Form)"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableState: {
          ra1:'',
          ra2:'',
          ra3:'',
          rx_a1:'',
          rx_a2:'',
          rx_a3:'',
          rx:'',


          rb1:'',
          rb2:'',
          rb3:'',
          ra_change1:'',
          ra_change2:'',
          ra_change3:'',
          s1:'',
          s2:'',
          s3:'',
          s:'',


          rc1:'',
          rc2:'',
          rc3:'',
          rx_b1:'',
          rx_b2:'',
          rx_b3:'',
          rxx:'',


          rd1:'',
          rd2:'',
          rd3:'',
          rb_change1:'',
          rb_change2:'',
          rb_change3:'',
          ss1:'',
          ss2:'',
          ss3:'',
          ss:'',


          xz1:'',
          xz2:'',
          pd1:'',
          pd2:'',
          grade_xp:'',
        },
        Form: {
          grade_xp:0,
          one: "",
          two: "",
          pone: "",
          ptwo: "",
        },
        rules: {
          one: [{ required: true, message: "请选择", trigger: "change" }],
          two: [{ required: true, message: "请选择", trigger: "change" }],
          pone: [{ required: true, message: "请选择", trigger: "change" }],
          ptwo: [{ required: true, message: "请选择", trigger: "change" }],
        }
      }
    },
    methods: {
      async send(val) {
        var ra1 = this.tableState.ra1;
        var ra2 = this.tableState.ra2;
        var ra3 = this.tableState.ra3;
        var rx_a1 = this.tableState.rx_a1;
        var rx_a2 = this.tableState.rx_a2;
        var rx_a3 = this.tableState.rx_a3;
        var rx = this.tableState.rx;
        var rb1 = this.tableState.rb1;
        var rb2 = this.tableState.rb2;
        var rb3 = this.tableState.rb3;
        var ra_change1 = this.tableState.ra_change1;
        var ra_change2 = this.tableState.ra_change2;
        var ra_change3 = this.tableState.ra_change3;
        var s1 = this.tableState.s1;
        var s2 = this.tableState.s2;
        var s3 = this.tableState.s3;
        var s = this.tableState.s;
        var rc1 = this.tableState.rc1;
        var rc2 = this.tableState.rc2;
        var rc3 = this.tableState.rc3;
        var rx_b1 = this.tableState.rx_b1;
        var rx_b2 = this.tableState.rx_b2;
        var rx_b3 = this.tableState.rx_b3;
        var rxx = this.tableState.rxx;
        var rd1 = this.tableState.rd1;
        var rd2 = this.tableState.rd2;
        var rd3 = this.tableState.rd3;
        var rb_change1 = this.tableState.rb_change1;
        var rb_change2 = this.tableState.rb_change2;
        var rb_change3 = this.tableState.rb_change3;
        var ss1 = this.tableState.ss1;
        var ss2 = this.tableState.ss2;
        var ss3 = this.tableState.ss3;
        var ss = this.tableState.ss;
        var xz1 =val.one;
        var xz2 =val.two;
        var pd1 =val.pone;
        var pd2 =val.ptwo;
        var grade_xp = this.tableState.grade_xp;
        var studentId = window.localStorage.getItem("StudentId");
        if(val.one == 'A') {
          this.Form.grade_xp += 10
        }
        if(val.two == 'C') {
          this.Form.grade_xp += 10
        }
        if(val.pone == '0') {
          this.Form.grade_xp += 6
        }
        if(val.ptwo == '1') {
          this.Form.grade_xp += 6
        }
        const { data: res } = await this.$http.post('/api/zizu/luru',{
            student_id: studentId,
            grade_xp: this.Form.grade_xp,
            ra1:ra1,
            ra2:ra2,
            ra3:ra3,
            rx_a1:rx_a1,
            rx_a2:rx_a2,
            rx_a3:rx_a3,
            rx:rx,

            rb1:rb1,
            rb2:rb2,
            rb3:rb3,
            ra_change1:ra_change1,
            ra_change2:ra_change2,
            ra_change3:ra_change3,
            s1:s1,
            s2:s2,
            s3:s3,
            s:s,

            rc1:rc1,
            rc2:rc2,
            rc3:rc3,
            rx_b1:rx_b1,
            rx_b2:rx_b2,
            rx_b3:rx_b3,
            rxx:rxx,

            rd1:rd1,
            rd2:rd2,
            rd3:rd3,
            rb_change1:rb_change1,
            rb_change2:rb_change2,
            rb_change3:rb_change3,
            ss1:ss1,
            ss2:ss2,
            ss3:ss3,
            ss:ss,

            xz1:xz1,
            xz2:xz2,
            pd1:pd1,
            pd2:pd2,
        })
        // console.log(res);
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
    }
  }
</script>

<style scoped>
.all {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  text-align: left;
}
.btn {
  width: 20%;
  margin-bottom: 2vw;
}
.footer {
  text-align: center;
}
.el-radio-group {
  margin: 10px;
}
.el-radio {
  padding: 5px;
}
</style>
