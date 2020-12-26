/*
*  处理时时彩相关数据
* */
import gameContent from "@/util/lotteryContent.json"

export function returnBetData(id = 1 || '1', obj, num = 1, txt = '') {
  if (id === 1 || id === 25 || id === 32 || id === 39 || id === 168 || id === 174 || id === 177 || id === 46 || id === 49) {
    //直选复式
    return f1(obj);
  } else if (id === 2 || id === 169 || id === 173 || id === 175|| id === 178) {
    //直选单式
    return f2(id, obj)
  } else if (id === 3) {
    //组选120
    return f3(id, obj)
  } else if (id === 4) {
    //组选60
    return f4(obj)
  } else if (id === 5) {
    //组选30
    return f5(obj)
  } else if (id === 6) {
    //组选20
    return f6(obj)
  } else if (id === 7) {
    //组选10
    return f7(obj)
  } else if (id === 8) {
    //组选5
    return f7(obj)
  } else if (id === 9) {
    return f8(obj)
  } else if (id === 10) {
    return f8(obj)
  } else if (id === 11) {
    return f8(obj)
  } else if (id === 12) {
    return f8(obj)
  } else if (id === 13 || id === 19) {
    return f1(obj)
  } else if (id === 14 || id === 20 || id === 26 || id === 31 || id === 33 || id === 38 || id === 40 || id === 45 || id === 47 || id === 50) {
    return f2(id, obj)
  } else if (id === 15 || id === 21) {
    return f9(obj, 4)
  } else if (id === 16 || id === 22) {
    return f6(obj)
  } else if (id === 17 || id === 23) {
    return f9(obj, 2)
  } else if (id === 18 || id === 24) {
    return f7(obj)
  } else if (id === 27 || id === 34 || id === 41 || id === 170) {
    return f10(obj)
  } else if (id === 28 || id === 35 || id === 42) {
    return f11(obj[0]['num'])
  } else if (id === 29 || id === 36 || id === 43 || id === 171) {
    return f12(obj[0]['num'], 2)
  } else if (id === 30 || id === 37 || id === 44 || id === 172) {
    return f13(obj[0]['num'], 3)
  } else if (id === 48 || id === 51 || id === 176 || id === 179) {
    return f14(obj[0]['num'])
  } else if (id === 52 || id === 180) {
    return f15(obj)
  } else if (id === 53 || id === 55 || id === 57 || id === 181) {
    return f16(obj)
  } else if (id === 54 || id === 56 || id === 58 || id === 59) {
    return f17(obj)
  } else if (id === 60) {
    return f9(obj, 3)
  } else if (id === 61 || id === 63 || id === 68) {
    return f19(id, obj)
  } else if (id === 70 || id === 71 || id === 72 || id === 73 || id === 74 || id === 75 || id === 80 || id === 77 || id === 78 || id === 79) {
    return f18(obj)
  } else if (id === 65) {
    return f20(id, obj, num, txt)
  } else if (id === 66) {
    return f21(id, obj, num, txt)
  } else if (id === 81) {
    return f22(obj)
  } else if (id === 82) {
    return f23(obj)
  }// 赛车
  else if (id === 83 || id === 85 || id === 87 || id === 89) {
    return f24(id, obj)
  } else if (id === 84 || id === 86 || id === 88 || id === 90) {
    return f25(id, obj)
  } else if (id === 92) {
    return f26(obj)
  } else if (id === 93) {
    return f18(obj[0].num)
  } else if (id === 94 || id === 98) {
    return f27(id, obj)
  } else if (id === 95 || id === 97 || id === 99 || id === 101) {
    return f28(id, obj)
  } else if (id === 96 || id === 100) {
    return f29(id, obj)
  } else if (id === 102 || id === 104) {
    return f30(obj)
  } else if (id === 103 || id==91) {
    return f31(obj)
  } else if (id === 106) {
    return f32(obj)
  } else if (id === 107) {
    return f33(obj)
  } else if (id === 109) {
    return f34(obj)
  } else if (id === 111) {
    return f35(obj)
  } else if (id === 113) {
    return f36(obj)
  } else if (id === 115) {
    return f37(obj)
  } else if (id === 117) {
    return f38(obj)
  } else if (id === 105 || id === 108 || id === 110 || id === 112 || id === 114 || id === 116 || id === 118 || id === 182) {
    return f39(id, obj)
  } else if (id === 119 || id === 120 || id === 123 || id === 183 || id === 184 || id === 185) {
    return f40(obj)
  } else if (id === 121 || id === 124) {
    return f40(obj[0]['num'])
  } else if (id === 122) {
    return f41(obj[0]['num'])
  } else if (id === 125) {
    return f42(obj)
  } else if (id === 126) {
    return f43(obj[0]['num'])
  } else {
   // console.log(obj)
    return {
      data: '',
      num: 0
    };
  }
}

