<template>
  <div id="fxx">
    <div class="fxx_main">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="收件上级：">
          <div class="leader" @click="leader" v-model="form.acceptLeader"
               v-bind:class="{changeColor:varChangeColor}">直属上级
          </div>
        </el-form-item>
        <el-form-item label="收件下级：">
          <el-input v-model="form.acceptLower" :disabled="true" style="width:220px;height:35px;"></el-input>
          <div class="btn_style add_user" @click="addUser">添加用户</div>
          <div class="btn_style clear_list" @click="clearList">清空列表</div>
        </el-form-item>
        <el-form-item label="主题：">
          <el-input v-model="form.theme" maxlength="20" style="width: 472px;"></el-input>
        </el-form-item>
        <el-form-item label="消息内容：">
          <el-input type="textarea" v-model="form.info" maxlength="100"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn_style submit" @click="onSubmit" style="margin-left: 360px">发送消息</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      title="选择收件下级" :visible.sync="dialogVisible" width='530px' height='400px'>
      <div class="accept_lower">
        收件下级：
        <el-input v-model="seachUser" :disabled="true" style="width:220px;height:35px;"></el-input>
        <div class="btn_style add_user" @click="selLower">查询</div>
      </div>
      <div class="query_accept_lower">
        <div class="query_empty" v-show="acceptLowerData.length==0">
          <img src="../../assets/zjzh/empty.png" style="width: 70px;height:54px;">
          <p>没有搜索到用户</p>
        </div>
        <div class="query_have_data" v-show="acceptLowerData.length!=0">
          <div class="have_data_item" v-for="(item,index) in acceptLowerData" :key="index">
            <div :class="item.aChoosed?'data-choosed':'data-no-choose'" @click="changeChoosed(index)"></div>
            {{item.LoginName}}
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="chooseLowerSure">确 定({{acceptLowerNum}})</el-button>
		    <el-button class="pop_cancel_btn" type="primary" @click="chooseLowerExit">取 消</el-button>
		  </span>
    </el-dialog>
  </div>
</template>
<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js"

    export default {
        data() {
            return {
                seachUser: '',
                dialogVisible: false,
                form: {
                    acceptLowerId: '',
                    acceptLower: '',
                    theme: '',
                    info: ''
                },
                varChangeColor: false,//选中上级 不选中
                //选中的下级用户
                acceptLower: '',
                //选中下级用户的ID
                acceptLowerId: '',
                //下级用户列表
                acceptLowerData: [
                    {
                        aChoosed: false,
                        Uid: 1,
                        LoginName: '123'
                    },
                    {
                        aChoosed: false,
                        Uid: 2,
                        LoginName: '456'
                    },
                ],
                //选中的下级用户个数
                acceptLowerNum: 0,
                acceptLeaderId: '',
            }
        },
        methods: {
            //提交
            onSubmit() {
                if (this.form.acceptLowerId == '' && this.acceptLeaderId == '') {
                    this.$message.error('请选择收件人');
                } else if (this.form.theme == "") {
                    this.$message.error('请填写主题');
                } else if (this.form.info == "") {
                    this.$message.error('请输入消息内容');
                } else {
                    let that = this;
                    let url = "api/User/SendMessages";
                    if (this.acceptLeaderId != '') {
                        if (this.form.acceptLowerId == '') {
                            this.form.acceptLowerId += this.acceptLeaderId
                        } else {
                            this.form.acceptLowerId += ("," + this.acceptLeaderId)
                        }
                    }
                    let data = {
                        UserIds: this.form.acceptLowerId,
                        Title: this.form.theme,
                        Content: this.form.info
                    };

                    postAjax(url, data).then(function (data) {
                        if (data.IsSucess) {
                            that.$message({
                                message: '消息发送成功',
                                type: 'success'
                            });
                            that.form = {
                                acceptLowerId: '',
                                acceptLower: '',
                                theme: '',
                                info: ''
                            };
                            that.acceptLower = '';
                            that.acceptLowerId = '';
                        } else {
                            that.$message.error('消息发送失败');
                        }
                    })
                }
            },
            //添加用户
            addUser() {
                this.dialogVisible = true;
                this.selLower();
                this.acceptLower = this.form.acceptLower;
                this.acceptLowerId = this.form.acceptLowerId;
            },
            leader() {
                if (this.acceptLeaderId == '') {
                    this.acceptLeader = "1";
                    this.acceptLeaderId = userInfo.SupUid;
                } else {
                    this.acceptLeader = "";
                    this.acceptLeaderId = '';
                }
            },
            //查询收件下级
            selLower() {
                let that = this;
                let url = "api/User/GetChildUsers";
                let data = {
                    "PIndex": 1,
                    "PSize": 100
                };
                postAjax(url, data).then(function (data) {
                    if (data.IsSucess) {
                        //给每个加选中未选中的状态
                        for (var i = 0, length = data.Data.rows.length; i < length; i++) {
                            data.Data.rows[i].aChoosed = false;
                        }
                        that.acceptLowerData = data.Data.rows;
                        //如果有选中的用户还是给他选中
                        if (that.form.acceptLowerId) {
                            let ids = that.form.acceptLowerId.split(',');
                            for (var i = 0, length = that.acceptLowerData.length; i < length; i++) {
                                for (var j = 0, jLength = ids.length; j < jLength; j++) {
                                    if (that.acceptLowerData[i].Uid == ids[j]) {
                                        that.acceptLowerData[i].aChoosed = true;
                                    }
                                }
                            }
                        }
                    }
                })
            },
            //改变选中状态
            changeChoosed(index) {
                this.acceptLowerData[index].aChoosed = !this.acceptLowerData[index].aChoosed;
                this.acceptLowerNum = this.getChoosedLower().total;
                this.acceptLower = this.getChoosedLower().name;
                this.acceptLowerId = this.getChoosedLower().ids;
            },
            //选中的下级用户
            getChoosedLower() {
                let tempObj = {
                    ids: '',
                    name: '',
                    total: 0
                };
                let idsArr = [];
                let nameArr = [];
                let total = 0;
                for (var i = 0, length = this.acceptLowerData.length; i < length; i++) {
                    if (this.acceptLowerData[i].aChoosed) {
                        idsArr.push(this.acceptLowerData[i].Uid);
                        nameArr.push(this.acceptLowerData[i].LoginName);
                        total++;
                    }
                }
                tempObj = {
                    ids: idsArr.join(","),
                    name: nameArr.join(","),
                    total: total
                };
                return tempObj;
            },
            //选择完下级用户确定按钮
            chooseLowerSure() {
                this.dialogVisible = false;
                this.form.acceptLower = this.acceptLower;
                this.form.acceptLowerId = this.acceptLowerId;
            },
            //选择完下级用户取消按钮
            chooseLowerExit() {
                this.dialogVisible = false;
                this.acceptLower = this.form.acceptLower;
                this.acceptLowerId = this.form.acceptLowerId;
                console.log(this.acceptLower, this.acceptLowerId);
            },
            //清空列表
            clearList() {
                this.form.acceptLower = '';
                this.form.acceptLowerId = '';
                this.acceptLower = '';
                this.acceptLowerI = '';
                this.acceptLowerData = [];
            },
        }
    }


