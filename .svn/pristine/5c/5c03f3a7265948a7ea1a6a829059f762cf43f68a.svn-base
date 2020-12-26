<template>
    <div class="lottery_box">
        <div class="textarea_box" v-if="inputStatus === 1">
            <div class="textarea_div">
                <div class="title">
                    <b>{{boxText.title}}</b>
                </div>
                <div class="text">
                    <label>
                        <textarea :placeholder="boxText.placeholder||''" v-model="boxInputVal"/>
                    </label>
                </div>
                <a href="javascript:void(0)" class="textarea_clear" @click="boxInputVal = ''">清空</a>
            </div>
        </div>
        <div class="sum_value" v-else-if="inputStatus === 2">
            <div class="sum_value_div">
                <div class="sum_title">
                    <span>{{boxText.title}}</span>
                </div>
                <div class="sum_box moreQiu_bg">
                    <a href="javascript:void(0)" @click="selectClicka(index)" v-for="(item,index) in boxText.num"
                       :class="item.state?'select_a':''" :key="index">{{item.value}}</a>
                </div>
            </div>
        </div>
        <div class="boxer_div" v-else-if="inputStatus === 3">
            <div class="boxer_box">
                <div class="boxer_title">
                    <span>{{boxText.title}}</span>
                </div>
                <div class="boxer_content">
                    <a href="javascript:void(0)" @click="selectClicka(0)"
                       :class="[boxText.num[0].state ?'ch_a':'un_a']">
                        <img v-show="boxText.num[0].state" src="../../../assets/img/icon/longhu_long1.png" alt="">
                        <img v-show="!boxText.num[0].state" src="../../../assets/img/icon/longhu_long2.png" alt="">
                        <span class="name">{{boxText.num[0].value}}</span>
                        <span class="text"><span>￥</span>{{getViewShowJj(boxText.num[0].value)}}</span>
                    </a>
                    <a href="javascript:void(0)" @click="selectClicka(1)"
                       :class="[boxText.num[1].state ?'ch_a':'un_a']">
                        <img v-show="boxText.num[1].state" src="../../../assets/img/icon/longhu_hu1.png" alt="">
                        <img v-show="!boxText.num[1].state" src="../../../assets/img/icon/longhu_hu2.png" alt="">
                        <span class="name">{{boxText.num[1].value}}</span>
                        <span class="text"><span>￥</span>{{getViewShowJj(boxText.num[1].value)}}</span>
                    </a>
                    <a href="javascript:void(0)" @click="selectClicka(2)"
                       :class="[boxText.num[2].state ?'ch_a':'un_a']">
                        <img v-show="boxText.num[2].state" src="../../../assets/img/icon/longhu_he1.png" alt="">
                        <img v-show="!boxText.num[2].state" src="../../../assets/img/icon/longhu_he2.png" alt="">
                        <span class="name">{{boxText.num[2].value}}</span>
                        <span class="text"><span>￥</span>{{getViewShowJj(boxText.num[2].value)}}</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="textarea_box" v-else-if="inputStatus === 4">
            <div class="textarea_div">
                <div class="title">
                    <b>{{boxText.title}}</b>
                </div>
                <div class="text">
                    <p v-if="gameId == 62">您选择了 <span>{{locationNum}}</span> 个位置,根据您选择的组合成<span>{{locationNum === 4?1:locationNum ===5 ? 5: 0}}</span> 个方案
                    </p>
                    <p v-if="gameId == 64 ||gameId == 67">您选择了 <span>{{locationNum}}</span>个位置,根据您选择的组合成<span>{{locationNum === 3?1:locationNum ===4 ? 4: locationNum ===5?10:0}}</span> 个方案
                    </p>
                    <p v-if="gameId == 69">您选择了 <span>{{locationNum}}</span> 个位置,根据您选择的组合成 <span>{{locationNum === 2?1:locationNum === 3?3:locationNum ===4 ? 6: locationNum ===5?10:0}}</span> 个方案
                    </p>
                    <label>
                        <textarea :placeholder="boxText.placeholder||''" v-model="boxInputVal"/>
                    </label>
                </div>
                <div class="radio_div">
                    <a href="javascript:void(0)" @click="checkClick(index)" v-for="(item,index) in checkData"
                       :key="index">
                        <img v-show="item.state" src="../../../assets/img/icon/zuliu.png" alt="">
                        <img v-show="!item.state" src="../../../assets/img/icon/zuliu2.png" alt=""> <span>{{item.value}}</span>
                    </a>
                </div>
                <a href="javascript:void(0)" class="textarea_clear" @click="boxInputVal = ''">清空</a>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 5">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun">
                        <a href="javascript:void(0)" @click="checkAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <p v-if="gameId == 65 || gameId == 66">您选择了<span>{{locationNum}}</span>个位置,根据您选择的组合成<span>{{locationNum === 3?1:locationNum ===4 ? 4: locationNum ===5?10:0}}</span>个方案
                </p>
                <div class="ssc_lottery moreQiu_bg">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">{{val.value}}</a>
                </div>
                <div class="radio_div">
                    <a href="javascript:void(0)" @click="checkClick(index)" v-for="(item,index) in checkData"
                       :key="index">
                        <img v-show="item.state" src="../../../assets/img/icon/zuliu.png" alt="">
                        <img v-show="!item.state" src="../../../assets/img/icon/zuliu2.png" alt=""><span>&ensp;{{item.value}}</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 6">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                </div>
                <div class="lh_lottery">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">{{val.value}}</a>
                </div>
            </div>
        </div>
        <div class="sum_value" v-else-if="inputStatus === 7">
            <div class="sum_value_div">
                <div class="sum_title">
                    <span>{{boxText.title}}</span>
                </div>
                <div class="fc_box">
                    <a href="javascript:void(0)" @click="selectClicka(index)" v-for="(item,index) in boxText.num"
                       :class="item.state?'select_a':''" :key="index">
                        <span class="title">{{item.value}}</span>
                        <span class="money">￥{{getViewShowJj(item.value)}}</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="sum_value" v-else-if="inputStatus === 8">
            <div class="sum_value_div">
                <div class="sum_title">
                    <span>{{boxText.title}}</span>
                </div>
                <div class="fc_box_text">
                    <a href="javascript:void(0)" @click="selectClicka(index)" v-for="(item,index) in boxText.num"
                       :class="item.state?'select_a':''" :key="index">{{item.value}}</a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 9">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun">
                        <a href="javascript:void(0)" @click="checkAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <div class="flk_lottery">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">
                        <img v-if="val.value == 1" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b1.png" alt="">
                        <img v-if="val.value == 2" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b2.png" alt="">
                        <img v-if="val.value == 3" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b3.png" alt="">
                        <img v-if="val.value == 4" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b4.png" alt="">
                        <img v-if="val.value == 5" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b5.png" alt="">
                        <img v-if="val.value == 6" v-for="item in 3" :key="item"
                             src="../../../assets/img/icon/touzi_b6.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 10">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun">
                        <a href="javascript:void(0)" @click="checkAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <div class="flk_lottery_one">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">
                        <img v-if="val.value == 1" src="../../../assets/img/icon/touzi_b1.png" alt="">
                        <img v-if="val.value == 2" src="../../../assets/img/icon/touzi_b2.png" alt="">
                        <img v-if="val.value == 3" src="../../../assets/img/icon/touzi_b3.png" alt="">
                        <img v-if="val.value == 4" src="../../../assets/img/icon/touzi_b4.png" alt="">
                        <img v-if="val.value == 5" src="../../../assets/img/icon/touzi_b5.png" alt="">
                        <img v-if="val.value == 6" src="../../../assets/img/icon/touzi_b6.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 11">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun">
                        <a href="javascript:void(0)" @click="checkAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <div class="flk_lottery_one">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">
                        <img v-if="val.value == 1" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b1.png" alt="">
                        <img v-if="val.value == 2" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b2.png" alt="">
                        <img v-if="val.value == 3" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b3.png" alt="">
                        <img v-if="val.value == 4" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b4.png" alt="">
                        <img v-if="val.value == 5" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b5.png" alt="">
                        <img v-if="val.value == 6" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b6.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else-if="inputStatus === 12">
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun">
                        <a href="javascript:void(0)" @click="checkFckAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkFckBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkFckSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkFckOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkFckDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <div class="flk_lottery_one">
                    <a href="javascript:void(0)" @click="selectFckClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">
                        <img v-if="val.value == 1" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b1.png" alt="">
                        <img v-if="val.value == 2" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b2.png" alt="">
                        <img v-if="val.value == 3" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b3.png" alt="">
                        <img v-if="val.value == 4" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b4.png" alt="">
                        <img v-if="val.value == 5" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b5.png" alt="">
                        <img v-if="val.value == 6" v-for="item in item.imgLength" :key="item"
                             src="../../../assets/img/icon/touzi_b6.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="ssc_box" v-else>
            <div class="ssc_item" v-for="(item,index) in boxData" :key="index">
                <div class="ssc_title">
                    <span>{{item.digit}}</span>
                    <div class="title_fun" v-if="showTool">
                        <a href="javascript:void(0)" @click="checkAll(index)">全</a>
                        <a href="javascript:void(0)" @click="checkBig(index)">大</a>
                        <a href="javascript:void(0)" @click="checkSmall(index)">小</a>
                        <a href="javascript:void(0)" @click="checkOdd(index)">单</a>
                        <a href="javascript:void(0)" @click="checkDual(index)">双</a>
                        <a href="javascript:void(0)" @click="resetAll(index)">清</a>
                    </div>
                </div>
                <div class="ssc_lottery moreQiu_bg">
                    <a href="javascript:void(0)" @click="selectClick(index,num)" :class="val.state?'select_a':''"
                       v-for="(val,num) in item.num" :key="num">{{val.value}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gameContent from "@/util/lotteryContent.json"
    import {returnBetData, returnBetInputData} from "../../../util/disposeLottery";

    export default {
        name: "lotteryBox",
        data() {
            return {
                boxData: [],//选择球类
                boxText: {},//选择输入框类
                boxInputVal: '',//手动输入框的值
                checkData: [
                    {
                        value: '万',
                        state: false
                    },
                    {
                        value: '千',
                        state: false
                    },
                    {
                        value: '百',
                        state: false
                    },
                    {
                        value: '十',
                        state: false
                    },
                    {
                        value: '个',
                        state: false
                    },
                ],//直选单式
                locationNum: 0,
                rxDsForMart: '',
                showTool: true,//是否显示 全 大 小 单 双 清 的工具栏
            }
        },
        props: {
            gameClass: {//系列id 1 时时彩 2 PK10 3 十一选五 4 福彩快三 5 PC蛋蛋 6 低频彩
                type: [Number, String],
                required: true
            },
            gameId: {//当前选中玩法id
                type: [Number, String],
                required: true
            },
            nowSelectJj: {
                type: [Number],
                required: true
            }
        },
        created() {
            this.getGameContent()
        },
        computed: {
            inputStatus() {
                if (this.gameId == 2 || this.gameId == 26 || this.gameId == 14 || this.gameId == 20 || this.gameId == 31 || this.gameId == 33 || this.gameId == 38 || this.gameId == 40 || this.gameId == 45 || this.gameId == 47 || this.gameId == 50 || this.gameId == 82 || this.gameId == 84 || this.gameId == 86 || this.gameId == 88 || this.gameId == 90 || this.gameId == 95 || this.gameId == 97 || this.gameId == 99 || this.gameId == 101 || this.gameId == 105 || this.gameId == 108 || this.gameId == 110 || this.gameId == 112 || this.gameId == 114 || this.gameId == 116 || this.gameId == 118 || this.gameId == 182 || this.gameId == 169 || this.gameId == 173 || this.gameId == 175 || this.gameId == 178) {
                    return 1;
                } else if (this.gameId == 27 || this.gameId == 34 || this.gameId == 41 || this.gameId == 170) {
                    return 2;
                } else if (this.gameId == 70 || this.gameId == 71 || this.gameId == 72 || this.gameId == 73 || this.gameId == 74 || this.gameId == 75 || this.gameId == 80 || this.gameId == 77 || this.gameId == 78 || this.gameId == 79) {
                    return 3;
                } else if (this.gameId == 62 || this.gameId == 64 || this.gameId == 67 || this.gameId == 69) {
                    return 4
                } else if (this.gameId == 65 || this.gameId == 66) {
                    return 5
                } else if (this.gameId == 93) {
                    return 6
                } else if (this.gameId == 119 || this.gameId == 184 || this.gameId == 185) {
                    return 7 //快三和值 赛车冠亚和值 赛车冠亚大小单双
                } else if (this.gameId == 120 || this.gameId == 123 || this.gameId == 183) {
                    return 8
                } else if (this.gameId == 121) {
                    return 9
                } else if (this.gameId == 122 || this.gameId == 126) {
                    return 10
                } else if (this.gameId == 124) {
                    return 11
                } else if (this.gameId == 125) {
                    return 12
                } else {
                    return false;
                }
            }
        },
        watch: {
            gameId(num) {
                //  console.log(this.gameId)
                this.boxData = [];
                this.boxText = {};
                //强制刷新，解决页面不会重新渲染的问题
                this.$forceUpdate();
                this.getGameContent();
                if (this.gameId == 62 || this.gameId == 64 || this.gameId == 65 || this.gameId == 66 || this.gameId == 67 || this.gameId == 69) {
                    this.installSet()
                }
                if (this.gameId == 92)
                    this.showTool = false;//不显示工具栏
            },
            boxInputVal(val) {
                this.boxInputVal = val.replace(/[^0-9,\s]/ig, '');
                this.filterInputData(this.boxInputVal)
            }
        },
        methods: {
            //初始化默认数据
            installSet() {
                this.locationNum = gameContent[this.gameId]['betLength'];
                let tex = '';
                this.checkData.forEach((item, index) => {
                    if (index >= parseInt(5 - this.locationNum)) {
                        item.state = true;
                        tex += item.value
                    } else {
                        item.state = false
                    }
                });
                this.rxDsForMart = tex;
            },
            //带多选条件的自定义输入框
            checkClick(num) {
                this.checkData[num].state = !this.checkData[num].state;
                let val = 0;
                let tex = '';
                this.checkData.forEach(item => {
                    if (item.state) {
                        val += 1;
                        tex += item.value
                    }
                });
                this.locationNum = val;
                this.rxDsForMart = tex;
                if (this.gameId == 65 || this.gameId == 66) {
                    this.filterData()
                } else {
                    this.filterInputData(this.boxInputVal)
                }
            },
            //玩法内容填充
            getGameContent() {
                // console.log(gameContent[this.gameId])
                if (!this.inputStatus || this.inputStatus === 5 || this.inputStatus === 6 || this.inputStatus === 9 || this.inputStatus === 10 || this.inputStatus === 11 || this.inputStatus === 12) {
                    this.boxData = [...gameContent[this.gameId]['type']]
                } else {
                    this.boxText = Object.assign({}, gameContent[this.gameId])
                }
            },
            // 选中球
            selectClick(index, num) {
                this.boxData[index].num[num].state = !this.boxData[index].num[num].state;
                this.filterData()
            },
            //福彩快三选中
            selectFckClick(index, num) {
                this.boxData[index].num[num].state = !this.boxData[index].num[num].state;
                this.boxData[index == 0 ? 1 : 0].num[num].state = false;
                this.filterData()
            },
            //快三和值 赛车冠亚和值 冠亚大小单双
            selectClicka(num) {
                this.boxText.num[num].state = !this.boxText.num[num].state
                let data = returnBetData(this.gameId, this.boxText.num);
                console.log(data)
                this.$emit('selectReturnData', data)
            },
            filterData: function () {
                let data = returnBetData(this.gameId, this.boxData, this.locationNum, this.rxDsForMart);
                this.$emit('selectReturnData', data)
            },
            //处理输入框自定义数据
            filterInputData(data) {
                if (this.gameId == 62 || this.gameId == 64 || this.gameId == 67 || this.gameId == 69) {
                    let obj = returnBetInputData(this.gameId, data, this.locationNum, this.rxDsForMart);
                    this.$emit('selectReturnData', obj)
                } else {
                    let obj = returnBetData(this.gameId, data);
                    this.$emit('selectReturnData', obj)
                }
            },
            resetData() {
                if (this.boxData.length > 0) {
                    this.boxData.forEach((item, index) => {
                        let itemNode = item.num
                        for (let i = 0; i < itemNode.length; i++) {
                            itemNode[i].state = false
                        }
                    });
                }
                if (this.boxText.num) {
                    this.boxText.num.forEach(item => {
                        item.state = false
                    });
                }
                this.boxInputVal = ''
                this.$emit('selectReturnData', {data: '', num: 0});
                if (this.inputStatus == 2) {
                    this.boxText.num.forEach(item => {
                        item.state = false
                    })
                }
            },
            //取最大值
            selectMax(obj) {
                let num = 0;
                obj.forEach(item => {
                    if (item.value > num) {
                        num = item.value
                    }
                });
                return num
            },
            //取最小值
            selectMin(obj) {
                let num = 10;
                obj.forEach(item => {
                    if (Number(item.value) < num) {
                        num = item.value
                    }
                });
                return num
            },
            //选中当前列所有
            checkAll(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = true
                });
                this.filterData()
            },
            //福彩快3的快捷键
            checkFckAll(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = true
                });
                this.boxData[num == 0 ? 1 : 0].num.forEach((item, index) => {
                    item.state = false
                });
                this.filterData()
            },
            checkFckBig(num) {
                let maxNum = this.selectMax(this.boxData[num].num);
                let minNum = this.selectMin(this.boxData[num].num);
                let sum = parseInt(Number(maxNum) + Number(minNum) - 1) / 2;
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value > parseInt(Number(maxNum) + Number(minNum)) / 2;
                });
                this.boxData[num == 0 ? 1 : 0].num.forEach((item, index) => {
                    if (index >= sum) {
                        item.state = false;
                    }
                });
                this.filterData()
            },
            //选中当前列大
            checkBig(num) {
                let maxNum = this.selectMax(this.boxData[num].num);
                let minNum = this.selectMin(this.boxData[num].num);
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value > parseInt(Number(maxNum) + Number(minNum)) / 2;
                });
                this.filterData()
            },
            //小
            checkFckSmall(num) {
                let maxNum = this.selectMax(this.boxData[num].num);
                let minNum = this.selectMin(this.boxData[num].num);
                let sum = parseInt(Number(maxNum) + Number(minNum) - 1) / 2;
                this.boxData[num].num.forEach((item, index) => {
                    item.state = parseInt(Number(maxNum) + Number(minNum)) / 2 > item.value;
                });
                this.boxData[num == 0 ? 1 : 0].num.forEach((item, index) => {
                    if (index < sum) {
                        item.state = false;
                    }
                });
                this.filterData()
            },
            checkSmall(num) {
                let maxNum = this.selectMax(this.boxData[num].num);
                let minNum = this.selectMin(this.boxData[num].num);
                this.boxData[num].num.forEach((item, index) => {
                    item.state = parseInt(Number(maxNum) + Number(minNum)) / 2 > item.value;
                });
                this.filterData()
            },
            //单
            checkOdd(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value % 2 === 1;
                });
                this.filterData()
            },
            //单
            checkFckOdd(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value % 2 === 1;
                });
                this.boxData[num == 0 ? 1 : 0].num.forEach((item, index) => {
                    if (index % 2 === 0) {
                        item.state = false;
                    }
                });
                this.filterData()
            },
            //双
            checkDual(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value % 2 === 0;
                });
                this.filterData()
            },
            //双
            checkFckDual(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = item.value % 2 === 0;
                });
                this.boxData[num == 0 ? 1 : 0].num.forEach((item, index) => {
                    if (index % 2 === 1) {
                        item.state = false;
                    }
                });
                this.filterData()
            },
            //清除
            resetAll(num) {
                this.boxData[num].num.forEach((item, index) => {
                    item.state = false;
                })
                this.filterData()
            },
            //清除全部
            clearAllCheck() {
                this.boxData.forEach((item, index) => {
                    this.resetAll(index)
                });
                this.$emit('selectReturnData', {});
            },
            //玩法提示
            playTip() {
                let play = gameContent[this.gameId];
                if (play != null) {
                    let kjinfo = '';
                    if (play.hintContent) kjinfo = `\n开奖 ${play.hintContent}`; //有开奖内容提示才显示
                    this.$dialog.alert({
                        messageAlign: "left",
                        closeOnClickOverlay: true,
                        message: `${play.hintText}\n示例: \n投注 ${play.hintTitle} ${kjinfo}`
                    });
                } else
                    this.$dialog.alert({message: `玩法提示`})
            },
            //获取界面数字球显示的奖金
            getViewShowJj: function (num) {
                console.log()
                let tzsjj = Number(this.nowSelectJj);//当前用户选中的奖金
                if (this.gameClass == 1)//时时彩龙虎奖金
                    return this.getSscLhJj(tzsjj, num);
                else if (this.gameClass == 4)//快三直选和值奖金
                    return this.getK3HzJj(tzsjj, num);
                else if (this.gameClass == 2 && this.gameId == 184)//赛车冠亚和值奖金
                    return this.getPk10GyhzJj(tzsjj, num);
                else if (this.gameClass == 2 && this.gameId == 185)//赛车冠亚大小单双
                    return this.getPk10GydxdsJj(tzsjj, num);
                else
                    return 0;
            },
            //获取时时彩系列龙虎和的显示奖金
            getSscLhJj: function (tzsjj, num) {
                if (num == '龙' || num == '虎')//返回龙虎的奖金
                    return (tzsjj / 4.5).toFixed(3);
                else //返回和的奖金
                    return tzsjj.toFixed(3);
            },
            //获取快3和值数字对应的奖金
            getK3HzJj: function (tzsjj, num) {
                let jj = 0;
                if (!num)
                    return 0;
                switch (num) {
                    case "3":
                    case "18":
                        jj = tzsjj;
                        break;
                    case "4":
                    case "17":
                        jj = tzsjj / 3;
                        break;
                    case "5":
                    case "16":
                        jj = tzsjj / 6;
                        break;
                    case "6":
                    case "15":
                        jj = tzsjj / 10;
                        break;
                    case "7":
                    case "14":
                        jj = tzsjj / 15;
                        break;
                    case "8":
                    case "13":
                        jj = tzsjj / 21;
                        break;
                    case "9":
                    case "12":
                        jj = tzsjj / 25;
                        break;
                    case "10":
                    case "11":
                        jj = tzsjj / 27;
                        break;
                    default:
                        return 0;
                }
                return jj.toFixed(3);
            },
            //获取赛车冠亚和值 数字对应的奖金
            getPk10GyhzJj: function (tzsjj, num) {
                let jj = 0;
                if (!num)
                    return 0;
                switch (num) {
                    case "3":
                    case "4":
                    case "18":
                    case "19":
                        jj = tzsjj;
                        break;
                    case "5":
                    case "6":
                    case "16":
                    case "17":
                        jj = tzsjj / 2;
                        break;
                    case "7":
                    case "8":
                    case "14":
                    case "15":
                        jj = tzsjj / 3;
                        break;
                    case "9":
                    case "10":
                    case "12":
                    case "13":
                        jj = tzsjj / 4;
                        break;
                    case "11":
                        jj = tzsjj / 5;
                        break;
                    default:
                        return 0;
                }
                return jj.toFixed(3);
            },
            //获取赛车冠亚大小单双 数字对应的奖金
            getPk10GydxdsJj: function (tzsjj, num) {
                if (num == '大' || num == '双')
                    return tzsjj.toFixed(3);
                else
                    return (tzsjj / 1.25).toFixed(3);
            }
        }
    }
