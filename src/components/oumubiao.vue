<template>
  <div class="all">
    <el-form :model="oumubiaoform" ref="oumubiaoform" class="demo-oumubiaoform">
      <h4>一、实验数据记录与处理（共75分）</h4>

      <div class="addmargin">
        <p class="addmargin">1. 待改装微安表参数记录(每空5分，共15分)</p>

        <table border=" 1 " cellspacing="0 " style="width: 500px" class="table">
          <tr>
            <th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 微安表表头满量程电流Ig
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.ig1" /></th>
            <th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;μA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
          </tr>
          <tr>
            <th>表头内阻Rg</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.rg1" /></th>
            <th>Ω</th>
          </tr>
          <tr>
            <th>电池电压E</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.e" /></th>
            <th>V</th>
          </tr>
        </table>
        <div>
          <p class="addmargin">
            2.
            各电阻阻值设置计算(要求四舍五入精确到小数点后1位，每空5分，共45分)
          </p>
          <p class="addmargin">
            调零电阻R1计算（理论值）<br />
            根据电路图，单刀开关开启，短接红黑表笔，此时调零电阻计算公式为：R1=E/Ig-Rg，
          </p>
          <p class="addmargin">
            代入E=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.e1"
            />
            V, Ig=
            <input onkeyup="value=value.replace(/[^\d.]/g,'')" style="width: 70px" type="text" v-model="oumubiaoform.i" />
            μA, Rg=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.ig2"
            />
            Ω，
          </p>
          <p class="addmargin">
            计算出R1=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.r1"
            />
            Ω
          </p>
          <p class="addmargin">
            调零电阻R2计算（理论值）<br />
            根据电路图，单刀开关闭合，红黑表笔接100Ω电阻，此时校准电阻计算公式为：R2=[0.00015×(R1+Rg)]/[(E-0.00015×(R1+Rg))/100-0.00015]，
          </p>
          <p class="addmargin">
            代入E=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.e2"
            />
            V,R1=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.rb"
            />
            Ω, Rg=<input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.rg2"
            />
            Ω，
          </p>
          <p class="addmargin">
            计算出R2=
            <input
            onkeyup="value=value.replace(/[^\d.]/g,'')"
              style="width: 70px"
              type="text"
              v-model="oumubiaoform.r2"
            />
            Ω
          </p>
        </div>
        <p class="addmargin">
          3. 万用表改装设计实验数据记录表(每空5分，共15分，截图分值另计)
        </p>
        <table cellspacing="0 " style="width: 650px" class="table">
          <tr>
            <th rowspan="4">欧姆表的改装设计</th>
            <th style="width: 70px">改装要求</th>
            <th colspan="3">量程比率×1Ω</th>
            <th style="width: 130px" rowspan="4">
              Rx表头测量数据截图，要求将Rx读数标记在图上（5分）
              <el-upload
                class="avatar-uploader"
                action="http://nsustutest.ymfirst.top/api/upload"
                :show-file-list="false"
                :on-success="RxSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="oumubiaoform.p1"
                  :src="oumubiaoform.p1"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th rowspan="2">改装计算</th>
            <th style="width: 100px；">调零电阻R1=</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.r3" /></th>
            <th style="width: 50px">Ω</th>
          </tr>

          <tr>
            <th style="heigth: 50px">校准电阻R2=</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.r4" /></th>
            <th>Ω</th>
          </tr>
          <tr>
            <th>测量电阻</th>
            <th>Rx=</th>
            <th><input onkeyup="value=value.replace(/[^\d.]/g,'')" type="text" v-model="oumubiaoform.rx" /></th>
            <th>Ω</th>
          </tr>
          <tr>
            <th colspan="6" class="nobboder">
              <p style="float: left; display: block; margin-left: 10px">
                实验电路连线截图（5分）
              </p>
            </th>
          </tr>
          <tr>
            <th colspan="6" class="notboder">
              <el-upload
                action="http://nsustutest.ymfirst.top/api/upload"
                :show-file-list="false"
                :on-success="shiyanSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="oumubiaoform.p2"
                  :src="oumubiaoform.p2"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </th>
          </tr>
        </table>
      </div>

      <h4>二、选择题（每题5分，共15分）</h4>
      <div>1. 关于使用万用表欧姆档测电阻的下列说法中正确的是( )</div>

      <img
        class="photo"
        src="https://liuru1.oss-cn-chengdu.aliyuncs.com/img/20220901141309.png"
        alt=""
      />
      <el-form-item>
        <el-radio-group v-model="oumubiaoform.pd1">
          <el-radio label="A">A. 测量阻值不同的电阻时必须重新调零</el-radio
          ><br />
          <el-radio label="B"
            >B. 测量电路中的某个电阻，不需要把该电阻与电路断开</el-radio
          ><br />
          <el-radio label="C"
            >C.
            测量电阻时，为了使测量准确，应当尽量使指针指在中心刻度的附近</el-radio
          ><br />
          <el-radio label="D"
            >D.
            如图为某同学的实验测量结果，指针在a位置处表示被测电阻的阻值为50Ω</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <div>
        2.
        把一个量程为5mA的电流表改装成欧姆表Rx1档，电流表的内阻是50Ω，电池的电动势是1.5v，经过调零之后测电阻，当欧姆表指针指到满偏的3/4位置时，被测电阻的阻值是(
        )
      </div>
      <el-form-item>
        <el-radio-group v-model="oumubiaoform.pd2">
          <el-radio label="A">A. 50 Ω</el-radio><br />
          <el-radio label="B">B. 100 Ω</el-radio><br />
          <el-radio label="C">C. 16.7 Ω </el-radio><br />
          <el-radio label="D">D. 400 Ω</el-radio>
        </el-radio-group>
      </el-form-item>
      <div>3.关于欧姆表，下列说法正确的是( )</div>
      <el-form-item>
        <el-radio-group v-model="oumubiaoform.pd3">
          <el-radio label="A">A. 刻度盘上的刻度是均匀的</el-radio><br />
          <el-radio label="B">B. 指针指在最左边，表示待测电阻为零</el-radio
          ><br />
          <el-radio label="C">C. 指针指在最左边，表示待测电阻为无穷大</el-radio
          ><br />
          <el-radio label="D">D. 欧姆表可以精确的测量电阻</el-radio>
        </el-radio-group>
      </el-form-item>
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
        <el-button class="btn" type="primary" @click="onsubmit('oumubiaoform')"
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
      oumubiaoform: {
        ra: "E/Ig-Rg",
        grade_xp: 0,
        ig1: "",
        rg1: "",
        e: "",
        e1: "",
        i: "",
        ig2: "",
        r1: "",
        e2: "",
        rb: "",
        rg2: "",
        r2: "",
        r3: "",
        r4: "",
        rx: "",
        p1: "",
        p2: "",
        pd1: "",
        pd2: "",
        pd3: "",
      },

      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    // 测试

    RxSuccess(res, file) {
      this.oumubiaoform.p1 = file.response.data;
    },
    shiyanSuccess(res, file) {
      this.oumubiaoform.p2 = file.response.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" ||file.type === "image/png" || file.type === "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG/PNG/JPEG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    async onsubmit() {
      // for (var key in this.oumubiaoform) {
      //   if (!this.oumubiaoform[key]) {
      //     this.$message.error("题目未做完！");
      //     this.oumubiaoform.grade_xp =0;
      //     return false;
      //   }
      // }
      if (this.oumubiaoform.pd1 == "A") {
        this.oumubiaoform.grade_xp = this.oumubiaoform.grade_xp + 5;
      }
      if (this.oumubiaoform.pd2 == "B") {
        this.oumubiaoform.grade_xp = this.oumubiaoform.grade_xp + 5;
      }
      if (this.oumubiaoform.pd3 == "C") {
        this.oumubiaoform.grade_xp = this.oumubiaoform.grade_xp + 5;
      }
      const { data: res } = await this.$http.post(
        "/api/oumu/luru",
        this.oumubiaoform
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
          // localStorage.setItem("state1", 2);
          this.$router.push("/home");
        }
      }
    },
    // Rx上传截图
  },
};
</script>

<style scoped>
/* Rx截图上传 */
.Rxpicture {
  height: 100px;
  width: 150px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}

.photo {
  height: 100px;
  width: 200px;
  margin: 10px;
  margin-left: 80px;
  background-color: rgba(231, 231, 231, 0.663);
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
  width: 100px;
  border: none;
  outline: none;
}

table {
  position: relative;
  /* width: 500px; */
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
