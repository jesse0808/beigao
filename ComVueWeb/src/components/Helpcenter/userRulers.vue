<template>
  <div class="helpcenter_chidrenbox">
    <div class="helpcenter_item1_title">使用条款</div>
    <div class="helpcenter_item1_content">
      <h4 class="item1_top_title">使用条款</h4>
      <ul class="help_ul">
        <li>一、为避免于本网站投注时之争议，请会员务必于进入网站前详阅本站所定之各项规则，客户进入本网站进行投注时，即被视为已接受本平台的所有协议与规则。</li>
        <li>
          二、请定期修改自己的登录密码及资金密码，会员有责任确保自己的帐户以及登入资料的保密性，以会员帐号及密码进行的任何网上投注，将被视为有效。敬请不定时做密码变更之动作。若帐号密码被盗用，进行的投注，本公司一概不负赔偿责任。
        </li>
        <li>
          三、投注相关条款：①网上投注如未能成功提交，投注将被视为无效。②凡玩家于开奖途中且尚无结果前自动或强制断线时，并不影响开奖结算之结果。③若遇官网未开奖或开奖结果错误，本平台将根据实际情况做退奖退买处理；④如遇发生不可抗拒之灾害，骇客入侵，网络问题造成数据丢失的情况，以本公司公告为最终方案。⑤本公司将会对所有的电子交易进行记录，如有任何争议，本公司将会以注单记录为准。
        </li>
        <li>四、若经本公司发现会员以不正当手法&lt;利用外挂程式&gt;进行投注或以任何非正常方式进行的个人、团体投注有损公司利益之投注情事发生，本公司保留权利取消该类注单以及注单产生之红利，并停用该会员帐号。无论代理还是会员，发现漏洞隐瞒不报，利用漏洞恶意刷钱、通过非法手段作弊、或造谣污蔑，攻击平台者，经平台核实后一律无条件永久冻结账号处理，账号所有金钱概不退还。</li>
        <li>五、若本公司发现会员有重复申请帐号行为时，保留取消、收回会员所有优惠红利，以及优惠红利所产生的盈利之权利。每位玩家、每一住址、每一电子邮箱、每一电话号码、相同支付卡/信用卡号码，以及共享电脑环境
          (例如:网吧、其他公共用电脑等)只能够拥有一个会员帐号，各项优惠只适用于每位客户在本公司唯一的帐户。
          六、本平台高频彩种每期最高奖金限额200000.00元，超出按200000.00元计算，超出的奖金无效并清0；低频彩种每期最高奖金限额100000.00元，超出按100000.00元计算，超出的奖金无效并清0。
        </li>
        <li>七、任意彩种玩法单挑限额最高2万元，超过按2万元计算 单挑说明：投注金额除以中奖奖金小于或等于2%均视为单挑！例如： 例如：五星直选2000注以内，四星直选201注以内，三星直选20注以内均属于单挑！
        </li>
        <li>八、平台取款时间为上午10:00-凌晨2:00，每日五次，每次最低1元,最高50000.00元，由于自身绑定账号错误或者提款自行取消等自身问题造成的取款次数减少失效，平台慨不负责</li>
        <li>九、平台严禁内招，首次发现冻结账号一周处理，期间不允许任何开号和招商。第二次发现直接封号或降级处理。情形严重，扰乱市场者，直接驱逐出平台，拉入平台黑名单，永久不再接纳。</li>
        <li>十、为了防止有人恶意洗钱，会员提款必须要消费充值的30%方可申请，否则财务不予受理。</li>
        <li>十一、平台客服没有任何QQ及其他联系方式，唯一途经点击菜单栏客服热线跳转至在线客服，客服电话0063-9999-255555，其他均为假冒，请牢记，因此类问题上当受骗平台慨不负责。</li>
        <li>十二、不经核实乱放高点，恶意利用手中配额扰乱市场者，广告词中以超高返点分红为诱饵，回收全部配额处理，严重的降级或者封号。</li>
        <li>十三、银行或财付通充值账号不定期更换，请每次充值前务必打开充值界面获取最新收款账号，如自己充错造成的任何损失自由承担，与平台无关。</li>
        <li>十四、本公司保留不定时修改或增加本协定或游戏规则或保密条例等的操作权利，更改之条款将从更改发生后立即生效，并保留一切有争议事项及最后的决策权。</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {

    created() {
      if (!window.userInfo || window.userInfo == null) {
        // this.$router.push("/login");
      }
    }
  }
</script>
<style>
  .helpcenter_chidrenbox {
    overflow: hidden;
  }

  .helpcenter_item1_title {
    height: 42px;
    border-bottom: 2px solid #2ba498;
    line-height: 42px;
    padding: 0 20px;
    font-size: 16px;
  }

  .helpcenter_item1_content {
    padding: 16px 31px;
    color: #606060;
  }

  .help_ul > li {
    line-height: 24px;
    font-size: 14px;
    margin-top: 8px;
  }

  .helpcenter_item1_content p {
    text-indent: 28px;
    font-size: 14px;
    padding: 11px 0;
  }

  .item1_top_title {
    color: #1f7879;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
  }

  .item1_small_title1 {
    background: #f3f9f8;
    line-height: 30px;
    height: 30px;
    color: #1f7879;
    font-weight: bold;
    padding: 0 12px;
    font-size: 16px;
    margin-top: 16px;
  }

  .rules_box {
    font-size: 14px;
    padding: 0 28px;
  }

  .rules_box > h4 {
    font-size: 14px;
    padding: 12px 0 0;
  }

  .rules_box > .titlecolor1 {
    color: #000;
  }

  .rules_box > .titlecolor2 {
    color: #1f7879;
  }

  .rules_box > div {
    text-indent: 28px;
  }

  .rules_box > .intro {
    padding: 18px 0;
  }
</style>

