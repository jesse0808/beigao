<template>
  <div id="grsy">
    <div class="person_info">
      <div class="left_money">您的平台余额：<strong>{{userInfo.Balance}}</strong>&ensp;元<span
        :class="['iconfont','icon-shuaxin',Refresh==true?'refresh_anima':'']" @click="refresh"></span></div>
      <div class="right_safety">
        <div class="safe_lev">
          <div v-for="(item,index) in safeLev" :class="['iconfont','icon-wujiaoxingxingxingshoucang',item==0?'star':'star_active']" :key="index"></div>
          <span style="font-size: 20px;color:#ff7800;font-weight: bold">账号安全等级：中</span>
        </div>
        <p>安全等级，等级越高，您的账号和资金越安全。</p>
      </div>
    </div>
    <div class="bottom_box">
      <p class="bottomtitle">完善以下资料可以增加安全等级，等级越高，您的账号和资金越安全。</p>
      <el-collapse v-model="activeNames" accordion>
        <!--        登陆密码修改-->
        <el-collapse-item name="1">
          <template slot="title">
            <span class="iconfont icon-mima1 pas_icon" style="font-size: 26px"></span><b>登陆密码</b><span>建议使用数字加密码</span><span :class="activeNames == 1?'close':'unclose'">{{activeNames == 1?'收起':'修改'}}<span class="iconfont icon-xialajiantouxiao"></span></span>
          </template>
          <div>
            <p class="green" style="margin-top:25px;">为了保障您的资金安全，修改后请牢记您的密码！</p>
            <div class="demo-input-suffix">
              <span class="text_style">旧密码：</span>
              <input type="password" v-model="oldPassword" placeholder="请输入旧密码"/>
            </div>
            <div class="demo-input-suffix">
              <span class="text_style">新密码：</span>
              <input type="password" v-model="newPassword" placeholder="请输入新密码"/>
              <p class="green">请输入6-20个字母加数字，特殊符号组合的密码</p>
            </div>
            <div class="demo-input-suffix">
              <span class="text_style">确认密码：</span>
              <input type="password" v-model="surePassword" placeholder="请确认密码"/>
            </div>
            <div class="demo-input-suffix">
              <div style="display:inline-block;width: 70px;"></div>
              <el-button class="pop_sure_btn" type="primary" @click="passwordSure">确 定</el-button>
              <el-button class="cancel_btn" type="primary" @click="closeThisWindow">取 消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <!--提现密码修改-->
        <el-collapse-item name="2">
          <template slot="title">
            <span class="iconfont icon-xiugaitixianmima pas_icon" style="font-size: 26px"></span><b>提现密码</b><span>银行卡绑定，转账等资金操作需要安全密码确认，建议尽快修改。</span><span
            :class="activeNames == 2?'close':'unclose'">{{activeNames == 2?'收起':'修改'}}<span class="iconfont icon-xialajiantouxiao"></span></span>
          </template>
          <div>
            <div class="demo-input-suffix" style="padding-top: 20px;">
              <span class="text_style">旧密码：</span>
              <input type="password" v-model="withdrawal.oldPassword" placeholder="请输入旧密码"/>
            </div>
            <div class="demo-input-suffix">
              <span class="text_style">新密码：</span>
              <input type="password" v-model="withdrawal.newPassword" placeholder="请输入新密码6位数以上"/>
            </div>
            <div class="demo-input-suffix">
              <span class="text_style">确认密码：</span>
              <input type="password" v-model="withdrawal.surePassword" placeholder="请确认密码6位数以上"/>
            </div>
            <div class="demo-input-suffix">
              <div style="display:inline-block;width: 70px;"></div>
              <el-button class="pop_sure_btn" type="primary" @click="withdrawalSure">确 定</el-button>
              <el-button class="cancel_btn" type="primary" @click="closeThisWindow">取 消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <!--设置安全问题-->
        <el-collapse-item name="3" :disabled="userInfo.IsDataLock">
          <template slot="title">
            <span class="iconfont icon-hudun pas_icon" style="font-size: 28px"></span><b>设置安全问题</b><span>绑定安全问题后可以通过安全问题进行账号资料</span><span style="color:red;" v-if="userInfo.IsDataLock">如果账号已设置安全问题，不能二次修改。</span><span :class="activeNames == 3?'close':'unclose'">{{activeNames == 3?'收起':'设置'}}<span class="iconfont icon-xialajiantouxiao"></span></span>
          </template>
          <div>
            <div class="demo-input-suffix" style="padding-top: 20px;">
              <span class="text_style">问题：</span>
              <el-select v-model="questform.currQuestion" placeholder="请选择安全问题">
                <el-option
                  v-for="item in questionArr"
                  :key="item.SqId"
                  :label="item.Question"
                  :value="item.SqId">
                </el-option>
              </el-select>
            </div>
            <div class="demo-input-suffix">
              <span class="text_style">答案：</span>
              <input type="text" v-model="questform.answer">
            </div>
            <div slot="footer" class="dialog-footer">
              <div style="display:inline-block;width: 70px;"></div>
              <el-button v-if="!userInfo.IsDataLock" class="pop_sure_btn" type="primary" @click="questionSure">确 定</el-button>
              <el-button class="cancel_btn" type="primary" @click="closeThisWindow">取 消</el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <!--设置手机号-->
      <div class="grsy_item" @click="changesBtnGRSY(4)">
        <span class="iconfont icon-shouji pas_icon" style="font-size: 32px;margin-right: 8px;"></span><b>手机：{{showPhone}}</b><span>绑定手机号之后异地登录提醒</span><span class="unclose">展开<span class="iconfont icon-xialajiantouxiao"></span></span>
      </div>
      <!--设置邮箱-->
      <div class="grsy_item" @click="changesBtnGRSY(4)">
        <span class="iconfont icon-youxiang pas_icon" style="font-size: 26px"></span><b>邮箱：{{showMail}}</b><span>用于账户异地登录验证，增加您的账户安全性。</span><span class="unclose">展开<span class="iconfont icon-xialajiantouxiao"></span></span>
      </div>
      <!-- 登录密码 -->
      <!--      <div class="onelist">-->
      <!--        <el-row class="one-col-list">-->
      <!--          <el-col :span="2">-->
      <!--            <img class="icon_image" src="../../assets/zjzh/loginP.png" alt="">-->
      <!--          </el-col>-->
      <!--          <el-col :span="18">-->
      <!--            <p class="blackname">登录密码</p>-->
      <!--            <p class="grayname">建议使用数字加密码</p>-->
      <!--          </el-col>-->
      <!--          <el-col :span="4">-->
      <!--            <el-button class="change_color" type="warning" @click="changesBtnGRSY(1)">修改</el-button>-->
      <!--          </el-col>-->
      <!--        </el-row>-->
      <!--      </div>-->
      <!-- 安全密码 -->
      <!-- <div class="onelist">
                <el-row class="one-col-list">
                    <el-col :span="2">
                        <img class="icon_image" src="../../../dist/static/img/banner_4.jpg" alt="">
                    </el-col>
                    <el-col :span="18">
                        <p class="blackname">安全密码</p>
                        <p class="grayname">银行卡绑定，转账等资金操作需要安全密码确认，默认初始密码123，建议尽快修改。</p>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="warning" @click="changesBtnGRSY(2)">修改</el-button>
                    </el-col>
                </el-row>
            </div> -->
      <!-- 提现密码 -->
      <!--      <div class="onelist">-->
      <!--        <el-row class="one-col-list">-->
      <!--          <el-col :span="2">-->
      <!--            <img class="icon_image" src="../../assets/zjzh/txP.png" alt="">-->
      <!--          </el-col>-->
      <!--          <el-col :span="18">-->
      <!--            <p class="blackname">提现密码</p>-->
      <!--            <p class="grayname">银行卡绑定，转账等资金操作需要安全密码确认，建议尽快修改。</p>-->
      <!--          </el-col>-->
      <!--          <el-col :span="4">-->
      <!--            <el-button type="warning" class="change_color" @click="changesBtnGRSY(3)">修改</el-button>-->
      <!--          </el-col>-->
      <!--        </el-row>-->
      <!--      </div>-->
      <!-- 设置安全问题 -->