function f43(obj) {
  let data = returnTrue(obj);
  let num = data.length === 2 ? 1 : data.length === 3 ? 3 : data.length === 4 ? 6 : data.length === 5 ? 10 : data.length === 6 ? 15 : 0;
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f42(obj) {
  let data = returnArr(obj).arr;
  let num = parseInt(data[0].length * data[1].length);
  let arr = [];
  data.forEach(item => {
    arr.push(item.join(''))
  });
  if (num) {
    return {
      data: arr.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f41(obj) {
  let data = returnTrue(obj);
  let num = data.length === 3 ? 1 : data.length === 4 ? 4 : data.length === 5 ? 10 : data.length === 6 ? 20 : 0;
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f40(obj) {
  let data = returnTrue(obj);
  if (data.length) {
    return {
      data: data.join(),
      num: data.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f39(id, obj) {
  let rep=obj.replace(/\r/ig, ',').replace(/\n/ig,',');
  let data = rep.split(',');
  let arr = [];
  if (id === 105) {
    data.forEach(item => {
      if (Number(item) && item.length === 2 && Number(item) < 12) {
        arr.push(item);
      }
    })
  } else {
    data.forEach(item => {
      let twoArr = item.split(' ');
      if (twoArr.length == gameContent[id]['betLength']) {
        let state = false;
        twoArr.forEach(val => {
          if (Number(val) && val.length === 2 && Number(val) < 12) {
            state = true
          } else {
            state = false;
            return false
          }
        });
        if (state) {
          arr.push(item)
        }
      }
    })
  }
  if (arr.length) {
    return {
      data: arr.join(),
      num: arr.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f38(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 8) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5) * (selectCount - 6) * (selectCount - 7)) / 40320;
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f37(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 7) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5) * (selectCount - 6)) / 5040
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f36(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 6) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4) * (selectCount - 5)) / 720
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f35(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 5) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3) * (selectCount - 4)) / 120
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f34(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0
  if (selectCount < 4) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2) * (selectCount - 3)) / 24
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f33(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 3) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1) * (selectCount - 2)) / 6
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f32(obj) {
  let data = returnTrue(obj[0]['num']);
  let selectCount = data.length;
  let num = 0;
  if (selectCount < 2) {
    num = 0
  } else {
    num = (selectCount * (selectCount - 1)) / 2;
  }
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f31(obj) {
  let data = returnArr(obj);
  let num = 0;
  let arr = [];
  data.arr.forEach(item => {
    if (item.length) {
      num += item.length;
      arr.push(item.join(' '))
    } else {
      arr.push('-')
    }
  });
  if (num) {
    return {
      data: arr.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f30(obj) {
  let data = returnTrue(obj[0]['num']);
  if (data.length) {
    return {
      data: data.join(),
      num: data.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f29(id, obj) {
  let data = returnTrue(obj[0]['num']);
  let len = data.length;
  let num = Get11X5_ZuXuanCount(len, gameContent[id]['betLength']);
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f27(id, obj) {
  let str = returnArr(obj);
  let data = str.arr;
  let allCount = 0;
  let len = id == 94 ? 3 : 2;
  if (data.length === len) {
    let w = data[0];
    let q = data[1];
    let b = id == 98 ? [] : data[2];
    for (let i = 0; i < w.length; i++) {
      for (let j = 0; j < q.length; j++) {
        if (b.length != 0) {
          for (let k = 0; k < b.length; k++) {
            if (w[i] != q[j] && w[i] != b[k] && q[j] != b[k]) {
              allCount++;
            }
          }
        } else if (w[i] != q[j]) {
          if (id == 94) {
            allCount = 0
          } else {
            allCount++;
          }
        }
      }
    }
  }
  if (allCount) {
    return {
      data: str.content,
      num: allCount
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f24(id, obj) {
  let info = returnArr(obj);
  let data = info.arr;
  let allCount = 0;
  let len = 0;
  if (id == 83) {
    len = 2
  } else if (id == 85) {
    len = 3
  } else if (id == 87) {
    len = 4
  } else if (id == 89) {
    len = 5
  }
  if (data.length == len) {
    let a = data[0];
    let b = data[1];
    let c = len > 2 ? data[2] : [];
    let d = len > 3 ? data[3] : [];
    let e = len > 4 ? data[4] : [];
    for (let i = 0; i < a.length; i++) {
      if (b.length != 0) {
        for (let j = 0; j < b.length; j++) {
          if (c.length != 0) {
            if (d.length != 0) {
              if (e.length != 0) {
                for (let k = 0; k < c.length; k++) {
                  for (let l = 0; l < d.length; l++) {
                    for (let m = 0; m < e.length; m++) {
                      if (a[i] != b[j] && a[i] != c[k] && a[i] != d[l] && a[i] != e[m] &&
                        b[j] != c[k] && b[j] != d[l] && b[j] != e[m] &&
                        c[k] != d[l] && c[k] != e[m] &&
                        d[l] != e[m]) {
                        allCount++;
                      }
                    }
                  }
                }
              } else {
                for (let k = 0; k < c.length; k++) {
                  for (let l = 0; l < d.length; l++) {
                    if (a[i] != b[j] && a[i] != c[k] && a[i] != d[l] && b[j] != c[k] && b[j] != d[l] && c[k] != d[l]) {
                      allCount++;
                    }
                  }
                }
              }
            } else {
              for (let k = 0; k < c.length; k++) {
                if (a[i] != b[j] && a[i] != c[k] && b[j] != c[k]) {
                  allCount++;
                }
              }
            }
          } else if (a[i] != b[j]) {
            allCount++;
          }
        }
      }
    }
    if (allCount) {
      return {
        data: info.content,
        num: allCount
      };
    } else {
      return {
        data: '',
        num: 0
      };
    }
  }
}

function f28(id, obj) {
  let rep=obj.replace(/\r/ig, ',').replace(/\n/ig,',');
  let arr = rep.split(',');
  let str = [];
  arr.forEach(item => {
    let a = item.split(' ');
    let state = false;
    if (a.length === gameContent[id]['betLength']) {
      a.forEach(val => {
        if (Number(val) && Number(val) < 12 && val.length === 2) {
          state = true
        } else {
          state = false;
          return false;
        }
      });
      if (state) {
        str.push(item)
      }
    }
  });
  if (str.length) {
    return {
      data: str.join(),
      num: str.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f25(id, obj) {

  let rep=obj.replace(/\r/ig, ',').replace(/\n/ig,',');
  let arr = rep.split(',');
  let str = [];
  arr.forEach(item => {
    let a = item.split(' ');
    let state = false;
    if (a.length === gameContent[id]['betLength']) {
      a.forEach(val => {
        if (Number(val) && Number(val) < 11 && val.length === 2) {
          state = true
        } else {
          state = false;
          return false;
        }
      });
      if (state) {
        str.push(item)
      }
    }
  });
  if (str.length) {
    return {
      data: arr.join(),
      num: str.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f23(obj) {
  let rep=obj.replace(/\s/g, ',');
  let arr =rep.split(',');
  let str = [];
  arr.forEach(item => {
    if (Number(item) && Number(item) < 11 && item.length === 2) {
      str.push(item)
    }
  });
  if (str.length) {
    return {
      data: arr.join(),
      num: str.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f21(id, obj, chLength, txt) {
  let arr = returnTrue(obj[0]['num']);
  let betNum = GetSSCZuLiuCount(arr.length, gameContent[id]['betNum']);
  if (betNum) {
    return {
      data: arr.join(''),
      num: parseInt(betNum * (chLength === 3 ? 1 : chLength === 4 ? 4 : chLength === 5 ? 10 : 0)),
      remark: txt
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f20(id, obj, chLength, txt) {
  let arr = returnTrue(obj[0]['num']);
  let betNum = GetSSCZuSanCount(arr.length, gameContent[id]['betNum']);
  if (betNum) {
    return {
      data: arr.join(''),
      num: parseInt(betNum * (chLength === 3 ? 1 : chLength === 4 ? 4 : chLength === 5 ? 10 : 0)),
      remark: txt
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f19(id, obj) {
  let arr = [];
  let arrText = [];
  obj.forEach(item => {
    arr.push(returnTrue(item.num));
    arrText.push(returnTrue(item.num).join('') || '-');
  });
  let num = arr.length;
  let allCount = 0;
  let W = arr[0].length > 0 ? arr[0].length : 0;
  let Q = arr[1].length > 0 ? arr[1].length : 0;
  let B = arr[2].length > 0 ? arr[2].length : 0;
  let S = arr[3].length > 0 ? arr[3].length : 0;
  let G = arr[4].length > 0 ? arr[4].length : 0;
  if (id == 61) {
    if (num > 3) { //四星任选复式
      allCount = W * Q * B * S + W * Q * B * G + W * B * S * G + W * Q * S * G + Q * B * S * G;
    }
  } else if (id == 63) {
    if (num > 2) { //三星任选复式
      allCount = W * Q * B + W * Q * S + W * Q * G + W * B * S + W * B * G + W * S * G + Q * B * S + Q * B * G + Q * S * G + B * S * G;
    }
  } else if (id == 68) {
    if (num > 1) { //二星任选复式
      allCount = W * Q + W * B + W * S + W * G + Q * B + Q * S + Q * G + B * S + B * G + S * G
    }
  }
  if (allCount) {
    return {
      data: arrText.join(),
      num: allCount
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f18(obj) {
  let arr = returnTrue(obj);
  if (arr.length) {
    return {
      data: arr.join(),
      num: arr.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f17(obj) {
  let arr = returnTrue(obj[0]['num']);
  let num = GetSSCErMaBdwdCount(arr.length);
  if (num) {
    return {
      data: arr.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f22(obj) {
  let arr = returnTrue(obj[0]['num']);
  if (arr.length) {
    return {
      data: arr.join(' '),
      num: arr.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f16(obj) {
  let arr = returnTrue(obj[0]['num']);
  if (arr.length) {
    return {
      data: arr.join(''),
      num: arr.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f26(obj) {
  let num = 0;
  let arr = [];
  obj.forEach(item => {
    let str = [];
    item.num.forEach(val => {
      if (val.state) {
        num += 1;
        str.push(val.value)
      }
    });
    arr.push(str.length ? str.join(' ') : '-')
  });
  if (num) {
    return {
      data: arr.join(','),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f15(obj) {
  let num = 0;
  let arr = [];
  obj.forEach(item => {
    let str = '';
    item.num.forEach(val => {
      if (val.state) {
        num += 1;
        str += val.value
      }
    });
    arr.push(str.length ? str : '-')
  });
  if (num) {
    return {
      data: arr.join(','),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f14(obj) {
  let arr = returnTrue(obj);
  let num = GetSSCErXiZxCount(arr.length, 2);
  if (num) {
    return {
      data: arr.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f13(data, maxNum) {
  let arr = returnTrue(data);
  let num = GetSSCZuLiuCount(arr.length, maxNum)
  if (num) {
    return {
      data: arr.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f12(data, maxNum) {
  let arr = returnTrue(data);
  let num = GetSSCZuSanCount(arr.length, maxNum)
  if (num) {
    return {
      data: arr.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f11(data) {
  let arr = returnTrue(data);
  let num = 0;
  arr.forEach(item => {
    num += GetSscKuaDuValue(item)
  });
  if (num) {
    return {
      data: arr.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f10(data) {
  let arr = returnTrue(data);
  let num = 0;
  arr.forEach(item => {
    num += GetHeZhiValue(item)
  });
  if (num) {
    return {
      data: arr.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f9(obj, manNum) {
  let arr = returnTrue(obj[0]['num']);
  let num = GetFormula_Multiply_Divide(arr.length, manNum);
  if (num) {
    return {
      data: arr.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

function f8(obj) {
  let arr = '';
  obj[0].num.forEach(item => {
    if (item.state) {
      arr += item.value
    }
  });
  if (arr.length > 0) {
    return {
      data: arr,
      num: arr.length
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
* 组选10 组选5
* */
function f7(obj) {
  let data = filterData(obj);
  let num = GetFormula_Zx_One_More(data, 0, 1, 1);
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
* 组选20
* */
function f6(obj) {
  let data = filterData(obj);
  let num = GetFormula_Zx_One_More(data, 0, 1, 2);
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
* 组选30
* */
function f5(obj) {
  let data = filterData(obj);
  let num = GetFormula_Zx_One_More(data, 1, 0, 2);
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
*  组选60
* */
function f4(obj) {
  let data = filterData(obj);
  let num = GetFormula_Zx_One_More(data, 0, 1, 3);
  if (num) {
    return {
      data: data.join(),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
*  组选120
* */
function f3(id, obj) {
  let data = [];
  obj[0].num.forEach(item => {
    if (item.state) {
      data.push(item.value)
    }
  });
  let num = data.length === 5 ? 1 : data.length === 6 ? 6 : data.length === 7 ? 21 : data.length === 8 ? 56 : data.length === 8 ? 56 : data.length === 9 ? 126 : 252;
  if (data.length >= gameContent[id]['minNum']) {
    return {
      data: data.join(''),
      num: num
    };
  } else {
    return {
      data: '',
      num: 0
    };
  }
}

/*
*  直选复式
* */
function f1(obj) {
  let betContent = [];
  obj.forEach((item, index) => {
    let itemNode = item.num;
    let str = [];
    for (let i = 0; i < itemNode.length; i++) {
      if (itemNode[i].state) {
        str.push(itemNode[i].value)
      }
    }
    if (str.length > 0) {
      betContent.push(str)
    }
  });
  let arr = [];
  let num = 1;
  betContent.forEach((item, index) => {
    num = Math.floor(num * item.length);
    arr.push(stringAdd(item));
  });
  if (betContent.length === obj.length) {
    return {
      data: arr.join(),
      num: num
    }
  } else {
    return {
      data: '',
      num: 0
    }
  }
}

/*
* 直选单式
* */
function f2(id, obj) {
  if (obj.length > 0) {
    let topArr = obj.replace(/ /g, ',').replace(/\s/g, ',');
    let arr = topArr.split(',');
    let newArr = [];
    arr.forEach((item, index) => {
      if (item.length === gameContent[id]['betLength']) {
        newArr.push(item)
      }
    });
    return {
      data: newArr.join(' '),
      num: newArr.length
    }
  } else {
    return {
      data: '',
      num: 0
    }
  }
}

//字符串相加
function stringAdd(arr) {
  let str = '';
  arr.forEach(item => {
    str += item.toString()
  });
  return str
}

//数组处理
function filterData(data) {
  let arr = [];
  data.forEach(item => {
    let str = '';
    item.num.forEach(val => {
      if (val.state) {
        str += val.value
      }
    });
    arr.push(str)
  });
  return arr;
}

// 多个数值计算组数
function GetFormula_Zx_One_More(num_arr, one_row, more_row, base_len) {
  if (num_arr[one_row].length < 1 || num_arr[more_row].length < base_len) {
    return 0;
  }
  let count = 0;
  let one_arr = num_arr[one_row];
  let more_arr = num_arr[more_row];
  for (let i = 0; i < one_arr.length; i++) {
    let one_val = one_arr[i];
    let more_len = more_arr.length;
    for (let j = 0; j < more_arr.length; j++) {
      if (one_val == more_arr[j]) {
        more_len--;
      }
    }
    if (more_len < base_len) continue;
    count += GetFormula_Multiply_Divide(more_len, base_len);
  }
  return count;
}

//  单个数值计算注数
function GetFormula_Multiply_Divide(numLen, baseLen) {
  let count = 1;
  for (let i = 0; i < baseLen; i++) {
    count *= (numLen--);
  }
  for (; baseLen > 1; baseLen--) {
    count /= baseLen;
  }
  return count;
}

// 返回为true的数组
function returnTrue(data) {
  let arr = [];
  data.forEach(item => {
    if (item.state) {
      arr.push(item.value)
    }
  });
  return arr
}

//返回多重数组
function returnArr(obj) {
  let arr = [];
  let str = [];
  obj.forEach(item => {
    arr.push(returnTrue(item.num))
    str.push(returnTrue(item.num).join(' '))
  });
  return {
    arr: arr,
    content: str.join()
  }
}

// 和值计算
/**
 * @return {number}
 */
function GetHeZhiValue(text) {
  let intText = Number(text);
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

// 跨度组数计算
/**
 * @return {number}
 */
function GetSscKuaDuValue(text) {
  let intText = Number(text);
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

// 组三
/**
 * @return {number}
 */
function GetSSCZuSanCount(selectCount, verifCount) {
  if (selectCount >= verifCount) {
    return ((selectCount - 1) * (selectCount - 1) + selectCount - 1);
  } else {
    return 0;
  }
}

// 时时彩组六计算注数
// selectCount 当期选择的数字按钮个数
// verifCount 最少需要选择的数字按钮个数
/**
 * @return {number}
 */
export function GetSSCZuLiuCount(selectCount, verifCount) {
  if (selectCount >= verifCount) {
    return ((selectCount - 2) * (selectCount - 1) * selectCount / 6);
  } else {
    return 0;
  }
}

/* 时时彩二星组选复式计算注数
    selectCount 当期选择的数字按钮个数
    verifCount 最少需要选择的数字按钮个数
    */
/**
 * @return {number}
 * @selectCount {number}
 */
export function GetSSCErXiZxCount(selectCount, verifCount) {
  //  if (selectCount >= verifCount && selectCount <= 7) {
  if (selectCount >= verifCount) {
    return selectCount * (selectCount - 1) / 2;
  } else {
    return 0;
  }
}

/*
时时彩二码不定位胆计算注数
selectCount 当期选择的数字按钮个数
*/
export function GetSSCErMaBdwdCount(selectCount) {
  return selectCount * (selectCount - 1) / 2;
}

// 快三组选
export function Get11X5_ZuXuanCount(cc, bb) {
  let b = parseInt(bb);
  let c = parseInt(cc);
  if (b < 0 || c < 0) {
    return 0;
  }
  if (b == 0 || c == 0) {
    return 1;
  }
  if (b > c) {
    return 0;
  }
  if (b > c / 2) {
    b = c - b;
  }
  let a = 0;
  for (let i = c; i >= (c - b + 1); i--) {
    a += Math.log(i);
  }
  for (let i = b; i >= 1; i--) {
    a -= Math.log(i);
  }
  a = Math.exp(a);
  return Math.round(a);
}

export function returnBetInputData(id, obj, num, tex) {
  if (id === 62) {
    return textF1(id, obj, num, tex)
  } else if (id === 64 || id === 67) {
    return textF2(id, obj, num, tex)
  } else if (id === 69) {
    return textF3(id, obj, num, tex)
  }
}

function textF1(id, obj, num, tex) {
  if (num > 3) {
   // let str = obj.replace(' ', ',').replace('\n', ',');
    let str = obj.replace(/ /g, ',').replace(/\s/g, ',');
    let arr = str.split(',');
    let newArr = [];
    arr.forEach((item, index) => {
      if (item.length === gameContent[id]['betLength']) {
        newArr.push(item)
      }
    });
    if (newArr.length > 0) {
      return {
        data: newArr.join(' '),
        num: parseInt(newArr.length * (num > 4 ? 5 : 1)),
        remark: tex
      }
    } else {
      return {
        data: '',
        num: 0,
      }
    }
  } else {
    return {
      data: '',
      num: 0,
    }
  }
}

function textF2(id, obj, num, tex) {
  if (num > 2) {
   // let str = obj.replace(' ', ',').replace('\n', ',');
    let str = obj.replace(/ /g, ',').replace(/\s/g, ',');
    let arr = str.split(',');
    let newArr = [];
    arr.forEach((item, index) => {
      if (item.length === gameContent[id]['betLength']) {
        newArr.push(item)
      }
    });
    if (newArr.length > 0) {
      return {
        data: newArr.join(' '),
        num: parseInt(newArr.length * (num == 3 ? 1 : num == 4 ? 4 : 10)),
        remark: tex
      }
    } else {
      return {
        data: '',
        num: 0,
      }
    }
  } else {
    return {
      data: '',
      num: 0,
    }
  }
}

function textF3(id, obj, num, tex) {
  // let str = obj.replace(' ', ',').replace('\n', ',');
  let str = obj.replace(/ /g, ',').replace(/\s/g, ',');
  let arr = str.split(',');
  let newArr = [];
  arr.forEach((item, index) => {
    if (item.length === gameContent[id]['betLength']) {
      newArr.push(item)
    }
  });
  if (newArr.length > 0) {
    return {
      data: newArr.join(' '),
      num: parseInt(newArr.length * (num == 2 ? 1 : num == 3 ? 3 : num == 4 ? 6 : num == 5 ? 10 : 0)),
      remark: tex
    }
  } else {
    return {
      data: '',
      num: 0,
    }
  }
}
