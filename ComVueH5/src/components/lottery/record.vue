<template>
    <div class="record record_div" v-if="pageId == 4">
        <div class="unload_sty" v-if="unLoad">
            <van-loading color="#008573"/>
        </div>
        <div class="record_page" v-else>
            <div class="ssc_record">
                <div class="tab_title">
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t5">号码</span>
                        <span class="t2">总和</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t5 ssc_open_num">
                            <span v-for="(val,num) in item.OpenNumber.split(',')" :key="num">{{val}}</span>
                        </div>
                        <span class="t16">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t16',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t16" :class="[fckBigSmallColor(item.OpenNumber.split(','))]">{{fckBigSmall(item.OpenNumber.split(','))}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="record record_div" v-else-if="pageId == 5">
        <div class="unload_sty" v-if="unLoad">
            <van-loading color="#008573"/>
        </div>
        <div class="record_page" v-else>
            <div class="ssc_record">
                <div class="tab_title">
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t5">号码</span>
                        <span class="t2">总和</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t5 pcd_open_num">
                            <span>{{item.OpenNumber.split('=')[0].split('+')[0]}}</span>
                            <span>+</span>
                            <span>{{item.OpenNumber.split('=')[0].split('+')[1]}}</span>
                            <span>+</span>
                            <span>{{item.OpenNumber.split('=')[0].split('+')[2]}}</span>
                            <span>=</span>
                            <span>{{getWei_2(item.OpenNumber.split('=')[1])}}</span>
                        </div>
                        <span class="t16">{{item.OpenNumber.split('=')[1]}}</span>
                        <span :class="['t16',pcdOddEvenColor(item.OpenNumber.split('=')[1])]">{{pcdOddEven(item.OpenNumber.split('=')[1])}}</span>
                        <span class="t16" :class="[pcdBigSmallColor(item.OpenNumber.split('=')[1])]">{{pcdBigSmall(item.OpenNumber.split('=')[1])}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="record record_div" v-else-if="pageId == 7">
        <div class="unload_sty" v-if="unLoad">
            <van-loading color="#008573"/>
        </div>
        <div class="record_page" v-else>
            <div class="ssc_record">
                <div class="tab_title">
                    <div class="title">
                        <span class="t2">期号</span>
                        <span class="t3">正码</span>
                        <span class="t1">特码</span>
                        <span class="t4">总和</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item lhc_item" v-for="(item,index) in showData" :key="index">
                        <span class="t2">{{item.FormatLssue.substr(-4)}}</span>
                        <div class="t3 lhc_open">
                            <div v-for="(val,num) in item.OpenNumber.split(',').splice(0,6)" :key="num">
                                <span :class="['txt_num',returnClass(val)]">{{val}}</span>
                                <span class="txt_tex">{{item.Explain.split('')[num]}}</span>
                            </div>
                        </div>
                        <div class="t1 lhc_open">
                            <div>
                                <span :class="['txt_num',returnClass(item.OpenNumber.split(',')[6])]">{{item.OpenNumber.split(',')[6]}}</span>
                                <span class="txt_tex">{{item.Explain.split('')[6]}}</span>
                            </div>
                        </div>
                        <span class="t1">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t1',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[lhcBigSmallColor(item.OpenNumber.split(',')[6])]">{{lhcBigSmall(item.OpenNumber.split(',')[6])}}</span>
                        <span class="t1" :class="[lhcWeSmallColor(item.OpenNumber.split(',')[6])]">{{teWeSizeFilter(item.OpenNumber.split(',')[6])}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="record" v-else>
        <div class="unload_sty" v-if="unLoad">
            <van-loading color="#008573"/>
        </div>
        <div class="record_page" v-else>
            <div class="ssc_record" v-if="pageId == 1">
                <div class="tab_title">
                    <div class="switchover">
                        <a href="javascript:void(0)" :class="[switchState === 0 ?'checked_a':'unchecked_a']"
                           @click="switchState = 0">号码</a>
                        <a href="javascript:void(0)" :class="[switchState === 1 ?'checked_a':'unchecked_a']"
                           @click="switchState = 1">大小</a>
                        <a href="javascript:void(0)" :class="[switchState === 2 ?'checked_a':'unchecked_a']"
                           @click="switchState = 2">单双</a>
                    </div>
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t4">号码</span>
                        <span class="t2">总和</span>
                        <span class="t1">龙虎</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t4 ssc_open_num" v-if="switchState === 0">
                            <span v-for="(val,num) in item.OpenNumber.split(',')" :key="num">{{val}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 1">
                            <span :class="[sumBigSmallColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumBigSmall(val)}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 2">
                            <span :class="[sumOddEvenColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumOddEven(val)}}</span>
                        </div>
                        <span class="t16">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t16',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t16" :class="[bigSmallColor(item.OpenNumber.split(','))]">{{bigSmall(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[countLongHuColor(item.OpenNumber.split(','))]">{{countLongHu(item.OpenNumber.split(','))}}</span>
                    </div>
                </div>
            </div>
            <div class="ssc_record" v-if="pageId == 2">
                <div class="tab_title">
                    <div class="switchover_pk">
                        <a href="javascript:void(0)" :class="[switchState === 0 ?'checked_a':'unchecked_a']"
                           @click="switchState = 0">号码</a>
                        <a href="javascript:void(0)" :class="[switchState === 1 ?'checked_a':'unchecked_a']"
                           @click="switchState = 1">大小</a>
                        <a href="javascript:void(0)" :class="[switchState === 2 ?'checked_a':'unchecked_a']"
                           @click="switchState = 2">单双</a>
                        <a href="javascript:void(0)" :class="[switchState === 3 ?'checked_a':'unchecked_a']"
                           @click="switchState = 3">龙虎</a>
                    </div>
                    <div class="title">
                        <span class="t2">期号</span>
                        <span class="t5">号码</span>
                        <span class="t3">冠亚和值</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t2">{{item.FormatLssue.slice(-4)}}</span>
                        <div class="t5 pk_open_num" v-if="switchState === 0">
                            <span :class="[filterColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{val}}</span>
                        </div>
                        <div class="t5 pk_open_num" v-if="switchState === 1">
                            <span :class="[pkSumBigSmallColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{pkSumBigSmall(val)}}</span>
                        </div>
                        <div class="t5 pk_open_num" v-if="switchState === 2">
                            <span :class="[pkSumOddEvenColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{pkSumOddEven(val)}}</span>
                        </div>
                        <div class="t5 pk_open_num" v-if="switchState === 3">
                            <span :class="[pkLongHuColor(0,item.OpenNumber.split(','))]">{{pkLongHu(0,item.OpenNumber.split(','))}}</span>
                            <span :class="[pkLongHuColor(1,item.OpenNumber.split(','))]">{{pkLongHu(1,item.OpenNumber.split(','))}}</span>
                            <span :class="[pkLongHuColor(2,item.OpenNumber.split(','))]">{{pkLongHu(2,item.OpenNumber.split(','))}}</span>
                            <span :class="[pkLongHuColor(3,item.OpenNumber.split(','))]">{{pkLongHu(3,item.OpenNumber.split(','))}}</span>
                            <span :class="[pkLongHuColor(4,item.OpenNumber.split(','))]">{{pkLongHu(4,item.OpenNumber.split(','))}}</span>
                            <span :class="[filterColor(val)]" v-for="(val,num) in item.OpenNumber.split(',').splice(5)"
                                  :key="num">{{val}}</span>
                        </div>
                        <span class="t1">{{pkSum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t1',pkOddEvenColor(item.OpenNumber.split(','))]">{{pkOddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[pkBigSmallColor(item.OpenNumber.split(','))]">{{pkSum(item.OpenNumber.split(',')) > 11.5?'大':'小'}}</span>
                    </div>
                </div>
            </div>
            <div class="ssc_record" v-if="pageId == 3">
                <div class="tab_title">
                    <div class="switchover">
                        <a href="javascript:void(0)" :class="[switchState === 0 ?'checked_a':'unchecked_a']"
                           @click="switchState = 0">号码</a>
                        <a href="javascript:void(0)" :class="[switchState === 1 ?'checked_a':'unchecked_a']"
                           @click="switchState = 1">大小</a>
                        <a href="javascript:void(0)" :class="[switchState === 2 ?'checked_a':'unchecked_a']"
                           @click="switchState = 2">单双</a>
                    </div>
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t4">号码</span>
                        <span class="t2">总和</span>
                        <span class="t1">龙虎</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t4 ssc_open_num" v-if="switchState === 0">
                            <span v-for="(val,num) in item.OpenNumber.split(',')" :key="num">{{val}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 1">
                            <span :class="[x5SumBigSmallColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{x5SumBigSmall(val)}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 2">
                            <span :class="[sumOddEvenColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumOddEven(val)}}</span>
                        </div>
                        <span class="t16">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t16',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t16" :class="[bigSmallColor(item.OpenNumber.split(','))]">{{bigSmall(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[countLongHuColor(item.OpenNumber.split(','))]">{{countLongHu(item.OpenNumber.split(','))}}</span>
                    </div>
                </div>
            </div>
            <div class="ssc_record" v-if="pageId == 6">
                <div class="tab_title">
                    <div class="switchover">
                        <a href="javascript:void(0)" :class="[switchState === 0 ?'checked_a':'unchecked_a']"
                           @click="switchState = 0">号码</a>
                        <a href="javascript:void(0)" :class="[switchState === 1 ?'checked_a':'unchecked_a']"
                           @click="switchState = 1">大小</a>
                        <a href="javascript:void(0)" :class="[switchState === 2 ?'checked_a':'unchecked_a']"
                           @click="switchState = 2">单双</a>
                    </div>
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t4">号码</span>
                        <span class="t2">总和</span>
                        <span class="t1">龙虎</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t4 ssc_open_num" v-if="switchState === 0">
                            <span v-for="(val,num) in item.OpenNumber.split(',')" :key="num">{{val}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 1">
                            <span :class="[sumBigSmallColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumBigSmall(val)}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 2">
                            <span :class="[sumOddEvenColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumOddEven(val)}}</span>
                        </div>
                        <span class="t16">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t16',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t16" :class="[bigSmallColor(item.OpenNumber.split(','))]">{{bigSmall(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[countLongHuColor(item.OpenNumber.split(','))]">{{countLongHu(item.OpenNumber.split(','))}}</span>
                    </div>
                </div>
            </div>
            <div class="ssc_record" v-if="pageId == 6">
                <div class="tab_title">
                    <div class="switchover">
                        <a href="javascript:void(0)" :class="[switchState === 0 ?'checked_a':'unchecked_a']"
                           @click="switchState = 0">号码</a>
                        <a href="javascript:void(0)" :class="[switchState === 1 ?'checked_a':'unchecked_a']"
                           @click="switchState = 1">大小</a>
                        <a href="javascript:void(0)" :class="[switchState === 2 ?'checked_a':'unchecked_a']"
                           @click="switchState = 2">单双</a>
                    </div>
                    <div class="title">
                        <span class="t3">期号</span>
                        <span class="t4">号码</span>
                        <span class="t2">总和</span>
                        <span class="t1">龙虎</span>
                    </div>
                </div>
                <div class="tab_content">
                    <div class="tab_item" v-for="(item,index) in showData" :key="index">
                        <span class="t3">{{item.FormatLssue}}</span>
                        <div class="t4 ssc_open_num" v-if="switchState === 0">
                            <span v-for="(val,num) in item.OpenNumber.split(',')" :key="num">{{val}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 1">
                            <span :class="[sumBigSmallColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumBigSmall(val)}}</span>
                        </div>
                        <div class="t4 ssc_open_num" v-if="switchState === 2">
                            <span :class="[sumOddEvenColor(val)]" v-for="(val,num) in item.OpenNumber.split(',')"
                                  :key="num">{{sumOddEven(val)}}</span>
                        </div>
                        <span class="t16">{{sum(item.OpenNumber.split(','))}}</span>
                        <span :class="['t16',oddEvenColor(item.OpenNumber.split(','))]">{{oddEven(item.OpenNumber.split(','))}}</span>
                        <span class="t16" :class="[bigSmallColor(item.OpenNumber.split(','))]">{{bigSmall(item.OpenNumber.split(','))}}</span>
                        <span class="t1" :class="[countLongHuColor(item.OpenNumber.split(','))]">{{countLongHu(item.OpenNumber.split(','))}}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {getOpenRecord} from "../../util/lottery";
    import {arraySum} from "../../util/comon";

    export default {
        name: "record",
        data() {
            return {
                switchState: 0,//号码显示状态
                showData: [],
                unLoad: true
            }
        },
        created() {
            this.getData()
        },
        computed: {
            pageId() {
                return this.$route.query.LsId
            },
            gameId() {
                return this.$route.query.LgId
            }
        },
        methods: {
            getData() {
                let that = this;
                that.unLoad = true;
                that.showData = [];
                getOpenRecord(this.gameId).then(data => {
                    that.unLoad = false;
                    if (data.IsSucess) {
                        that.showData = data.Data
                    } else
                        this.$toast.fail(data.Message)
                })
            },
            getWei_2(val) {
              let v=parseInt(val)
                if(v<10)
                    return '0'+ v;
                else
                    return v;
            },
            //pk10求和
            pkSum(arr) {
                let str = arr.splice(0, 2);
                return arraySum(str)
            },
            //pk10单双
            pkOddEvenColor(arr) {
                let str = arr.splice(0, 2);
                let num = arraySum(str);
                return num % 2 ? 'color_even' : 'color_odd'
            },
            //pk10单双
            pkOddEven(arr) {
                let str = arr.splice(0, 2);
                let num = arraySum(str);
                return num % 2 ? '单' : '双'
            },
            pkBigSmallColor(arr) {
                let str = arr.splice(0, 2);
                let num = arraySum(str);
                return num > 11.5 ? 'color_even' : 'color_odd'
            },
            //求和
            sum(arr) {
                return arraySum(arr)
            },
            //单双
            oddEvenColor(arr) {
                let num = arraySum(arr);
                return num % 2 ? 'color_even' : 'color_odd'
            },
            oddEven(arr) {
                let num = arraySum(arr);
                return num % 2 ? '单' : '双'
            },
            pcdOddEvenColor(arr) {
                let num = Number(arr);
                return num % 2 === 1 ? 'color_even' : 'color_odd'
            },
            pcdOddEven(arr) {
                let num = Number(arr);
                return num % 2 === 1 ? '单' : '双'
            },
            //大小
            bigSmall(arr) {
                let num = arraySum(arr);
                return num > 22.5 ? '大' : '小'
            },
            fckBigSmall(arr) {
                let num = arraySum(arr);
                return num > 10.5 ? '大' : '小'
            },
            pcdBigSmallColor(arr) {
                let num = Number(arr);
                return num > 13.5 ? 'color_even' : 'color_odd'
            },
            pcdBigSmall(arr) {
                let num = Number(arr);
                return num > 13.5 ? '大' : '小'
            },
            lhcBigSmall(arr) {
                let num = Number(arr);
                return num > 24.5 ? '大' : '小'
            },
            lhcBigSmallColor(arr) {
                let num = Number(arr);
                return num > 24.5 ? 'color_even' : 'color_odd'
            },
            fckBigSmallColor(arr) {
                let num = arraySum(arr);
                return num > 10.5 ? 'color_even' : 'color_odd'
            },
            bigSmallColor(arr) {
                let num = arraySum(arr);
                return num > 22.5 ? 'color_even' : 'color_odd'
            },
            //pk10比大小
            pkSumBigSmall(num) {
                return Number(num) > 5.5 ? '大' : '小'
            },
            pkSumBigSmallColor(num) {
                return Number(num) > 5.5 ? 'even' : 'odd'
            },
            //单个号码的大小
            sumBigSmall(num) {
                return Number(num) > 4.5 ? '大' : '小'
            },
            sumBigSmallColor(num) {
                return Number(num) > 4.5 ? 'even' : 'odd'
            },
            //山东十一选五单个号码的大小
            x5SumBigSmall(num) {
                return Number(num) > 5.5 ? '大' : '小'
            },
            x5SumBigSmallColor(num) {
                return Number(num) > 5.5 ? 'even' : 'odd'
            },
            //pk10单双
            pkSumOddEven(num) {
                return Number(num) % 2 ? '单' : '双'
            },
            pkSumOddEvenColor(num) {
                return Number(num) % 2 ? 'odd' : 'even'
            },
            //pk10龙虎
            pkLongHu(num, obj) {
                return Number(obj[num] > Number(obj[parseInt(obj.length - num - 1)])) ? '龙' : '虎'
            },
            pkLongHuColor(num, obj) {
                return Number(obj[num] > Number(obj[parseInt(obj.length - num - 1)])) ? 'even' : 'odd'
            },
            //单个号码的单双
            sumOddEven(num) {
                return Number(num) % 2 === 0 ? '双' : '单'
            },
            sumOddEvenColor(num) {
                return Number(num) % 2 === 0 ? 'even' : 'odd'
            },
            //龙虎和
            countLongHu(arr) {
                if (arr[0] > arr[arr.length - 1]) {
                    return '龙'
                } else if (arr[0] < arr[arr.length - 1]) {
                    return '虎'
                } else if (arr[0] == arr[arr.length - 1]) {
                    return '和'
                }
            },
            countLongHuColor(arr) {
                if (arr[0] > arr[arr.length - 1]) {
                    return 'color_even'
                } else {
                    return 'color_odd'
                }
            },
            filterColor(txt) {
                let num = Number(txt);
                if (num === 1) {
                    return 'span_1'
                } else if (num === 2) {
                    return 'span_2'
                } else if (num === 3) {
                    return 'span_3'
                } else if (num === 4) {
                    return 'span_4'
                } else if (num === 5) {
                    return 'span_5'
                } else if (num === 6) {
                    return 'span_6'
                } else if (num === 7) {
                    return 'span_7'
                } else if (num === 8) {
                    return 'span_8'
                } else if (num === 9) {
                    return 'span_9'
                } else if (num === 10) {
                    return 'span_10'
                }
            },
            //返回球的颜色
            returnClass(str) {
                let num = Number(str);
                if (num === 1 || num === 2 || num === 7 || num === 8 || num === 12 || num === 13 || num === 18 || num === 19 || num === 23 || num === 24 || num === 29 || num === 30 || num === 34 || num === 35 || num === 40 || num === 45 || num === 46) {
                    return 'red_qiu'
                }
                if (num === 3 || num === 4 || num === 9 || num === 10 || num === 14 || num === 15 || num === 20 || num === 25 || num === 26 || num === 31 || num === 36 || num === 37 || num === 41 || num === 42 || num === 47 || num === 48) {
                    return 'blue_qiu'
                }
                if (num === 5 || num === 6 || num === 11 || num === 16 || num === 17 || num === 21 || num === 22 || num === 27 || num === 28 || num === 32 || num === 33 || num === 38 || num === 39 || num === 43 || num === 44 || num === 49) {
                    return 'green_qiu'
                }
            },
            // 尾大小
            teWeSizeFilter(str) {
                let num = Number(str)
                if (num === 49) {
                    return '和'
                } else {
                    let newNum = num > 9 ? Number(str.split('')[1]) : num
                    return newNum > 4.5 ? '尾大' : '尾小'
                }
            },
            lhcWeSmallColor(str) {
                let num = Number(str)
                if (num === 49) {
                    return '和'
                } else {
                    let newNum = num > 9 ? Number(str.split('')[1]) : num
                    return newNum > 4.5 ? 'color_even' : 'color_odd'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .record_div {
        padding-top: .78667rem !important;
    }

    .record {
        position: relative;
        padding-top: 1.92rem;

        .unload_sty {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: calc(100vh - 4.3911rem);
        }

        .record_page {
            .ssc_record {
                width: 100%;

                .tab_title {
                    position: fixed;
                    top: 4.3911rem;
                    left: 0;
                    width: 100%;
                    height: 1.92rem;

                    .switchover {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;
                        height: 1.13333rem;
                        background-color: #ffffff;

                        a {
                            display: inline-block;
                            width: 2.62666rem;
                            height: .85333rem;
                            line-height: .85333rem;
                            border-radius: .06666rem;
                            font-size: .32rem;
                        }

                        .checked_a {
                            color: #008573;
                            background-color: #e6f7f5;
                        }

                        .unchecked_a {
                            color: #666666;
                            background-color: #f3f3f3;
                        }
                    }

                    .switchover_pk {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;
                        height: 1.13333rem;
                        background-color: #ffffff;

                        a {
                            display: inline-block;
                            width: 1.56rem;
                            height: .65333rem;
                            line-height: .65333rem;
                            border-radius: .06666rem;
                            font-size: .32rem;
                        }

                        .checked_a {
                            color: #008573;
                            background-color: #e6f7f5;
                        }

                        .unchecked_a {
                            color: #666666;
                            background-color: #f3f3f3;
                        }
                    }

                    .title {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: .78667rem;
                        background-color: #f3f3f3;

                        span {
                            font-size: .32rem;
                            color: #666666;
                        }
                    }
                }

                .tab_content {
                    width: 100%;

                    .lhc_item {
                        height: 1.06666rem !important;
                    }

                    .tab_item {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: .8rem;

                        span {
                            font-size: .32rem;
                            color: #666666;
                        }

                        &:nth-child(odd) {
                            background-color: #ffffff;
                        }

                        &:nth-child(even) {
                            background-color: #f8f8f8;
                        }

                        .lhc_open {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;

                            div {
                                width: .42666rem;
                                font-size: 0;
                                margin: 0 .03333rem;

                                .txt_num {
                                    display: block;
                                    width: .42666rem;
                                    height: .42666rem;
                                    line-height: .42666rem;
                                    border-radius: 50%;
                                    font-size: .25333rem;
                                    color: #fff;
                                }

                                .txt_tex {
                                    font-size: .25333rem;
                                    color: #666666;
                                }
                            }
                        }

                        .ssc_open_num {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            span {
                                width: .53333rem;
                                height: .53333rem;
                                margin: 0 .03333rem;
                                line-height: .53333rem;
                                border-radius: 50%;
                                color: #fff;
                                background-color: #008573;
                            }
                        }

                        .pcd_open_num {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            span {
                                color: #008573;
                            }
                        }

                        .pk_open_num {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            span {
                                width: .42666rem;
                                height: .42666rem;
                                margin: 0 .03333rem;
                                line-height: .42666rem;
                                border-radius: 50%;
                                color: #fff;
                                font-size: .26666rem;
                                background-color: #008573;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