</script>

<style lang="less" scoped>
    @theme-color: #008573; /*主背景色*/
    .lottery_box {
        width: 100%;
        /*padding-bottom: .14666rem;*/
        background-color: #eeeeee;
        //常规球
        .moreQiu_bg {
            //常规未选中的玩法球
            a {
                display: inline-block;
                width: 1.06666rem;
                height: 1.06666rem;
                line-height: 1.06666rem;
                text-align: center;
                font-size: .4rem;
                margin: .25rem .85rem 0 0;
                color: #666666;
               /* background: url("../../../assets/img/icon/qiu2.png") repeat center/cover;
                background-size: 100% 100%;
                background-repead: no-repead;*/

                border-radius:1.06666rem;
                background-image: linear-gradient(0deg,
                #ffffff 0%,
                #f7f7f7 19%,
                #ffffff 100%),
                linear-gradient(#ececec,
                #ececec);
                background-blend-mode: normal,
                normal;
                box-shadow: 0 .04rem .04rem 0 rgba(0, 0, 0, 0.09);
                border: solid 1px #b2b2b2;

                &:nth-child(5n) {
                    margin-right: 0;
                }
            }

            /* 常规选中后的玩法球 */

            .select_a {
           //    background: url("../../../assets/img/icon/qiu1.png") repeat center/cover !important;
                color: #ffffff !important;
                background-image: linear-gradient(0deg,
                #07b69d 0%,
                #009883 19%,
                #07b69d 100%),
                linear-gradient(
                        #ececec,
                        #ececec) !important;
                background-blend-mode: normal,
                normal;
                .title {
                    color: #ffffff !important;
                }

                .money {
                    color: #ffffff !important;
                }

                .txt_title {
                    color: #ffffff !important;
                }

                .txt_num {
                    color: #ffffff !important;
                }
            }
        }

        .ssc_box {
            width: 9.5rem;
            margin: 0 auto;
            padding-top: .26666rem;

            .ssc_item {
                width: 9.46666rem;
                /*height: 4rem;*/
                background-color: #ffffff;
                box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: .13333rem;
                margin-bottom: .26666rem;
                padding: 0 .26666rem .28rem;

                p {
                    padding: .33333rem 0;
                    font-size: .34666rem;
                    color: #000000;

                    span {
                        color: #ff5b01;
                    }
                }

                .radio_div {
                    width: 100%;
                    display: flex;
                    padding-top: .42666rem;
                    justify-content: center;

                    a {
                        display: flex;
                        /*width: .42rem;*/
                        height: .42rem;
                        margin: 0 .2rem;
                        font-size: 0;

                        img {
                            display: inline-block;
                            width: .42rem;
                            height: .42rem;
                        }

                        span {
                            font-size: .34666rem;
                            color: #000000;
                            margin-left: .1rem;
                        }
                    }
                }

                .ssc_title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 1.08rem;
                    border-bottom: solid .01333rem #ebebeb;

                    span {
                        font-size: .37333rem;
                        color: #333333;
                    }

                    .title_fun {
                        display: flex;
                        align-items: center;
                        height: 1.08rem;

                        a {
                            display: inline-block;
                            width: 1rem;
                            height: 1rem;
                            line-height: 1rem;
                            font-size: .32rem;
                            color: #666666;
                        }
                    }
                }

                .ssc_lottery {
                    display: flex;
                    flex-wrap: wrap;
                    padding: .25rem 0rem ;
                }

                .flk_lottery {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 .1rem .29333rem;
                    /*border-bottom: 1px solid #E2E7ED;*/

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 3.68rem;
                        height: 1.28rem;
                        margin: .33333rem .3rem 0;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: 0;

                        img {
                            width: .93333rem;
                            height: .93333rem;
                        }
                    }

                    .select_a {
                        background-color: @theme-color !important;
                        color: #ffffff !important;
                    }
                }

                .flk_lottery_one {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 0 .1rem .29333rem;
                    /*border-bottom: 1px solid #E2E7ED;*/

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 2.61333rem;
                        height: 1.28rem;
                        margin-top: .33333rem;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: 0;

                        img {
                            width: .93333rem;
                            height: .93333rem;
                        }
                    }

                    .select_a {
                        background-color: @theme-color !important;
                        color: #ffffff !important;
                    }
                }

                .lh_lottery {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: .29333rem .1rem;
                    border-bottom: 1px solid #E2E7ED;

                    a {
                        width: 3.97333rem;
                        height: .90666rem;
                        margin-bottom: .33333rem;
                        line-height: .90666rem;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: .42666rem;
                        color: #333333;
                    }

                    .select_a {
                        background-color: @theme-color !important;
                        color: #ffffff !important;
                    }
                }
            }
        }

        .sum_value {
            width: 9.5rem;
            margin: 0 auto;
            padding-top: .26666rem;

            .sum_value_div {
                width: 9.46666rem;
                background-color: #ffffff;
                box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: .13333rem;
                margin-bottom: .26666rem;
                padding: 0 .26666rem .3rem;

                .sum_title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 1.08rem;
                    border-bottom: solid .01333rem #ebebeb;

                    span {
                        font-size: .37333rem;
                        color: #333333;
                    }
                }

                .sum_box {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 .1rem .29333rem;
                }

                .fc_box {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    width: 100%;
                    margin-top:.63333rem;

                    a {
                        display: inline-block;
                        width: 1.94666rem;
                        height: 1.28rem;
                        padding-top: .2rem;
                        margin-bottom: .33333rem;
                        background-color: #fcfcfc;
                        border-radius: .06666rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: 0;

                        .title {
                            display: block;
                            font-size: .42666rem;
                            color: #000000;
                        }

                        .money {
                            font-size: .29333rem;
                            color: #333333;
                        }
                    }

                    .select_a {
                        background-color: @theme-color !important;

                        .title {
                            color: #ffffff !important;
                        }

                        .money {
                            color: #ffffff !important;
                        }
                    }
                }

                .fc_box_text {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    width: 100%;
                    margin-top:.33333rem;
                    a {
                        /*width: 1.84rem;*/
                        height: 1.04rem;
                        padding: 0 .7rem;
                        line-height: 1rem;
                        background-color: #fcfcfc;
                        border-radius: .13333rem;
                        border: solid .02666rem #dbdbdb;
                        font-size: .42666rem;
                        color: #333333;
                    }

                    .select_a {
                        background-color: @theme-color !important;
                        color: #ffffff !important;
                    }
                }
            }
        }

        .textarea_box {
            width: 100%;
            padding-top: .30666rem;

            .textarea_div {
                width: 9.46666rem;
                /*height: 8.82666rem;*/
                padding-bottom: .33333rem;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: .13333rem;

                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 8.93333rem;
                    height: 1.08rem;
                    margin: 0 auto;
                    border-bottom: solid .01333rem #ebebeb;

                    b {
                        font-size: .37333rem;
                        color: #333333;
                    }
                }

                .text {
                    width: 8.93333rem;
                    /*height: 5.93333rem;*/
                    padding-top: .33333rem;
                    margin: 0 auto;

                    label {
                        display: block;
                        width: 8.93333rem;
                        height: 5.93333rem;

                        textarea {
                            display: block;
                            width: 100%;
                            height: 100%;
                            padding: 0.28rem;
                            border: 0.01333rem solid #bfbfbf;
                            font-size: .32rem;
                            border-radius: .13333rem;
                        }
                    }

                    p {
                        padding-bottom: .33333rem;
                        font-size: .34666rem;
                        color: #000000;

                        span {
                            color: #ff5b01;
                        }
                    }
                }

                .textarea_clear {
                    display: inline-block;
                    width: 1.52rem;
                    height: .8rem;
                    line-height: .8rem;
                    margin-top: .33333rem;
                    background-color: #f3f3f3;
                    border-radius: .06666rem;
                    border: solid .02666rem #f0f0f0;
                    font-size: .37333rem;
                    color: #333333;
                }

                .radio_div {
                    width: 100%;
                    display: flex;
                    padding-top: .42666rem;
                    justify-content: center;

                    a {
                        display: flex;
                        /*width: .42rem;*/
                        height: .42rem;
                        margin: 0 .2rem;
                        font-size: 0;

                        img {
                            display: inline-block;
                            width: .42rem;
                            height: .42rem;
                        }

                        span {
                            font-size: .34666rem;
                            color: #000000;
                            margin-left: .05rem;
                        }
                    }
                }
            }
        }

        .boxer_div {
            width: 100%;
            padding-top: .30666rem;

            .boxer_box {
                width: 9.46666rem;
                margin: 0 auto;
                padding-bottom: .4rem;
                background-color: #ffffff;
                box-shadow: 0 0 .10666rem 0 rgba(0, 0, 0, 0.17);
                border-radius: .13333rem;

                .boxer_title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 8.93333rem;
                    height: 1.08rem;
                    margin: 0 auto;
                    border-bottom: solid .01333rem #ebebeb;

                    span {
                        font-size: .37333rem;
                        color: #333333;
                    }
                }

                .boxer_content {
                    display: flex;
                    justify-content: space-around;
                    padding-top: .33333rem;

                    a {
                        display: inline-block;
                        width: 1.2rem;
                        font-size: 0;

                        img {
                            width: 1.2rem;
                            height: 1.2rem;
                        }

                        .name {
                            display: block;
                            font-size: .42666rem;
                            margin-top: .12rem;
                            color: #333333;
                        }

                        .text {
                            display: block;
                            margin-top: .10666rem;
                            font-size: .26666rem;
                            color: #333333;

                            span {
                                font-size: .21333rem;
                                color: @theme-color;
                            }
                        }
                    }

                    .un_a {
                        .name {
                            color: #333333;
                        }

                        .text {
                            color: #333333;

                            span {
                                color: #333333;
                            }
                        }
                    }

                    .ch_a {
                        .name {
                            color: @theme-color;
                        }

                        .text {
                            color: @theme-color;

                            span {
                                color: @theme-color;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