<!--            <div class="onelist">-->
<!--              <el-row class="one-col-list">-->
<!--                <el-col :span="2">-->
<!--                  <img class="icon_image" src="../../assets/zjzh/setQuestion.png" alt="">-->
<!--                </el-col>-->
<!--                <el-col :span="18">-->
<!--                  <p class="blackname">设置安全问题</p>-->
<!--                  <p class="grayname">绑定安全问题后可以通过安全问题进行账号资料</p>-->
<!--                </el-col>-->
<!--                <el-col :span="4">-->
<!--                  <el-button v-if="!userInfo.IsDataLock" type="warning" class="change_color" @click="changesBtnGRSY(2)">设置-->
<!--                  </el-button>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
      <!-- 异地登录验证 -->
      <!-- <div class="onelist">
                <el-row class="one-col-list">
                    <el-col :span="2">
                        <img class="icon_image" src="../../../dist/static/img/banner_4.jpg" alt="">
                    </el-col>
                    <el-col :span="18">
                        <p class="blackname">异地登录验证：已开启</p>
                        <p class="grayname">异地登录必须通过手机号码验证或者是通过邮箱进行登录验证。</p>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="warning">修改</el-button>
                    </el-col>
                </el-row>
            </div> -->
      <!-- 预留信息 -->
      <!-- <div class="onelist">
                <el-row class="one-col-list">
                    <el-col :span="2">
                        <img class="icon_image" src="../../../dist/static/img/banner_4.jpg" alt="">
                    </el-col>
                    <el-col :span="18">
                        <p class="blackname">预留信息：ll</p>
                        <p class="grayname">登录时会看到预留信息</p>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="warning">修改</el-button>
                    </el-col>
                </el-row>
            </div> -->
      <!-- 手机 -->
