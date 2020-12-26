// 设置 rem 函数
function setRem() {
// 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
// 设置页面根节点字体大小
    const _baseFontSize = 75;
    const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
    let dpr = 1;
    if (isIos) {//苹果
        dpr = window.devicePixelRatio || 1;
    } else {//安卓
        const ua = navigator.userAgent;
        let matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
        if (matches && matches[1] > 534)
            dpr = window.devicePixelRatio || 1;
    }
    const scale = 1 / dpr;
    const metaEl = document.querySelector('meta[name="viewport"]');
    if (!metaEl) {
        let metaEl = document.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        window.document.head.appendChild(metaEl);
    }
    metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);
    let w = document.documentElement.clientWidth || document.body.clientWidth;
    console.log("浏览器宽度=>" + w)
    document.documentElement.style.fontSize = w / (750 / _baseFontSize) + 'px';

    // if (w >= 750) {
    //     w = 750;
    // }
    // if (w <= 320) {
    //     w = 320;
    // }
    // alert(w)
    //  document.documentElement.style.fontSize = w / (750 / _baseFontSize) + 'px';
}

// 初始化
//setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  //  setRem()
}
