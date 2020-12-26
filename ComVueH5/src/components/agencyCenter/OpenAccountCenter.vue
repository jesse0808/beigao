<template>
    <div class="form_content_view open_acc_center">
        <div class="scroll">
            <my-title title-val="开户中心" :isShowLeftText="false" title-router="/userCenter"></my-title>
            <div style="width: 100%; background-color: white;position: fixed;">
                <div style="whidth: 100%; display: flex; height: 1.2rem">
                    <div @click="switchTab(0)" :class="{'choosed':selectNavIndex==0}"
                         style="display: flex; flex-direction: column; flex: 1; justify-content: center; align-items: center">
                        <label class="tab_label ">增加会员</label>
                    </div>
                    <div @click="switchTab(1) " :class="{'choosed':selectNavIndex==1}"
                         style="display: flex; flex: 1; justify-content: center; align-items: center">
                        <label class="tab_label">注册链接</label>
                    </div>
                </div>
            </div>

            <router-view style="padding-top: 1.2rem;"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "openAccountCenter",
        data() {
            return {
                selectNavIndex: 0,//选中的导航索引
            }
        },
        created() {
            let path = this.$route.path;
            if (path.includes('/addMember'))
                this.selectNavIndex = 0;
            else
                this.selectNavIndex = 1;
        },
        methods: {
            switchTab(index) {
                if (this.selectNavIndex == index)
                    return;
                this.selectNavIndex = index;
                if (this.selectNavIndex == 0) {
                    this.$router.push('addMember')
                } else {
                    this.$router.push('registerSetting')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .open_acc_center {
        padding-top: 1.15554rem;
        background-color: #eee;


        .tab_label {
            font-size: 0.4267rem;
            width: 50%
        }

        .choosed {
            color: #008573;
            border-style: solid;
            border-width: 0px 0px 2px 0px;
        }
    }


</style>