<!--      <div class="onelist">-->
<!--        <el-row class="one-col-list">-->
<!--          <el-col :span="2">-->
<!--            <img class="icon_image" src="../../assets/zjzh/phone.png" alt="">-->
<!--          </el-col>-->
<!--          <el-col :span="18">-->
<!--            <p class="blackname">手机：{{showPhone}}</p>-->
<!--            <p class="grayname">绑定手机号之后异地登录提醒</p>-->
<!--          </el-col>-->
<!--          <el-col :span="4">-->
<!--            <el-button type="warning" class="change_color" @click="changesBtnGRSY(4)">修改</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
      <!-- 邮箱 -->
<!--      <div class="onelist">-->
<!--        <el-row class="one-col-list">-->
<!--          <el-col :span="2">-->
<!--            <img class="icon_image" src="../../assets/zjzh/emil.png" alt="">-->
<!--          </el-col>-->
<!--          <el-col :span="18">-->
<!--            <p class="blackname">邮箱：{{showMail}}</p>-->
<!--            <p class="grayname">用于账户异地登录验证，增加您的账户安全性。</p>-->
<!--          </el-col>-->
<!--          <el-col :span="4">-->
<!--            <el-button type="warning" class="change_color" @click="changesBtnGRSY(4)">修改</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
    </div>

    <!-- 修改登录密码弹窗 -->
    <el-dialog
      title="修改密码"
      :visible.sync="passwordDialog"
      width="30%"
      :before-close="handleClose(1)">
      <p class="green" style="margin-top:25px;">为了保障您的资金安全，修改后请牢记您的密码！</p>
      <div class="demo-input-suffix">
        <span class="text_style">旧密码：</span>
        <input type="password" v-model="oldPassword" placeholder="请输入旧密码"/>
      </div>
      <div class="demo-input-suffix">
        <span class="text_style">新密码：</span>
        <input type="password" v-model="newPassword" placeholder="请输入新密码"/>
        <p class="green">请输入6-20个字母加数字，特殊符号组合的密码</p>
      </div>
      <div class="demo-input-suffix">
        <span class="text_style">确认密码：</span>
        <input type="password" v-model="surePassword" placeholder="请确认密码"/>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="passwordSure">确 定</el-button>
		    <el-button class="cancel_btn" type="primary" @click="passwordDialog = false">取 消</el-button>
		  </span>
    </el-dialog>

    <!-- 修改提现密码弹窗 -->
    <el-dialog
      title="修改密码"
      :visible.sync="withdrawalDialog"
      width="30%"
      :before-close="handleClose(2)">
      <div class="demo-input-suffix" style="padding-top: 20px;">
        <span class="text_style">旧密码：</span>
        <input type="password" v-model="withdrawal.oldPassword" placeholder="请输入旧密码"/>
      </div>
      <div class="demo-input-suffix">
        <span class="text_style">新密码：</span>
        <input type="password" v-model="withdrawal.newPassword" placeholder="请输入新密码6位数以上"/>
      </div>
      <div class="demo-input-suffix">
        <span class="text_style">确认密码：</span>
        <input type="password" v-model="withdrawal.surePassword" placeholder="请确认密码6位数以上"/>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="withdrawalSure">确 定</el-button>
		    <el-button class="cancel_btn" type="primary" @click="withdrawalDialog = false">取 消</el-button>
		  </span>
    </el-dialog>

    <!-- 安全问题 -->
