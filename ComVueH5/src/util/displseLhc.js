export function returnBetData(id, obj, text) {
  if (id === 240 || id === 241 || id === 242 || id === 243 || id === 244 || id === 245 || id === 246 || id === 247 || id === 248 || id === 249 || id === 251 || id === 252) {
    return f1(obj)
  } else if (id === 250 || id === 253 || id === 254 || id === 255 || id === 256 || id === 257 || id === 258) {
    return f2(id,obj)
  }
  else {
    return {
      data: '',
      num: 0
    }
  }
}
function f2(id,obj) {
  let data = returnTrue(obj);
  let mixNum = {
    '250': 5,
    '253': 4,
    '254': 5,
    '255': 6,
    '256': 7,
    '257': 8,
    '258': 9
  };
  let num = data.length > mixNum[id] ? test(data.length, (mixNum[id] + 1)) : 0;
  if (num) {
    return {
      data: data,
      num: num
    }
  } else {
    return {
      data: '',
      num: 0
    }
  }
}
function f1(obj) {
  let data = returnTrue(obj);
  if (data.length) {
    return {
      data: data,
      num: data.length
    }
  } else {
    return {
      data: '',
      num: 0
    }
  }
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
function test(t, e) {
  if (t < e) return 0;
  let i = t, n = t - e, a = t - e, s = t, r = t - e
  if (t === e)
    n = i = 1;
  else {
    for (let l = 0; l < a - 1; l++) {
      i *= s -= 1;
      n *= r -= 1;
    }
    
  }
  return Math.round(i / n);
}
