//获取系统查询需要的特殊开始时间和结束时间
export function timeFormatProcessing() {
    let Now = new Date();
    let hour = Now.getHours();
    let stime, etime;
    if (hour >=3) {
        stime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 3, 0, 0);
        Now.setDate(Now.getDate() + 1);
        etime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 3, 0, 0);
    } else {
        Now.setDate(Now.getDate() - 1);
        stime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 3, 0, 0);
        Now.setDate(Now.getDate() + 1);
        etime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 3, 0, 0);
    }
    return {stTime: stime, endTime: etime};
}

/**
 * 格式化成为字符串
 * @param {*} date
 */
export function timeFormatStr(date) {
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