<!--    <el-dialog-->
<!--      title="修改安全问题"-->
<!--      :visible.sync="questionDialog"-->
<!--      width="30%"-->
<!--      :before-close="handleClose(3)">-->
<!--      <div class="row_style">-->
<!--        <div class="row_text_style">问题：</div>-->
<!--        <el-select v-model="questform.currQuestion" placeholder="请选择安全问题">-->
<!--          <el-option-->
<!--            v-for="item in questionArr"-->
<!--            :key="item.SqId"-->
<!--            :label="item.Question"-->
<!--            :value="item.SqId">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </div>-->
<!--      <div class="row_style">-->
<!--        <div class="row_text_style">答案：</div>-->
<!--        <div style="width: 60%;">-->
<!--          <el-input v-model="questform.answer"></el-input>-->
<!--        </div>-->

<!--      </div>-->
<!--      <span slot="footer" class="dialog-footer">-->
<!--		    <el-button class="pop_sure_btn" type="primary" @click="questionSure">确 定</el-button>-->
<!--		    <el-button class="cancel_btn" type="primary" @click="questionDialog = false">取 消</el-button>-->
<!--		  </span>-->
<!--    </el-dialog>-->
    <!-- 提示信息 -->
    <el-dialog
      title="提示"
      :visible.sync="tipsPop"
      width="30%"
    >
      <div class="warning_img">
        <img src="../../assets/zjzh/warning.png" style="width: 54px;height: 52px;">
      </div>
      <div style="text-align: center;">{{tipsInfo}}</div>
      <span slot="footer" class="dialog-footer">
		    <el-button class="pop_sure_btn" type="primary" @click="tipsPop=false">确 定</el-button>
		  </span>
    </el-dialog>
  </div>
</template>

