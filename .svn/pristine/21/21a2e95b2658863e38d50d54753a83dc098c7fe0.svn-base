<template>
  <div class="helpcenter_chidrenbox">
    <div class="helpcenter_item1_title">责任博彩</div>
    <div class="helpcenter_item1_content">
      <h4 class="item1_top_title">责任博彩</h4>
      <div class="item1_small_title1">博彩调查问卷</div>
      <p>{{SysValue}}正在积极努力为玩家提供一个优质的娱乐平台。这些问题设置的目的在于，我们已经设置升级了多项安全设施来确保我们游戏的公平公正。我们鼓励客户通过回答我们的问卷来了解客户对博彩的危害问题的状况：</p>
      <ul class="help_ul">
        <li>• 您会因为躲避工作和学习来进行赌博吗？</li>
        <li>• 您会因为无聊或者不开心来进行赌博吗？</li>
        <li>• 您在注金投注完时，是否感觉钱已经丢掉或者说要尽快的再次下注？</li>
        <li>• 您会一直赌博直到您的钱都输完吗？</li>
        <li>• 您是否有说谎言借钱，甚至盗窃来进行博彩？</li>
        <li>• 您是否刻意隐瞒过您在博彩中会费的时间和资金吗？</li>
        <li>• 您是否不愿意花费您的赌金在其他方面呢？</li>
        <li>• 您是否已经对家人，朋友和爱好失去了兴趣？</li>
        <li>• 加入您的注金全部投注完，您是否会感到尽快赢回您输掉的资金？</li>
      </ul>
      <div class="qusetion_box">
        <strong>您也能往GamCare的网址www.gamcare.org.uk查寻更多关于赌博问题的解决以开导方式。 </strong>
      </div>
      <div class="item1_small_title1">自我隔离</div>
      <p>对于一些客户希望暂时远离博彩，我们将提供一个自我排除的功能，您可以申请六个月到五年的账户关闭。请联系在线客服，我们的客服人员会为您带来更多资讯。</p>
      <div class="item1_small_title1">年龄限制</div>
      <p>
        18岁以下的人群是禁止赌博的，{{SysValue}}将保有对顾客所提供年龄信息证明的查询，如有发现年龄证明与客户所提供的不符，我们将关闭客户的账号以及冻结所剩余的资金。由于各地的法令条款不同，因此我们建议客户在进行博彩游戏前，翻阅当地法律进行查询。</p>
      <div class="qusetion_box">
        <strong>{{SysValue}}禁止您开设多重账号，匿名平台账号，以及密码的滥用。</strong>
      </div>
      <div class="item1_small_title1">家长的监控</div>
      <div class="qusetion_box">
        <div>有来自很多父母以及监护人要求对网络进行过滤，我们推荐一下网站:</div>
      </div>
      <ul class="help_ul">
        <li>• Net Nanny 软件能保护孩子远离不适当网站: www.netnanny.com</li>
        <li>• CYBERsitter 将允许父母设置隔离的网站: www.cybersitter.com</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {SysKey} from "../../util/sysconfig";

  export default {
    data() {
      return {
        SysValue: SysKey("SysName").SysValue

      }
    },
    created(){
      if(!window.userInfo || window.userInfo == null){
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

  .help_ul > li {
    line-height: 24px;
    font-size: 14px;
    margin-top: 8px;
  }

  .helpcenter_item1_content {
    padding: 16px 31px;
    color: #606060;
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

  .item1_small_content1 {
    font-size: 14px;
    line-height: 24px;
    padding-left: 10px;
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

  .qusetion_box {
    padding-left: 10px;
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
  }

  .qusetion_box strong {
    color: #1f7879;
  }
</style>