</script>
<style lang="scss">
  .leader {
    width: 97px;
    height: 38px;
    background-color: #008573;
    border-radius: 5px;
    line-height: 38px;
    text-align: center;
    color: #ffffff;
  }

  .leader:hover {
    cursor: pointer;
  }

  .changeColor {
    background: #f1a104;
    color: white
  }

  #fxx .el-form-item__content {
    width: inherit;
  }

  #fxx .el-input__inner{
    background-image: linear-gradient(0deg,
      #edeced 0%,
      #ffffff 100%);
    border-radius: 5px;
  }
  #fxx .el-form-item__label{
    font-size: 14px;
    color: #171717
  }
  .fxx_main {
    padding: 15px;
  }

  .fxx_main .el-input__inner {
    height: 35px;
    line-height: 35px;
    border-radius: 2px;
  }

  .btn_style {
    width: 112px;
    height: 40px;
    background-color: #008573 !important;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    line-height: 38px;
    margin-left: 10px;
    color: #ffffff !important;
  }

  .add_user {
    background: #ff680a;
  }

  .add_user:hover {
    cursor: pointer;
  }

  .clear_list:hover {
    cursor: pointer;
  }

  .clear_list {
    background: #008573;
  }

  .fxx_main .el-textarea__inner {
    height: 200px;
    width: 472px;
  }

  .fxx_main .submit {
    background: #1f7878;
    margin-left: 0;
    padding: 0;
  }

  /*提示弹窗样式*/
  #fxx .el-dialog{
    background-color: #ffffff;
  }
  #fxx .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  #fxx .el-dialog__body {
    padding: 28px 34px 0 34px;
  }

  #fxx .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #fxx .pop_sure_btn, #fxx .pop_cancel_btn {
    color: #fff;
    background-color: #2ba498;
    border-color: #2ba498;
    width: 120px;
    height: 35px;
    line-height: 35px;
    padding: 0;
  }

  #fxx .pop_cancel_btn {
    background: #fff;
    color: #2ba498;
  }

  .accept_lower {
    display: flex;
    height: 35px;
    align-items: center;
  }

  .accept_lower .el-input__inner {
    height: 35px;
    line-height: 35px;
    border-radius: 2px;
  }

  .query_accept_lower {
    height: 156px;
    margin-top: 23px;
  }

  .query_empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    height: 100%;
  }

  .query_have_data {
    padding-left: 15px;
    border: 1px solid #cdcdcd;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .have_data_item {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .data-no-choose {
    width: 18px;
    height: 18px;
    border: 1px solid #f1f3f5;
    border-radius: 50%;
    margin-right: 20px;
  }

  .data-choosed {
    width: 18px;
    height: 18px;
    background-image: url("../../assets/zjzh/choosed.png");
    border-radius: 50%;
    margin-right: 20px;
  }
</style>