<script>
    // 引用axios封装文件
    import {postAjax, getAjax} from "../../util/ajax.js"

    export default {
        name: 'grsy',
        data() {
            return {
                activeNames: 0,
                Refresh: false,
                //修改密码弹窗
                passwordDialog: false,
                //提现密码弹窗
                withdrawalDialog: false,
                //安全问题弹窗
                questionDialog: false,
                //个人信息
                userInfo: {
                    LoginName: '',//登录名
                    Balance: '',//余额
                    UtId: '',
                    FullName: '',
                    NickName: '',
                    QqNumber: '',
                    Email: '',
                    PhoneNumber: '',
                    LastLoginTime: '',
                    SupQqNumber: '',
                    SupPhoneNumber: '',
                    IsDataLock: false,
                    UserRebate: '',
                    UtName: '',
                    CreateTime: '',
                    IsOnline: '',
                    SupName: '',
                    LoginCount: '',
                },
                questionArr: [],
                //questform
                questform: {
                    //当前问题
                    currQuestion: '',
                    answer: '',
                },

                //旧密码
                oldPassword: '',
                //新密码
                newPassword: '',
                //确认新密码
                surePassword: '',
                //提现密码
                withdrawal: {
                    oldPassword: '',
                    newPassword: '',
                    surePassword: '',
                },
                //安全等级数组
                safeLev: [1, 1, 1, 0, 0],

                //提示弹窗
                tipsPop: false,
                tipsInfo: '',
            }
        },
        computed: {
            showPhone() {
                return this.userInfo.PhoneNumber ? this.userInfo.PhoneNumber : '未绑定'
            },
            showMail() {
                return this.userInfo.Email ? this.userInfo.Email : '未设置'
            }
        },
        methods: {
            closeThisWindow() {
                this.activeNames = 0;

            },
            // 刷新
            refresh() {
                let that = this;
                if (this.Refresh == false) {
                    that.Refresh = true
                    that.$store.dispatch('getUserInfo');
                    that.getUserInfo();
                    setTimeout(function () {
                        that.Refresh = false
                    }, 1500)
                }
            },
            //密码确认按钮
            passwordSure() {
                if (this.oldPassword && this.newPassword && this.surePassword) {
                    if (this.newPassword != this.surePassword) {
                        this.$message.error('两次密码不一致');
                    } else {
                        if (this.newPassword.length >= 6) {
                            let that = this;
                            let url = "api/User/UserUpdatePwdInfo";
                            let data = {
                                PwdType: "0",
                                oldPassword: this.oldPassword,
                                newPassword: this.newPassword,
                                confirmPassword: this.surePassword,
                            };
                            postAjax(url, data).then(function (data) {
                                if (data.IsSucess) {
                                    that.$message({
                                        message: '密码修改成功',
                                        type: 'success'
                                    });
                                    that.passwordDialog = false;
                                    that.activeNames = 0;
                                } else {
                                    that.$message.error(data.Message);
                                }
                            })
                        } else {
                            this.$message.error('请输入最少六位数字密码');
                        }
                    }
                } else {
                    this.$message.error('必填项不能为空');
                }
            },
            //提现密码确认
            withdrawalSure() {
                if (this.withdrawal.oldPassword && this.withdrawal.newPassword && this.withdrawal.surePassword) {
                    if (this.withdrawal.newPassword != this.withdrawal.surePassword) {
                        this.$message.error('两次密码不一致');
                    } else {
                        if (this.withdrawal.newPassword.length >= 6) {
                            let that = this;
                            let url = "api/User/UserUpdatePwdInfo";
                            let data = {
                                PwdType: "1",
                                oldPassword: this.withdrawal.oldPassword,
                                newPassword: this.withdrawal.newPassword,
                                confirmPassword: this.withdrawal.surePassword,
                            };
                            postAjax(url, data).then(function (data) {
                                if (data.IsSucess) {
                                    that.$message({
                                        message: '密码修改成功',
                                        type: 'success'
                                    });
                                    that.withdrawalDialog = false;
                                    that.activeNames = 0;
                                } else {
                                    that.$message.error(data.Message);
                                }
                            })
                        } else {
                            this.$message.error('请输入最少六位数字密码');
                        }
                    }
                } else {
                    this.$message.error('必填项不能为空');
                }
            },
            //安全问题确认
            questionSure() {
                if (this.questform.answer && this.questform.currQuestion) {
                    let that = this;
                    let url = "api/User/SetSecurityQuestion";
                    let data = {
                        Answer: this.questform.answer,
                        SqId: this.questform.currQuestion
                    };
                    postAjax(url, data).then(function (data) {
                        if (data.IsSucess) {
                            that.$message({
                                message: '设置成功',
                                type: 'success'
                            });
                            that.userInfo.IsDataLock = true
                            that.questionDialog = false;
                            that.activeNames = 0;
                        } else {
                            that.$message.error(data.Message);
                        }
                    })
                } else {
                    this.$message.error('必填项不能为空');
                }
            },
            //得到安全问题
            getQuestion() {
                let that = this;
                let url = "api/User/GetSecurityQuestion";
                postAjax(url, null).then(function (data) {
                    if (data.IsSucess) {
                        that.questionArr = data.Data;
                    }
                })
            },
            changesBtnGRSY(type) {
                switch (type) {
                    case 1:
                        this.passwordDialog = true;
                        break;
                    case 2:
                        this.questionDialog = true;
                        this.getQuestion();
                        break;
                    case 3:
                        this.withdrawalDialog = true;
                        break;
                    case 4:
                        this.$emit('grsygobingrzl', '1')
                        break;
                }
            },
            // 得到用户信息方法
            getUserInfo() {
                let that = this;
                let url = "Api/User/GetUserInfo";
                postAjax(url, null).then((data) => {
                    if (data.IsSucess) {
                        that.userInfo = data.Data;
                    } else {
                        that.userInfo = []
                    }
                }).catch(() => {
                    that.userInfo = []
                })
            },
            handleClose(num) {

            },
        },
        mounted() {
            this.getUserInfo();
            this.getQuestion();
        }
    }
