<template>
    <div class="sus_title" id="navback">
        <van-nav-bar :title="titleVal" fixed :left-text="isShowLeftText?'返回' : ''" left-arrow @click-left="onClickLeft"
                     @click-right="onClickRight">
            <slot name="title" slot="title"></slot>
            <van-icon v-if="titleType === 0" name="search" slot="right"></van-icon>
            <van-icon v-if="titleType === 1 && !customRight" name="weapp-nav" slot="right"/>
            <slot name="customRight" slot="right" v-if="titleType === 1 && customRight"></slot>
        </van-nav-bar>
    </div>
</template>

<script>
    /*
    *  type : 0 search
    * */
    export default {
        props: {
            isShowLeftText: {
                type: Boolean,
                default: false
            },
            titleVal: {
                type: String,
                require: false
            },
            titleRouter: {
                type: String,
                require: false
            },
            titleType: {
                type: Number
            },
            customRight: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClickLeft() {
                if (this.titleRouter === undefined) {
                    this.$router.back(-1)
                } else if (this.titleRouter == 'my') {//自定义返回事件
                    this.$emit('clickLeftBack')
                } else {
                    this.$router.replace(this.titleRouter)
                }
            },
            onClickRight() {
                if (this.titleType !== undefined) {
                    this.$emit('clickCallBack')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .sus_title {
        z-index: 1000;
    }

    .van-nav-bar {
        height: 1.17777rem !important;
        //   line-height: 1.17777rem !important;
        background-color: #008573 !important;
        display: flex;
        align-items: center;

        /deep/ .van-nav-bar__left {
            top: 0 !important;
            .van-icon {
                color: white !important;
                font-size: .6rem !important;
                vertical-align:inherit !important;
                /*top: .18rem !important;*/
            }
        }

        /deep/ .van-nav-bar__title{
            color: white !important;
        }

        /deep/ .van-nav-bar__right {
            .van-icon {
                color: white !important;
                font-size: .5rem !important;
                vertical-align:inherit !important;
                /*top: .1rem !important;*/
            }
        }

    }


    /*.van-nav-bar .van-icon {
        color: #ffffff !important;
    }

    .van-nav-bar__arrow {
        font-size: .7rem !important;
    }

    .van-nav-bar__arrow + .van-nav-bar__text {
        margin-left: -0.65555rem !important;
        padding-left: .69444rem !important;
    }

    .van-nav-bar__text {
        margin: 0 -0.44444rem !important;
        padding: 0 .44444rem !important;
        color: #ffffff !important;
        font-size: .38888rem;
    }

    .van-nav-bar__left {
        left: .44444rem !important;
    }

    .van-nav-bar__title {
        color: #ffffff !important;
        font-size: 0.48rem !important;
    }*/
</style>
