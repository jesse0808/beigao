<template>
    <div class="bottom_mainbox">
        <div class="top box_center">
            <!-- 合作伙伴 -->
            <div class='cooperation'>
                <div class="box_flex">合作伙伴</div>
                <div class="box_con">
                    <a href="#"><img src="../../assets/img/footer/pt.png"></a>
                    <a href="#"><img src="../../assets/img/footer/bbin.png"></a>
                    <a href="#"><img src="../../assets/img/footer/microgaming.png"></a>
                    <a href="#"><img src="../../assets/img/footer/AG.png"></a>
                    <a href="#"><img src="../../assets/img/footer/oriental.png"></a>
                </div>
            </div>
            <!-- 支付机构 -->
            <div class="pay_for_box">
                <div class="box_flex">支付机构</div>
                <div class="box_con">
                    <a href="#"><img src="../../assets/img/footer/alipay.png"></a>
                    <a href="#"><img src="../../assets/img/footer/wechat.png"></a>
                    <a href="#"><img src="../../assets/img/footer/unionpay.png"></a>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <!-- 介绍 -->
        <div class="mian_vuebottom box_center">
            <div class="intro_box">
                <router-link to="/help">关于我们</router-link>
                <span>|</span>
                <router-link to="/four">责任博彩</router-link>
                <span>|</span>
                <router-link to="/second">彩种介绍</router-link>
                <span>|</span>
                <router-link to="/sven">使用条款</router-link>
                <span>|</span>
                <router-link to="/three">玩法介绍</router-link>
            </div>
            <div class="info_box">Copyright ©2012-2021 贝高娱乐 ALL Rights Reserved</div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .bottom_mainbox{
        position: relative;
        width: 100%;
        height: 260px;
        z-index: 4;
        background-color: #33363D;

        .top{
            display: flex;
            justify-content: space-between;
            height: 129px;
            border-bottom: 1px solid; 
            border-image:linear-gradient(#33363D, #858585,#33363D);

            .cooperation{
                width: 634px;
                height: 100%;
            }

            .pay_for_box{
                color:#4f4f52;
                line-height: 79px;
                font-size: 13px;
                text-align: center;
            }

            .box_flex{
                width:100%;
                height: 30px;
                line-height: 30px;
                text-align: left;
                font-size: 16px;
                color: #008573;
                margin-top: 30px;
            }

            .box_con{
                display: flex;
                justify-content: left;
                margin-top: 15px;

                a{
                    margin-right: 30px;
                    line-height: 0;
                }
            }
        }

        .line{
            width: 100%;
            height: 1px;
            margin-top: 10px;
            background: linear-gradient(90deg, rgba(51, 54, 61, 0), rgba(133, 133, 133, 0.99), rgba(51, 54, 61, 0));
            opacity: 0.7;
        }

        .mian_vuebottom{
            height: 110px;
            text-align: center;
            color:#fff;
            font-size: 14px;
            font-weight:lighter;

            .intro_box {
                margin-top: 10px;
                padding: 20px 0;

                a{
                    color:#fff;
                }

                span{
                    margin:0 12px;
                }
            }
            .info_box{
                color:#fff;
            }
        }
    }
</style>
