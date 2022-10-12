<template>
  <div class="all">
    <div>
      <h4
        style="
          margin-bottom: 0%;
          text-align: left;
          font-weight: 500;
          color: #363739;
        "
      >
        五：实验内容及实验数据记录与处理
      </h4>
      <div
        style="
          text-align: right;
          margin-bottom: 1%;
          color: #606166;
          font-size: 12px;
        "
      >
        该部分得分：45分
      </div>
      <div
        style="
          background-color: #eeeeee;
          padding: 2%;
          border-radius: 3px;
          text-align: left;
          min-width: 600px;
        "
      >
        <div>
          <!-- <textarea rows="10"></textarea> -->
          <p>1）设备电路连接</p>
          <p>
            将霍尔效应测试仪上对应输出、输出和输入接线柱分别与实验仪上输入，输入和输出三对接线柱连接，调整二维移动尺，使x轴方向上与0刻度线对齐。
          </p>
          <p>
            2）
            打开测试仪电源开关，输出调零，闭合工作电流开关，通入工作电流5毫安，待至少5分钟开始实验。
          </p>
          <p>3）打开,开关，调整=5.00mA,Im=300mA。移动y轴，找到输出最大点。</p>
          <p>
            4）保持y轴不变，按要求刻度移动x轴，改变,开关方向，测量四组数据并记录数据。
          </p>
          <p>5）计算对应电位磁感应强度，并绘制-X曲线。</p>
          <p>
            6）实验完毕后，将工作电流和励磁电流调到0A，断开电源和连线，恢复原样。
          </p>
          <p>注意：</p>
          <p>
            1.由于励磁电流较大，所以千万不能将,接错，否则励磁电流将烧坏霍尔元件。
          </p>
          <p>
            2.霍尔元件及二维移动尺容易折断、变形，应注意避免受挤压、碰撞等。实验前应检查两者及电磁铁是否松动、移位，并加以调整。
          </p>
          <p>
            3.为了提高霍尔元件测量的准确性，实验前霍尔元件应至少预热5分钟，具体操作如下：断开励磁电流开关，闭合工作电流开关，通入工作电流5毫安，待至少5分钟开始实验。
          </p>
          <p>
            4.为了不使电磁铁因过热而受到损坏或影响测量精度，除在短时间内读取有关数据，通以励磁电流外，其余时间最好断开励磁电流开关。
          </p>
          <p>5.2 实验数据记录与处理</p>
          <div>
            <!-- 1.箱式直流电桥测量电阻值 -->
            <p>实验中给定：KB = 0.173mV/(mA·mT)</p>
            <p>
              实验仪器编号： (<el-input
                onkeyup="value=value.replace(/[^-\d.]/g,'')"
                v-model="tableState.number"
                style="width: 100px"
              ></el-input
              >)；线圈常数= (<el-input
                onkeyup="value=value.replace(/[^-\d.]/g,'')"
                v-model="tableState.constant"
                style="width: 100px"
              ></el-input
              >)mT / A
            </p>
            <p style="text-align: center">
              表1.电磁铁气隙中磁感应强度的分布（=300MA, =5.00MA）
            </p>
            <table
              border="1"
              cellpadding="5"
              cellspacing="0"
              style="margin: 0 auto auto; text-align: center"
            >
              <tr>
                <th
                  border="1"
                  style="
                    width: 100px;
                    text-align: center;
                    font-size: 17px;
                    line-height: 30px;
                  "
                  rowspan="2"
                >
                  X / mm
                </th>
                <th>V1 / mV</th>
                <th>V2 / mV</th>
                <th>V3 / mV</th>
                <th>V4 / mV</th>
                <th colspan="1" rowspan="2">VH = 1/4(|V1|+|V2|+|V3|+|V4|)</th>
                <th rowspan="2">B / mT</th>
              </tr>
              <tr>
                <td border="1">+IM / +Is</td>
                <td style="text-align: center">+IM / -Is</td>
                <td style="font-size: 17px">-IM / +Is</td>
                <td style="line-height: 30px">-IM / -Is</td>
              </tr>
              <tr>
                <td>0</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.a6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.b6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.c6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.d6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.e6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.f6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.g6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.h6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.i6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>25</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.j6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.k6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>35</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.l6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.m6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>45</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.n6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>48</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.o6"
                  ></el-input>
                </td>
              </tr>
              <tr>
                <td>50</td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p1"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p2"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p3"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p4"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p5"
                  ></el-input>
                </td>
                <td>
                  <el-input
                    onkeyup="value=value.replace(/[^-\d.]/g,'')"
                    v-model="tableState.p6"
                  ></el-input>
                </td>
              </tr>
            </table>
            <p style="text-align: center; text-indent: 2em">
              根据上表所记录数据，做出电磁铁气隙中磁感应强度X - B曲线：
            </p>
            <el-upload
              class="upload-demo"
              action="http://nsustutest.ymfirst.top/api/upload"
              :on-success="onSuccess"
              multiple
              :limit="3"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
        </div>
      </div>
    </div>
    <el-form :model="Form" :rules="rules" ref="Form" class="Form">
      <h4>一、选择题</h4>
      <div>
        1.若磁感应强度B与元件平面法线存在角度α时,作用在元件上的有效磁场大小为:(
        )
      </div>
      <el-form-item prop="one">
        <el-radio-group v-model="Form.one">
          <el-radio label="A">A. Bcosa</el-radio>
          <el-radio label="B">B. Bsina</el-radio>
          <el-radio label="C">C. Btana</el-radio>
          <el-radio label="D">D. Bcota</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <div>
        2.若磁感应强度B与工作电流方向存在角度β时,作用在元件上的有效磁场大小为:(
        )
      </div>
      <el-form-item prop="two">
        <el-radio-group v-model="Form.two">
          <el-radio label="A">A. Bsinβ</el-radio>
          <el-radio label="B">B. Bcosβ</el-radio>
          <el-radio label="C">C. Btanβ</el-radio>
          <el-radio label="D">D. Bcotβ</el-radio>
        </el-radio-group>
      </el-form-item> -->
      <div>
        2.测量不等位电势差时,若不等位电势差不为0,则增大工作电流时,不等位电势差将:(
        )
      </div>
      <el-form-item prop="three">
        <el-radio-group v-model="Form.three">
          <el-radio label="A">A. 增大</el-radio>
          <el-radio label="B">B. 减小</el-radio>
          <el-radio label="C">C. 不变</el-radio>
          <el-radio label="D">D. 不确定</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <div>
        4.若磁感应强度B与元件平面法线存在角度α,与工作电流方向存在角度β时,作用在元件上的有效磁场大小为:(
        )
      </div>
      <el-form-item prop="four">
        <el-radio-group v-model="Form.four">
          <el-radio label="A">A. Bcosasinβ</el-radio>
          <el-radio label="B">B. Bcosacosβ</el-radio>
          <el-radio label="C">C. Bsinasinβ</el-radio>
          <el-radio label="D">D. Bsinacosβ</el-radio>
        </el-radio-group>
      </el-form-item> -->
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
      fileList: [],
      files: "",
      tableState: {
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
        a6: "",
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        b5: "",
        b6: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
        e1: "",
        e2: "",
        e3: "",
        e4: "",
        e5: "",
        e6: "",
        f1: "",
        f2: "",
        f3: "",
        f4: "",
        f5: "",
        f6: "",
        g1: "",
        g2: "",
        g3: "",
        g4: "",
        g5: "",
        g6: "",
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
        i1: "",
        i2: "",
        i3: "",
        i4: "",
        i5: "",
        i6: "",
        j1: "",
        j2: "",
        j3: "",
        j4: "",
        j5: "",
        j6: "",
        k1: "",
        k2: "",
        k3: "",
        k4: "",
        k5: "",
        k6: "",
        l1: "",
        l2: "",
        l3: "",
        l4: "",
        l5: "",
        l6: "",
        m1: "",
        m2: "",
        m3: "",
        m4: "",
        m5: "",
        m6: "",
        n1: "",
        n2: "",
        n3: "",
        n4: "",
        n5: "",
        n6: "",
        o1: "",
        o2: "",
        o3: "",
        o4: "",
        o5: "",
        o6: "",
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        constant: "",
        number: "",
        fileList: [],
      },
      Form: {
        grade_xp: 0,
        one: "",
        // two: "",
        three: "",
        // four: "",
      },
      rules: {
        one: [{ required: true, message: "请选择", trigger: "change" }],
        // two: [{ required: true, message: "请选择", trigger: "change" }],
        three: [{ required: true, message: "请选择", trigger: "change" }],
        // four: [{ required: true, message: "请选择", trigger: "change" }],
      },
    };
  },
  methods: {
    onSuccess(file) {
      this.files = file.data;
    },
    async send(Form) {
      var studentId = window.localStorage.getItem("StudentId");
      var constant = this.tableState.constant;
      var number = this.tableState.number;
      var file = this.files;
      var a1 = this.tableState.a1;
      var a2 = this.tableState.a2;
      var a3 = this.tableState.a3;
      var a4 = this.tableState.a4;
      var a5 = this.tableState.a5;
      var a6 = this.tableState.a6;
      var b1 = this.tableState.b1;
      var b2 = this.tableState.b2;
      var b3 = this.tableState.b3;
      var b4 = this.tableState.b4;
      var b5 = this.tableState.b5;
      var b6 = this.tableState.b6;
      var c1 = this.tableState.c1;
      var c2 = this.tableState.c2;
      var c3 = this.tableState.c3;
      var c4 = this.tableState.c4;
      var c5 = this.tableState.c5;
      var c6 = this.tableState.c6;
      var d1 = this.tableState.d1;
      var d2 = this.tableState.d2;
      var d3 = this.tableState.d3;
      var d4 = this.tableState.d4;
      var d5 = this.tableState.d5;
      var d6 = this.tableState.d6;
      var e1 = this.tableState.e1;
      var e2 = this.tableState.e2;
      var e3 = this.tableState.e3;
      var e4 = this.tableState.e4;
      var e5 = this.tableState.e5;
      var e6 = this.tableState.e6;
      var f1 = this.tableState.f1;
      var f2 = this.tableState.f2;
      var f3 = this.tableState.f3;
      var f4 = this.tableState.f4;
      var f5 = this.tableState.f5;
      var f6 = this.tableState.f6;
      var g1 = this.tableState.g1;
      var g2 = this.tableState.g2;
      var g3 = this.tableState.g3;
      var g4 = this.tableState.g4;
      var g5 = this.tableState.g5;
      var g6 = this.tableState.g6;
      var h1 = this.tableState.h1;
      var h2 = this.tableState.h2;
      var h3 = this.tableState.h3;
      var h4 = this.tableState.h4;
      var h5 = this.tableState.h5;
      var h6 = this.tableState.h6;
      var i1 = this.tableState.i1;
      var i2 = this.tableState.i2;
      var i3 = this.tableState.i3;
      var i4 = this.tableState.i4;
      var i5 = this.tableState.i5;
      var i6 = this.tableState.i6;
      var j1 = this.tableState.j1;
      var j2 = this.tableState.j2;
      var j3 = this.tableState.j3;
      var j4 = this.tableState.j4;
      var j5 = this.tableState.j5;
      var j6 = this.tableState.j6;
      var k1 = this.tableState.k1;
      var k2 = this.tableState.k2;
      var k3 = this.tableState.k3;
      var k4 = this.tableState.k4;
      var k5 = this.tableState.k5;
      var k6 = this.tableState.k6;
      var l1 = this.tableState.l1;
      var l2 = this.tableState.l2;
      var l3 = this.tableState.l3;
      var l4 = this.tableState.l4;
      var l5 = this.tableState.l5;
      var l6 = this.tableState.l6;
      var m1 = this.tableState.m1;
      var m2 = this.tableState.m2;
      var m3 = this.tableState.m3;
      var m4 = this.tableState.m4;
      var m5 = this.tableState.m5;
      var m6 = this.tableState.m6;
      var n1 = this.tableState.n1;
      var n2 = this.tableState.n2;
      var n3 = this.tableState.n3;
      var n4 = this.tableState.n4;
      var n5 = this.tableState.n5;
      var n6 = this.tableState.n6;
      var o1 = this.tableState.o1;
      var o2 = this.tableState.o2;
      var o3 = this.tableState.o3;
      var o4 = this.tableState.o4;
      var o5 = this.tableState.o5;
      var o6 = this.tableState.o6;
      var p1 = this.tableState.p1;
      var p2 = this.tableState.p2;
      var p3 = this.tableState.p3;
      var p4 = this.tableState.p4;
      var p5 = this.tableState.p5;
      var p6 = this.tableState.p6;

      if (this.Form.one == "A") {
        this.Form.grade_xp += 5;
      }
      // if (this.Form.two == "A") {
      //   this.Form.grade_xp += 2.5;
      // }
      if (this.Form.three == "A") {
        this.Form.grade_xp += 5;
      }
      // if (this.Form.four == "A") {
      //   this.Form.grade_xp += 2.5;
      // }
      const { data: res } = await this.$http.post("/api/huoer/luru", {
        student_id: studentId,
        grade_xp: this.Form.grade_xp,
        number: number,
        tu: file,
        constant: constant,
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        a6: a6,
        b1: b1,
        b2: b2,
        b3: b3,
        b4: b4,
        b5: b5,
        b6: b6,
        c1: c1,
        c2: c2,
        c3: c3,
        c4: c4,
        c5: c5,
        c6: c6,
        d1: d1,
        d2: d2,
        d3: d3,
        d4: d4,
        d5: d5,
        d6: d6,
        e1: e1,
        e2: e2,
        e3: e3,
        e4: e4,
        e5: e5,
        e6: e6,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
        f5: f5,
        f6: f6,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
        h1: h1,
        h2: h2,
        h3: h3,
        h4: h4,
        h5: h5,
        h6: h6,
        i1: i1,
        i2: i2,
        i3: i3,
        i4: i4,
        i5: i5,
        i6: i6,
        j1: j1,
        j2: j2,
        j3: j3,
        j4: j4,
        j5: j5,
        j6: j6,
        k1: k1,
        k2: k2,
        k3: k3,
        k4: k4,
        k5: k5,
        k6: k6,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4,
        l5: l5,
        l6: l6,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        n1: n1,
        n2: n2,
        n3: n3,
        n4: n4,
        n5: n5,
        n6: n6,
        o1: o1,
        o2: o2,
        o3: o3,
        o4: o4,
        o5: o5,
        o6: o6,
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        p6: p6,
        xz1: Form.one,
        // xz2: Form.two,
        xz3: Form.three,
        // xz4: Form.four,
      });
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
  },
};
</script>

<style scoped>
.all {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
  text-align: left;
}
.footer {
  text-align: center;
}
.btn {
  width: 20%;
  margin-bottom: 2vw;
}
.el-radio-group {
  margin: 10px;
}
.el-radio {
  padding: 5px;
}
.el-input {
  padding: 0;
}
</style>