</script>
<style>
  #grsy .el-collapse {
    border: none;
  }

  #grsy .el-collapse .el-collapse-item {
    margin-bottom: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
    border: solid 1px #dddddd;
  }
  #grsy .grsy_item{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 47px;
    margin-bottom: 20px;
    border: solid 1px #d9d9d9;
    background-image: linear-gradient(0deg, #eaeaea 0%, #f1f1f1 100%);
    border-radius: 5px;
    padding: 0 11px;
    cursor:pointer;
  }
  #grsy .el-collapse .el-collapse-item .el-collapse-item__header {
    position: relative;
    width: 100%;
    height: 47px;
    background-image: linear-gradient(0deg,#eaeaea 0%,#f1f1f1 100%);
    border-radius: 5px;
    border: none;
    padding: 0 11px;
  }

  #grsy .el-collapse .el-collapse-item .el-collapse-item__wrap {
    background-color: #f7f7f7;
    border: none;
  }

  #grsy .el-collapse-item__header b ,#grsy .grsy_item b{
    font-size: 14px;
  }

  #grsy .el-collapse-item__header span, #grsy .grsy_item span{
    margin-left: 15px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #9d9d9c;
  }

  #grsy .el-collapse-item__header .close, #grsy .grsy_item .close{
    position: absolute;
    right: 37px;
    color: #008573;
  }
  #grsy .el-collapse-item__header .unclose, #grsy .grsy_item .unclose{
    position: absolute;
    right: 20px;
    color: #333333;
  }
  .unclose:hover{
    color: #008573 !important;
  }
  .unclose:hover span{
    color: #008573 !important;
  }
  .unclose > span{
    margin-left: 5px !important;
  }
  #grsy .dialog-footer {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  .el-button + .el-button {
    margin-left: 18px;
  }
  #grsy .el-icon-arrow-right{
    display: none;
  }
  #grsy .el-collapse-item__arrow.is-active{
    transform: rotate(0deg);
    background: url(../../assets/zjzh/am_top.png) no-repeat center /cover;
  }
