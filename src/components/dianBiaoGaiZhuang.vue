<template>
    <div class="allStyle">
        <el-form
            :model="formTable"
            :rules="rulesTable"
            ref="formTable"
            class="formTable"
        >
            <h4>一、选择题</h4>
            <!-- 选择题第一题 -->
            <div>1.测量改装表内阻的方法，正确的是(&nbsp;<span v-html="contentOne"></span>&nbsp;)。</div>
            <el-form-item prop="xz1">
                <el-radio-group v-model="formTable.xz1">
                    <el-radio label="A" @change="getRadioValOne">A.电压法</el-radio>
                    <el-radio label="B" @change="getRadioValOne">B.替代法</el-radio>
                    <el-radio label="C" @change="getRadioValOne">C.等效法</el-radio>
                    <el-radio label="D" @change="getRadioValOne">D.外推法</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 选择题第二题 -->
            <div>2.以下关于电流表的表述正确的是(&nbsp;<span v-html="contentTwo"></span>&nbsp;)。</div>
            <el-form-item prop="xz2">
                <el-radio-group v-model="formTable.xz2">
                    <el-radio label="A" @change="getRadioValTwo">A.电流表的内阻较小，如果误用电流表去测电压，有烧毁电表的风险</el-radio>
                    <el-radio label="B" @change="getRadioValTwo">B.电流表的档位决定了它可通过的最小电流</el-radio>
                    <el-radio label="C" @change="getRadioValTwo">C.电流表可以用于测量电压，而无需切换到电压测试档</el-radio>
                    <el-radio label="D" @change="getRadioValTwo">D.电流表的内阻越大越好</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 选择题第三题 -->
            <div>3. 由于磁电式电表结构上的一些缺陷，使得电表在正常条件下测量依然存在误差。</div>
            <div>引起误差的主要原因有(&nbsp;<span v-html="contentThree"></span>&nbsp;)。</div>
            <el-form-item prop="xz3">
                <el-radio-group v-model="formTable.xz3">
                    <el-radio label="A" @change="getRadioValThree">A.转动机构的摩擦</el-radio>
                    <el-radio label="B" @change="getRadioValThree">B.弹簧的弹性线性不良</el-radio>
                    <el-radio label="C" @change="getRadioValThree">C.磁场分布不均匀</el-radio>
                    <el-radio label="D" @change="getRadioValThree">D.仪表盘刻度不精确</el-radio>
                    <el-radio label="E" @change="getRadioValThree">E.以上都有</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 选择题第四题 -->
            <div>4.标称电表满刻度时，改装的电表未满刻度或超过满刻度，这种情况扩程电阻是大还是小及其原因，以下描述不正确的是？
              (&nbsp;<span v-html="contentFour"></span>&nbsp;)</div>
            <el-form-item prop="xz4">
                <el-radio-group v-model="formTable.xz4">
                    <el-radio label="A" @change="getRadioValFour">A.对于改装的电流表，未满刻度时，扩程电阻小，因其分流大；</el-radio>
                    <el-radio label="B" @change="getRadioValFour">B.对于改装的电流表，超过满刻度时，扩程电阻大 ，因其分流小；</el-radio>
                    <el-radio label="C" @change="getRadioValFour">C.对于改装的电压表，未满刻度时，扩程电阻大 ，因其分压大；</el-radio>
                    <el-radio label="D" @change="getRadioValFour">D.对于改装的电压表，超过满刻度时，扩程电阻小 ，因其分压小；</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button
                    class="submitButton"
                    type="primary"
                    plain
                    @click="submitForm('formTable')"
                >提交</el-button>
                <br />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contentOne: '',
      contentTwo: '',
      contentThree: '',
      contentFour: '',
      formTable: {
        xz1: '',
        xz2: '',
        xz3: '',
        xz4: ''
      },
      rulesTable: {
        xz1: [{ required: true, message: '请选择选项', trigger: 'change' }],
        xz2: [{ required: true, message: '请选择选项', trigger: 'change' }],
        xz3: [{ required: true, message: '请选择选项', trigger: 'change' }],
        xz4: [{ required: true, message: '请选择选项', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // console.log(this.formTable);
      // console.log(this.formTable.xz1);
      // console.log(this.formTable.xz2);
      // console.log(this.formTable.xz3);
      // console.log(this.formTable.xz4);
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
        const { data: res } = await this.$http.post(
        "/api/dianbiao/luru",
        {
          xz1: this.formTable.xz1,
          xz2: this.formTable.xz2,
          xz3: this.formTable.xz3,
          xz4: this.formTable.xz4
        }
      );
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
            this.$router.push("/home");
          }
      }
      }
    })
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
      // console.log(this.formTable.xz3);
      this.contentThree = this.formTable.xz3
    },
    getRadioValFour () {
      // console.log(this.formTable.xz4);
      this.contentFour = this.formTable.xz4
    }
  }
}
</script>

<style>

.allStyle {
    height: 100%;
    width: 50%;
    min-width: 320px;
    margin: 0 auto;
}

.el-radio{
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
    margin:0 auto;
}
</style>
