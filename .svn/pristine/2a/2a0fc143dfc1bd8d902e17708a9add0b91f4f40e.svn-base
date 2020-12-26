// 转化时间
export function SecondToHHSSMM(data) {
    var i = data;
    var h = 0, m = 0, s = 0;
    h = parseInt(i / 3600, 10);
    m = parseInt(i % 3600 / 60, 10);
    s = parseInt(i % 60, 10);
    var hh = "", mm = "", ss = "";
    hh = h < 10 ? "0" + h : h;
    mm = m < 10 ? "0" + m : m;
    ss = s < 10 ? "0" + s : s;
    return i =  hh + ":" + mm + ":" + ss;
}