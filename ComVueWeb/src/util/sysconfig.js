import {postAjax, getAjax} from "./ajax.js"

export function loadSystemConfig() {
  let url = "api/Sys/GetSysConfigDic";
  postAjax(url, 1)
    .then((data) => {
      console.log('loadSystemConfig rest ', data)
      if (data.IsSucess) {
        window.systemData = data.Data;
        console.log("load SystemConfig",window.systemData)
      }
    })
}
export function exLoadSystemConfig() {
  return postAjax('api/Sys/GetSysConfigDic', 1)
}
export function SysKey(key) {
  if (window.systemData == null) {
    loadSystemConfig();
  }
  return  window.systemData[key]
}

export default {
  exLoadSystemConfig,
  SysKey,
  loadSystemConfig,
};
