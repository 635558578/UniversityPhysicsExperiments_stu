<template>
  <div class="all">
    <el-form :model="wanyongform" ref="wanyongform" class="demo-wanyongform">
      <h4>一、实验数据记录（每空3分，共75分）</h4>
      <div class="addmargin">
        <el-form-item>
          1. 待改装微安表参数记录 : <br />
          微安表满量程电流Ig=
          <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.one_ig" /> mA； 表头内阻Rg=
          <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.one_rg" /> Ω；<br />
          电池电压E= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.one_e" /> V；
        </el-form-item>
      </div>
      <div class="addmargin">
        2. 各电阻阻值设置计算（计算结果要求保留1位小数）
        <p class="addmargin">⑴分流电阻R1计算：</p>
        仅闭合转换开关1，此时分流电阻计算公式为：<br>

        <img
          class="photo"
          src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220902223432.png"
          alt=""
        />
        <br />
        带入Rg= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_rg" /> Ω；Ig=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_ig" /> mA；Im=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_im" /> mA； <br />
        计算出：R1=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_r1" /> Ω；<br />
        接入待测电流，得到：Ix=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_lx" /> mA；

        <p class="addmargin">
          为了后续改装电压档和欧姆档的方便，根据电路图，在扩程电流档实现后，可将整个电流扩程电路看作为：
        </p>
        内阻：Rn=Rg//R1 =
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_rn" /> Ω；量程Im=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_one_im2" />
        mA的电流表。<br />
        <p class="addmargin">⑵分压电阻R2计算：</p>
        仅闭合转换开关2，此时分压电阻计算公式为：<br />
        <img
          class="photo"
          src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220902223514.png"
           alt=""
        /><br />
        带入Vm= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_two_vm" /> V；Im=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_two_im" /> A；Rn=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_two_rn" /> Ω；<br />
        计算出R2=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_two_r2" /> Ω；<br />
        接入待测电压，得到：Vx==
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_two_vx" /> V；

        <p class="addmargin">⑶调零电阻R3计算（理论值）：</p>
        根据电路图，仅闭合转换开关3，短接红黑表笔，此时调零电阻计算公式为：<br />
        <img
          class="photo"
          src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220902223552.png"
           alt=""
        />
        <br />
        带入E= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_thr_e" /> V；Im=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_thr_im" /> A；Rn=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_thr_rn" /> Ω；<br />
        计算出R3= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_thr_r3" /> Ω；

        <p class="addmargin">⑷校准电阻R4计算（理论值）：</p>
        根据电路图及此微安表表盘刻度，闭合转换开关3和单刀开关，红黑表笔接100Ω电阻。此时校准电阻计算公式为：
        <img
          class="photo"
         src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220902223623.png"
          alt=""
        />
        <br />

        带入：E= <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_e" /> V；I3=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_i3" /> A；Rx=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_rx" /> Ω； R3+Rn=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_r3rn" /> Ω；<br />
        计算出R4=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_r4" /> Ω；<br />
        接入待测电阻，得到Rx=
        <input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="wanyongform.two_four_rx2" /> Ω；
      </div>

      <h4>二、思考题（共25分）</h4>
      <div>
        下图是小明同学根据万用表改装设计实验要求，搭建的电路测试实验截图，请问：
        <img
          src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220902223713.png"
          alt=""
        />
      </div>
      <p class="addmargin">1.指出图中各电阻箱的作用：（每空5分，共20分）</p>
      电阻箱1（ <input onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母" type="text" v-model="wanyongform.thir_one_one" style="width:100px;" /> ）
      电阻箱2 （
      <input onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母" type="text" v-model="wanyongform.thir_one_two"  style="width:100px;"/> ）<br />
      电阻箱3（ <input onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母" type="text" v-model="wanyongform.thir_one_three" style="width:100px;" /> ）
      电阻箱4 （
      <input onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母" type="text" v-model="wanyongform.thir_one_four"  style="width:100px;"/> ）<br />
      A. 调零电阻 B. 分流电阻 C. 分压电阻 D. 校准电阻
      <p class="addmargin">2.判断 T or F（每空2.5分，共5分）</p>
      ①实验测试前，微安表未机械调零。<input
      onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母"
        type="text"
        v-model="wanyongform.thir_two_one"
      />
      <br />
      ②实验测试中，在测量电流时，应该将单刀开关断开。<input
      onkeyup="this.value=this.value.replace(/[^A-Z]/g,'')" maxlength="1" placeholder="请填写大写字母"
        type="text"
        v-model="wanyongform.thir_two_two"
      />
      <h4>线上资源</h4>
      <p class="addmargin">
        1）在线实验报告系统链接：
        <a href="http://180.76.111.200/#/login "
          >http://180.76.111.200/#/login</a
        >
      </p>
      <p class="addmargin">
        2）在线资源链接：<a href="FTP://ftp.cs.nsu.edu.cn/大学物理实验"
          >FTP://ftp.cs.nsu.edu.cn/大学物理实验</a
        >
      </p>
      <el-form-item>
        <el-button class="btn" type="primary" @click="onsubmit('wanyongform')"
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
      wanyongform: {
        one_ig: "",
        one_rg: "",
        one_e: "",
        two_one_rg: "",
        two_one_ig: "",
        two_one_im: "",
        two_one_r1: "",
        two_one_lx: "",
        two_one_rn: "",
        two_one_im2: "",
        two_two_vm: "",
        two_two_im: "",
        two_two_rn: "",
        two_two_r2: "",
        two_two_vx: "",
        two_thr_e: "",
        two_thr_im: "",
        two_thr_rn: "",
        two_thr_r3: "",
        two_four_e: "",
        two_four_i3: "",
        two_four_rx: "",
        two_four_r3rn: "",
        two_four_r4: "",
        two_four_rx2: "",
        thir_one_one: "",
        thir_one_two: "",
        thir_one_three: "",
        thir_one_four: "",
        thir_two_one: "",
        thir_two_two: "",
      },
    };
  },
  methods: {
    async onsubmit() {
      for (var key in this.wanyongform) {
        if (!this.wanyongform[key]) {
          this.$message.error("题目未做完！");
          return false;
        }
      }
      const { data: res } = await this.$http.post(
        "/api/wanyongbiao/luru",
        this.wanyongform
      );
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
            this.$router.push("/home");
          }
      }
    },
  },
};
</script>

<style scoped>
.photo {
  height: 80px;
  margin: 10px;
  float: none;
  margin-left: 100px;
  background-color: rgba(231, 231, 231, 0.663);
}
.addmargin {
  margin: 10px 0px;
}

.average_dcm {
  position: absolute;
  width: 160px;
  top: 35px;
  left: 330px;
  height: 165px;
}

td,
th {
  border: 0.2px solid rgb(15, 15, 15);
}
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
input {
  width: 92px;
}
</style>
