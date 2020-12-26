import {Dialog} from "vant";
export const height = {
    data() {
        return {}
    },
    mounted() {

    }
};
export const selectHeight = {
    data() {
        return {
            ramHeight: 0,
            headHeight: 0,
        };
    },
    created() {
        this.ramHeight = (document.documentElement.clientWidth / 10) * (44 / 36)
        // let winWidth=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
       // Dialog.alert({message:"jisuan=>"+(document.documentElement.clientWidth / 10) * (44 / 36)+" innerWidth=>" + window.innerWidth + " clientWidth=>" + document.documentElement.clientWidth  + " body.clientWidth=>" + document.body.clientWidth})

        this.headHeight = (document.documentElement.clientWidth / 10) * (50 / 36)
    }
}