</style>
<style lang="scss" scoped>
  #grsy {
    width: 100%;
    height: 100%;

    .person_info {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 140px;
      border-bottom: solid 1px #d8d8d8;

      .left_money {
        position: relative;
        width: 50%;
        height: 100%;
        line-height: 140px;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #707070;
        text-indent: 21px;

        strong {
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 16px;
          letter-spacing: 0px;
          color: #008573;
        }

        span {
          display: inline-block;
          font-size: 40px;
          margin-left: 40px;
          cursor: pointer;
          text-indent: 0;
          color: #c8c8c8;
          &:hover{
            color: #9c9c9c;
          }
        }

        &:after {
          content: '';
          position: absolute;
          top: 21px;
          right: 0;
          width: 2px;
          height: 97px;
          background-color: #d8d8d8;
        }
      }

      .right_safety {
        width: 50%;
        padding: 34px 0 0 47px;

        .safe_lev {
          display: flex;
          justify-content: start;
          align-items: center;

          .star {
            color: #d0d0d0;
            margin-right: 8px;
            font-size: 40px;
          }

          .star_active {
            color: #ff690b;
            font-size: 40px;
            margin-right: 8px;
          }
        }

        & p {
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #171717;
        }
      }
    }

    .bottom_box {
      width: 100%;
      height: 780px;
      padding: 28px 20px 0;
      overflow: auto;

      & > p {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 14px;
        letter-spacing: 0px;
        color: #707070;
        margin-bottom: 16px;
      }
    }
  }

  /*公*/
  #grsy .el-col {
    text-align: center;
  }

  #grsy .one-col {
    line-height: 100px;
    background-color: white;
  }

  #grsy .user_image {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    margin-top: 40px;
  }

  #grsy .name {
    font-size: 16px;
    font-weight: bold;
    color: black;
    line-height: 24px;
    margin-top: 50px;
  }

  #grsy .yue {
    font-size: 16px;
    font-weight: normal;
    color: #1f7877;
    line-height: 24px;
    margin-top: 10px;
  }

  #grsy .icon_image {
    width: 24px;
    height: 24px;
    margin-top: 36px;
  }

  #grsy .one-col-list {
    line-height: 80px;
    background-color: #eee;
    width: calc(100% - 80px);
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid #c5c5c5;
  }

  #grsy .one-col-list .el-col .el-button {
    margin-top: 30px !important;
    width: 80%;
  }

  .blackname {
    text-align: left;
    font-size: 18px;
    color: black;
    line-height: 24px;
    margin-top: 26px;
  }

  .grayname {
    text-align: left;
    font-size: 14px;
    color: gray;
    line-height: 24px;
  }

  /*修改弹框样式*/
  #grsy .el-message-box__header {
    background-color: #eee !important;
    margin: 0 !important;
    padding: 12px !important;
    font-weight: 700;
  }

  #grsy .el-message-box {
    border-top: 4px solid #00772e
  }

  #grsy .el-message-box__headerbtn .el-message-box__close {
    color: #00772e !important
  }

  /*里面的绿色的字*/
  .green {
    font-size: 12px;
    color: #2aaca2;
    text-align: center;
  }

  .greens {
    font-size: 12px;
    color: #00772e;
    text-align: right;;
  }

  #grsy .demo-input-suffix {
    color: black;
    font-size: 14px;
    text-align: center
  }

  #grsy input {
    width: 264px;
    height: 38px;
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #dddddd;
    padding: 0 10px;
    margin: 10px 0;
    font-size: 14px;
  }
  #grsy .el-select{
    width: 264px;
    height: 38px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 14px;
  }
  #grsy .el-message-box__btns button {
    width: 26% !important;
  }

  #grsy .el-message-box__btns .el-button {
    color: #00772e !important;
    border-color: #00772e !important;
  }

  #grsy .el-message-box__btns .el-button--primary {
    background-color: #00772e !important;
    border-color: #00772e !important;
    color: white !important;
  }

  /*select 选择框*/
  #grsy .select {
    background-color: #fff;
    background-image: none;
    border-radius: 0px;
    border: 1px solid #000000;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    font-weight: bold;
    height: 30px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 70%;
  }

  #grsy .selects {
    background-color: #fff;
    background-image: none;
    border-radius: 0px;
    border: 1px solid #999;
    box-sizing: border-box;
    color: #acacac;
    display: inline-block;
    font-size: inherit;
    font-weight: normal;
    height: 30px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 70%;
  }

  #grsy .el-dialog__header {
    border-top: 4px solid #2ba498;
    height: 42px;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  #grsy .el-dialog__body {
    padding: 0;
  }

  #grsy .el-dialog__footer {
    padding: 25px 0 60px;
    text-align: center;
  }

  #grsy .pop_sure_btn {
    color: #fff;
    background-color: #008573;
    border-color: #008573;
    width: 120px;
  }

  #grsy .cancel_btn {
    background-color: #fff;
    border-color: #dddddd;
    width: 120px;
    color: #707070;

    &:hover {
      color: #fff;
      background-color: #008573 !important;
    }
  }

  #grsy .el-button {
    padding: 0;
    height: 35px;
  }

  .text_style {
    width: 70px;
    display: inline-block;
    text-align: right
  }

  .row_style {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  .row_text_style {
    width: 60px;
  }

  .row_style .el-select {
    width: 60%;
  }

  .mid_line {
    height: 80px;
    border-left: 1px solid #e5e6eb;
    position: absolute;
    left: -10%;
    top: 40px;
  }


  .change_color {
    background: #f1a104;
  }

  /* 刷新旋转动画 */
  .refresh_anima {
    animation: refresh 1.5s ease-in-out 0s 1 alternate forwards;
  }

  @keyframes refresh {
    from {
      transform: rotateZ(0deg)
    }
    to {
      transform: rotateZ(360deg)
    }

  }

  .pas_icon {
    margin-right: 10px;
    margin-left: 0 !important;
    font-size: 26px;
    color: #008573 !important;
  }
</style>
