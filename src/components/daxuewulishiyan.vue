<template>
  <div class="all">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <h4>一、判断题（每题5分，共40分）</h4>
      <div>
        1.当被测量叮以进行重复测量时，常用重复测量的方法来减少测量结果的偶然误差。
      </div>
      <el-form-item prop="one">
        <el-radio-group v-model="ruleForm.one">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>2.白然数20的有效位数为2位。</div>
      <el-form-item prop="two">
        <el-radio-group v-model="ruleForm.two">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        3.已知测量某电阻结果为：R=85.32±0.05Ω，表明测量电阻的真值位于区间(85.27~85.3)之外的可能性很小。
      </div>
      <el-form-item prop="three">
        <el-radio-group v-model="ruleForm.three">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        4.单次测量结果的不确定度往往用仪器允差（Δ仪）来表示，而不计其A类不确定度u(A)。
      </div>
      <el-form-item prop="four">
        <el-radio-group v-model="ruleForm.four">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        5.有测量就有误差，误差伴随实验过程始终，从方案设计、仪器选择到结果处理，均离不开误差分析。
      </div>
      <el-form-item prop="five">
        <el-radio-group v-model="ruleForm.five">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>6.实验结果应尽可能保留多的运算位数，以表示测量结果的精确度。</div>
      <el-form-item prop="six">
        <el-radio-group v-model="ruleForm.six">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        7.可用仪器最小分度值或最小分度值的一半作为该仪器的单次测量误差。
      </div>
      <el-form-item prop="seven">
        <el-radio-group v-model="ruleForm.seven">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        8.测量中，0.30m等于30cm，但不等于300mm；原因是300mm是三位有效数字，正确的写法是：0.30m=30cm=3.0×10^2mm。
      </div>
      <el-form-item prop="eight">
        <el-radio-group v-model="ruleForm.eight">
          <el-radio label="T">正确</el-radio>
          <el-radio label="F">错误</el-radio>
        </el-radio-group>
      </el-form-item>

      <h4>二、选择题（每题5分，共60分）</h4>
      <div>
        1.被测量量的真值是一个理想概念，一般来说真值是不知道的（否则就不必进行测量了）。为了对测量结果的误差进行估算，我们用约定真值来代替真值求误差。以下不能被视为真值的是：(
        )
      </div>
      <el-form-item prop="cone">
        <el-radio-group v-model="ruleForm.cone">
          <el-radio label="A">A. 算数平均值</el-radio>
          <el-radio label="B">B. 相对真值</el-radio>
          <el-radio label="C">C. 理论值</el-radio>
          <el-radio label="D">D. 某次测量值</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        2. 测量误差可分为系统误差、随机误差和粗大误差，属于系统误差的是：( )
      </div>
      <el-form-item prop="ctwo">
        <el-radio-group v-model="ruleForm.ctwo">
          <el-radio label="A"
            >A. 由于实验所依据的理论和公式的近似性而引起的测量误差</el-radio
          >
          <el-radio label="B">B. 由于多次测量结果的随机性而产生的误差</el-radio>
          <el-radio label="C"
            >C. 由于量具没有调整到理想状态，而引起的测量误差</el-radio
          >
          <el-radio label="D"
            >D. 由于实验者在判断和估计读数上的变动性而产生的误差</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <div>
        3.某同学计算得某一体积的最佳值为：`V=3.415678cm³，不确定度U(V)=0.064352cm³，则应将结果表述为：(
        )
      </div>
      <el-form-item prop="cthree">
        <el-radio-group v-model="ruleForm.cthree">
          <el-radio label="A">A. V=(3.415678±0.064352) cm³</el-radio><br />
          <el-radio label="B">B. V=(3.41±0.06) cm³</el-radio><br />
          <el-radio label="C">C. V=3.42±0.06 (cm³)</el-radio><br />
          <el-radio label="D">D. V=3.42±0.07 (cm³)</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>4.计算圆的周长时，圆的半径R=5.23cm，则π取（　 ）最合适。</div>
      <el-form-item prop="cfour">
        <el-radio-group v-model="ruleForm.cfour">
          <el-radio label="A">A. 3.14</el-radio>
          <el-radio label="B">B. 3.14156</el-radio>
          <el-radio label="C">C. 3.142</el-radio>
          <el-radio label="D">D. 3.1</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>5. 请选择出表达正确者：( )</div>
      <el-form-item prop="cfive">
        <el-radio-group v-model="ruleForm.cfive">
          <el-radio label="A">A. h=(10.40±0.35) cm</el-radio>
          <el-radio label="B">B. h=(10.4±0.3) cm</el-radio>
          <el-radio label="C">C. h=10.40cm±0.35cm</el-radio>
          <el-radio label="D">D. h=10.4cm±0.3mm</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        6.测定某物理量为589.3mm，该量真值为593.3mm，则该测量量的绝对误差为( )
      </div>
      <el-form-item prop="csix">
        <el-radio-group v-model="ruleForm.csix">
          <el-radio label="A">A. -4.0</el-radio>
          <el-radio label="B">B. 4.0</el-radio>
          <el-radio label="C">C. 4</el-radio>
          <el-radio label="D">D. -4</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        7.指出下列有效数字的位数( )
        <br />
        0.005m是 ________ 位
        <br />
        2.9×10^6mm是 ______ 位
        <br />
        100.00mg是 ______ 位
        <br />
        自然数10是 _________ 位
      </div>
      <el-form-item prop="cseven">
        <el-radio-group v-model="ruleForm.cseven">
          <el-radio label="A">A. 1,2,5,2</el-radio>
          <el-radio label="B">B. 3,2,5,2</el-radio>
          <el-radio label="C">C. 1,2,5,无穷</el-radio>
          <el-radio label="D">D. 3,2,5,无穷</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>8.遵循有效数字的传递法则，计算78.930×50÷100=________;</div>
      <el-form-item prop="ceight">
        <el-radio-group v-model="ruleForm.ceight">
          <el-radio label="A">A. 39</el-radio>
          <el-radio label="B">B. 39.15</el-radio>
          <el-radio label="C">C. 39.465</el-radio>
          <el-radio label="D">D. 39.5</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>9.自然数2、20、253的有效位数分别为____________位</div>
      <el-form-item prop="cnine">
        <el-radio-group v-model="ruleForm.cnine">
          <el-radio label="A">A. 1位、 2位和3位</el-radio>
          <el-radio label="B">B. 都是无穷位</el-radio>
          <el-radio label="C">C. 都是3位</el-radio>
          <el-radio label="D">D. 都是1位</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>10.作图时在纵横坐标上不仅应标出分度值，还要标出( )</div>
      <el-form-item prop="cten">
        <el-radio-group v-model="ruleForm.cten">
          <el-radio label="A">A. 物理量和单位</el-radio>
          <el-radio label="B">B. 大小和物理量</el-radio>
          <el-radio label="C">C. 大小和单位</el-radio>
          <el-radio label="D">D. 物理量、单位和大小</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>
        11.凡可用仪器量具直接读出某物理量值称为_____测量，例如___________；在直接测出与被测量具有一定函数关系的几个量后,通过函数关系式确定被测量的大小的测量称为_______测量，例如________________.
      </div>
      <el-form-item prop="celeven">
        <el-radio-group v-model="ruleForm.celeven">
          <el-radio label="A">A. 间接测量、长度、直接测量、速度</el-radio>
          <el-radio label="B">B. 直接测量、质量、间接测量、速度</el-radio>
          <br />
          <el-radio label="C">C. 直接测量、速度、间接测量、长度</el-radio>
          <el-radio label="D">D. 间接测量、质量、直接测量、时间</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>12.下列测量结果表达式正确的是( )</div>
      <el-form-item prop="ctwelve">
        <el-radio-group v-model="ruleForm.ctwelve">
          <el-radio label="A">A. Y=(1.89±0.03)×10^10Pa</el-radio>
          <el-radio label="B">B. R=(5.56±0.008)mm</el-radio>
          <el-radio label="C">C. X=(889±100)mm</el-radio>
          <el-radio label="D">D. L=(1.89±0.032)mm</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="send('ruleForm')"
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
      ruleForm: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        cone: "",
        ctwo: "",
        cthree: "",
        cfour: "",
        cfive: "",
        csix: "",
        cseven: "",
        ceight: "",
        cnine: "",
        cten: "",
        celeven: "",
        ctwelve: "",
      },
      rules: {
        one: [{ required: true, message: "请选择", trigger: "change" }],
        two: [{ required: true, message: "请选择", trigger: "change" }],
        three: [{ required: true, message: "请选择", trigger: "change" }],
        four: [{ required: true, message: "请选择", trigger: "change" }],
        five: [{ required: true, message: "请选择", trigger: "change" }],
        six: [{ required: true, message: "请选择", trigger: "change" }],
        seven: [{ required: true, message: "请选择", trigger: "change" }],
        eight: [{ required: true, message: "请选择", trigger: "change" }],
        cone: [{ required: true, message: "请选择", trigger: "change" }],
        ctwo: [{ required: true, message: "请选择", trigger: "change" }],
        cthree: [{ required: true, message: "请选择", trigger: "change" }],
        cfour: [{ required: true, message: "请选择", trigger: "change" }],
        cfive: [{ required: true, message: "请选择", trigger: "change" }],
        csix: [{ required: true, message: "请选择", trigger: "change" }],
        cseven: [{ required: true, message: "请选择", trigger: "change" }],
        ceight: [{ required: true, message: "请选择", trigger: "change" }],
        cnine: [{ required: true, message: "请选择", trigger: "change" }],
        cten: [{ required: true, message: "请选择", trigger: "change" }],
        celeven: [{ required: true, message: "请选择", trigger: "change" }],
        ctwelve: [{ required: true, message: "请选择", trigger: "change" }],
      },
    };
  },
  methods: {
    send(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data: res } = await this.$http.post(
            "/api/completion1/completion1",
            this.ruleForm
          );
          if (res.code == 100) {
            this.$message.error("提交失败！");
          }
          if (res.code == 150) {
            this.$message.error("请勿重复提交！");
            this.$router.push("/home");
          }
          if (res.code == 200) {
            this.$message.success("提交成功！");
            // localStorage.setItem("state1", 2);
            this.$router.push("/home");
          }
        } else {
          this.$message.error("题目未答完！");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.all {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
}
.btn {
  width: 20%;
  margin-left: 40%;
  margin-bottom: 2vw;
}
.el-radio-group {
  margin: 10px;
}
.el-radio {
  padding: 5px;
}
</style>
