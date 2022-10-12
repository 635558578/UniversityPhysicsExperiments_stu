<template>
  <div class="all">
    <el-form :model="danbaiform" ref="danbaiform" class="demo-danbaiform">
      <h4>一、数据处理</h4>
      <!-- <div class="addmargin">
        <el-form-item>
          1. 周期的计算 :
          <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
            type="text"
            v-model="danbaiform.zq"
            class="border:none;outline: none;"
          />（保留三位小数，5分）
        </el-form-item>
      </div> -->
      <div class="addmargin">

        <p class="addmargin">
          <!-- 2. 摆长的计算 : <br /> -->
          摆线长度测量数据如下表：
        </p>

         <table border=" 1 " cellspacing="0 " style="width: 675px" class="table">
          <tr>
            <th style="width: 172px">测量次数</th>
            <th style="width: 172px">每次数据 l (cm)</th>
            <th style="width: 172px">
              平均值
              <img
                src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210100941728.png"
                style="height: 20px"
              />(cm)
            </th>

            <th style="width: 172px">
              <img
                src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210100942345.png"
                style="height: 20px;margin-top:5px"
              />(cm)
            </th>
          </tr>
          <tr>
            <th>1</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l1" /></th>
            <th class="nobboder"><input disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll1" /></th>
          </tr>
          <tr>
            <th>2</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l2" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll2" /></th>
          </tr>
          <tr>
            <th>3</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l3" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll3" /></th>
          </tr>
          <tr>
            <th>4</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l4" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll4" /></th>
          </tr>
          <tr>
            <th>5</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l5" /></th>
            <th class="notboder nobboder"><input disabled  style="background-color: #fff" type="text"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll5" /></th>
          </tr>
          <tr>
            <th>6</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.l6" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.ll6" /></th>
          </tr>
          <!-- 平均值框 -->
          <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
            type="text"
            v-model="danbaiform.ave_l"
            style="border: 0px solid; background-color: rbg(1, 1, 1, 0)"
            class="average_dcm"
          />
        </table>

        <p class="addmargin">
          <!-- 2. 摆长的计算 : <br /> -->
          钢球直径的测量数据如下表：
        </p>
        <table border=" 1 " cellspacing="0 " style="width: 675px" class="table">
          <tr>
            <th style="width: 172px">测量次数</th>
            <th style="width: 172px">每次数据 d (cm)</th>
            <th style="width: 172px">
              平均值
              <img
                src="https://xwysbucket-bed.oss-cn-hangzhou.aliyuncs.com/img/one.png"
                style="height: 25px"
              />(cm)
            </th>

            <th style="width: 172px">
              △d=|d-<img
                src="https://xwysbucket-bed.oss-cn-hangzhou.aliyuncs.com/img/one.png"
                style="height: 25px"
              />|(cm)
            </th>
          </tr>
          <tr>
            <th>1</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d1" /></th>
            <th class="nobboder"><input disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd1" /></th>
          </tr>
          <tr>
            <th>2</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d2" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd2" /></th>
          </tr>
          <tr>
            <th>3</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d3" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd3" /></th>
          </tr>
          <tr>
            <th>4</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d4" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd4" /></th>
          </tr>
          <tr>
            <th>5</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d5" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd5" /></th>
          </tr>
          <tr>
            <th>6</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.d6" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.dd6" /></th>
          </tr>
          <!-- <tr> -->
            <!-- <th class="norboder">
              <img
                src="https://xwysbucket-bed.oss-cn-hangzhou.aliyuncs.com/img/three.png"
                style="width: 50px; position: relative; left: 65px"
              />
            </th>
            <th class="nolboder"></th>
            <th class="notboder">
              <input readonly />
            </th> -->
            <!-- <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.average_sd" /></th> -->
          <!-- </tr> -->
          <!-- 平均值框 -->
          <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
            type="text"
            v-model="danbaiform.ave_d"
            style="border: 0px solid; background-color: rbg(1, 1, 1, 0)"
            class="average_dcm"
          />
        </table>

         <p class="addmargin">
          <!-- 2. 摆长的计算 : <br /> -->
          周期测量数据如下表：
        </p>

         <table border=" 1 " cellspacing="0 " style="width: 675px" class="table">
          <tr>
            <th style="width: 172px">测量次数</th>
            <th style="width: 172px">每次数据 T (s)</th>
            <th style="width: 172px">
              平均值
              <img
                src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101009221.png"
                style="height: 20px"
              />
            </th>

            <th style="width: 172px">
              <img
                src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101010486.png"
                style="height: 20px;margin-top:5px"
              />
            </th>
          </tr>
          <tr>
            <th>1</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t1" /></th>
            <th class="nobboder"><input disabled  style="background-color: #fff"/></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt1" /></th>
          </tr>
          <tr>
            <th>2</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t2" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt2" /></th>
          </tr>
          <tr>
            <th>3</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t3" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt3" /></th>
          </tr>
          <tr>
            <th>4</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t4" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt4" /></th>
          </tr>
          <tr>
            <th>5</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t5" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt5" /></th>
          </tr>
          <tr>
            <th>6</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.t6" /></th>
            <th class="notboder nobboder"><input type="text" disabled  style="background-color: #fff" /></th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="danbaiform.tt6" /></th>
          </tr>
          <!-- 平均值框 -->
          <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
            type="text"
            v-model="danbaiform.ave_t"
            style="border: 0px solid; background-color: rbg(1, 1, 1, 0)"
            class="average_dcm"
          />
        </table>

        <p>所以有效摆长为：<img src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101014855.png" style="height: 25px">= <input type="text" onkeyup="this.value=this.value.replace(/\D*(\d*)(\.?)(\d{0,3})\d*/,'$1$2$3')" v-model="danbaiform.l" /> (4分) (摆长平均值与小球半径平均之和，保留两位小数)</p>

        <img
          src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101021990.png"
          style="height: 35px"
        />= <input type="text" onkeyup="this.value=this.value.replace(/\D*(\d*)(\.?)(\d{0,3})\d*/,'$1$2$3')" v-model="danbaiform.ave_zq" />  (4分) (周期平均值保留三位小数)<br />

        <img
          src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101022233.png"
        />=
        <input type="text" onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="danbaiform.ave_bc" /> (4分) (保留两位有效数字)<br />

        <img
          src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101025175.png"
        />=
        <input type="text" onkeyup="value=value.replace(/[^\d.]/g,'')" v-model="danbaiform.ave_zq2" /> (4分) (保留两位有效数字)<br />

      </div>
      <div>
        <p class="addmargin">重力加速度的计算: 根据最后表达式<img src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101041681.png">,要求计算过程<img src="https://zj-cloudimg.oss-cn-chengdu.aliyuncs.com/img/202210101043205.png">的计算过程 (共30分):</p>
        <!-- 输入文本 -->
        <textarea v-model="danbaiform.res"></textarea>
      </div>

      <h4>二、选择题（每题5分，共15分）</h4>
      <div>1. 用单摆测定重力加速度g时，下面哪些做法可以减小误差？( )</div>
      <el-form-item>
        <el-radio-group v-model="danbaiform.xz1">
          <el-radio label="A">A. 摆线长度不宜太长，取0.1m左右为宜</el-radio
          ><br />
          <el-radio label="B"
            >B. 因为周期跟摆球质量无关，所以摆球用木球或铁球都一样</el-radio
          ><br />
          <el-radio label="C">C. 测摆长必须从悬点到摆球球心</el-radio><br />
          <el-radio label="D">D. 测周期必须用n次全振动总时间除以n-1</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>2. 实验中某同学每次的测定值都比其它同学偏大，其原因可能是( )</div>
      <el-form-item>
        <el-radio-group v-model="danbaiform.xz2">
          <el-radio label="A">A. 实验室处在高山上，离海平面太高</el-radio><br />
          <el-radio label="B">B. 单摆所用的摆球太重</el-radio><br />
          <el-radio label="C"
            >C. 测出n次全振动的时间为t，误作为(n＋1)次全振动的时间进行计算 </el-radio
          ><br />
          <el-radio label="D">D. 以摆球半径和摆线之和作为摆长来计算</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>3.如果测得g值偏小，不可能原因是( )</div>
      <el-form-item>
        <el-radio-group v-model="danbaiform.xz3">
          <el-radio label="A">A. 测摆线长时摆线拉得过紧</el-radio><br />
          <el-radio label="B">B. 摆线上端悬点未固定好，摆动中出现松动</el-radio
          ><br />
          <el-radio label="C">C. 计算摆长时，忘记了加小球半径</el-radio><br />
          <el-radio label="D">D. 读单摆周期时，读数偏大</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="onsubmit('danbaiform')"
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
      danbaiform: {
        // zq: "",
        // average_d: "",
        // average_sd: "",
        // l: "",
        d1: "",
        dd1: "",
        d2: "",
        dd2: "",
        d3: "",
        dd3: "",
        d4: "",
        dd4: "",
        d5: "",
        dd5: "",
        d6: "",
        dd6: "",
        xz1: "",
        xz2: "",
        xz3: "",
        l1:"",
        l2:"",
        l3:"",
        l4:"",
        l5:"",
        l6:"",
        ll1:"",
        ll2:"",
        ll3:"",
        ll4:"",
        ll5:"",
        ll6:"",
        t1:"",
        t2:"",
        t3:"",
        t4:"",
        t5:"",
        t6:"",
        tt1:"",
        tt2:"",
        tt3:"",
        tt4:"",
        tt5:"",
        tt6:"",
        ave_t:"",
        ave_l:"",
        ave_d:"",
        l:"",
        ave_zq:"",
        ave_bc:"",
        ave_zq2:"",
        res:"",
      },
    };
  },
  methods: {
    async onsubmit() {
      for (var key in this.danbaiform) {
        if (!this.danbaiform[key]) {
          this.$message.error("题目未做完！");
          return false;
        }
      }
      const { data: res } = await this.$http.post(
        "/api/danbai2",
        this.danbaiform
      );
      // console.log(res);
      if (res.code == 200) {
        if(res.data.res1 == false) {
          this.$message.error("已提交，请勿重复操作！");
          this.$router.push("/home");
        } else {
          // console.log(this.danbaiform);
          this.$message.success("提交成功");
          // localStorage.setItem("state2", 2);
          this.$router.push("/home");
        }
      }
      if (res.code == 100) {
        this.$message.error("已提交，请勿重复操作！");
      }
    },
  },
};
</script>

<style scoped>
.nolboder {
  border-left: 0px solid;
}
.norboder {
  border-right: 0px solid;
}
.notboder {
  border-top: 0px solid;
}
.nobboder {
  border-bottom: 0px solid;
}
.addmargin {
  margin: 10px 0px;
}
textarea {
  width: 100%;
  height: 200px;
}
.table input {
  border: none;
  outline: none;
}
.average_dcm {
  position: absolute;
  width: 160px;
  top: 35px;
  left: 330px;
  height: 125px;
}
table {
  position: relative;
  width: 500px;
}
table,
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
</style>
