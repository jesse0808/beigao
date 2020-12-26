//防抖
export function throttle(fn, interval = 300) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, interval);
    };
}
//直选和值27
export function andTheValue(num) {
    let intText = parseInt(num);
    let result = null;
    switch (intText) {
        case 0:
        case 27:
            result = 1;
            break;
        case 1:
        case 26:
            result = 3;
            break;
        case 2:
        case 25:
            result = 6;
            break;
        case 3:
        case 24:
            result = 10;
            break;
        case 4:
        case 23:
            result = 15;
            break;
        case 5:
        case 22:
            result = 21;
            break;
        case 6:
        case 21:
            result = 28;
            break;
        case 7:
        case 20:
            result = 36;
            break;
        case 8:
        case 19:
            result = 45;
            break;
        case 9:
        case 18:
            result = 55;
            break;
        case 10:
        case 17:
            result = 63;
            break;
        case 11:
        case 16:
            result = 69;
            break;
        case 12:
        case 15:
            result = 73;
            break;
        case 13:
        case 14:
            result = 75;
            break;
        default:
            result = null;
            break;
    }
    return result;
}
//直选跨度
// 跨度组数计算
/**
 * @return {number}
 */
export function getSscKuaDuValue(text){
    let intText = parseInt(text);
    let result = null;
    switch (intText) {
        case 0:
            result = 10;
            break;
        case 1:
        case 9:
            result = 54;
            break;
        case 2:
        case 8:
            result = 96;
            break;
        case 3:
        case 7:
            result = 126;
            break;
        case 4:
        case 6:
            result = 144;
            break;
        case 5:
            result = 150;
            break;
        default:
            result = null;
            break;
    }
    return result;
}
/*
* @param {Array} arr
* */
export function arraySum (arr) {
    return arr.reduce((old, add) => {
        return Number(old) + Number(add)
    }, 0)
}

/**
 * 深拷贝一个对象
 * 会忽略function和undefined的字段，对date类型支持也不友好。而且只能克隆原始对象自身的值，不能克隆它继承的值
 * @param {*} targetObj 
 */
export function deepCopy(targetObj) {
    return JSON.parse(JSON.stringify(targetObj));
}
