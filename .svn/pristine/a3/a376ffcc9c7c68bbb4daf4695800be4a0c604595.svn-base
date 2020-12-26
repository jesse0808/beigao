import {postAjax} from "../util/ajax";

export const game = {
  data() {
    return {
      pg: {
        2: {GameCode: "11", GameId: 2},
        3: {GameCode: "lobby", GameId: 3},
        4: {GameCode: "1", GameId: 4},
      }
    }
  },
  methods: {
    _initOpenLoading(isFlag = true) {
      this.loading = this.$loading({
        lock: true,
        text: `${isFlag ? '投注中' : '加载中'}...`,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      })
    },
    _initCloseLoading() {
      this.loading.close()
    },
    
    getGameInfo(id) {
      if (!localStorage.getItem('token')) {
        this.$store.commit('loadLogin', true);
        return false;
      }
      let name = '';
      let url = `/api/ThirdGame/GetGameList?g=${id}&d=1`;
      let data = {
        name: name,
        PIndex: 1,
        PSize: 1
      };
      // this._initOpenLoading(false)
      postAjax(url, data).then((data) => {
        if (data.IsSucess) {
          // this._initCloseLoading()
          this.toGame(data.Data.rows[0]);
        } else {
          // this._initCloseLoading()
        }
      }).catch(() => {
        // this._initCloseLoading()
      })
    },
    toGame(arr) {
      let that = this
      if (!localStorage.getItem('Authorization')) {
        this.$store.commit('setLoginAfter', true);
        return;
      }
      let url = "/api/ThirdGame/StartGame";
      let data = {
        GameCode: arr.GameCode,
        game: arr.GameId,
        plat: 1001
      };
      this._initOpenLoading(false);
      postAjax(url, data, 1).then((data) => {
        if (data.IsSucess) {
          this._initCloseLoading();
          that.$confirm('将在新窗口打开游戏！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'success',
            center: true
          }).then(() => {
            window.open(data.Data);
          }).catch(() => {
            that.$message({
              type: 'warning ',
              message: '已取消游戏'
            });
          });
        } else {
          this._initCloseLoading();
          this.$message.error(data.Message);
        }
      })
    },
    startGame2(pt) {
      if (!localStorage.getItem('token')) {
        this.$store.commit('loadLogin', true);
        return;
      }
      if (this.$store.state.userInfo.IsTest) {
        this.$message.error("测试账户不能访问");
        return;
      }
      let url = "/api/ThirdGame/StartGame";
      let data = {
        GameCode: this.pg[pt].GameCode,
        game: this.pg[pt].GameId,
        plat: 1001
      };
      this._initOpenLoading(false)
      postAjax(url, data, 1).then((data) => {
        this._initCloseLoading()
        if (data.IsSucess) {
          that.$confirm('将在新窗口打开游戏！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'success',
            center: true
          }).then(() => {
            window.open(data.Data);
          }).catch(() => {
            that.$message({
              type: 'warning ',
              message: '已取消游戏'
            });
          });
        } else {
          this.$message.error(data.Message);
        }
      }).catch(() => {
        this._initCloseLoading()
      })
    },
    asyncLoadJs(url) {
      return new Promise((resolve, reject) => {
        let hasLoaded = $('script[src="' + url + '"]').length > 0;
        if (hasLoaded) {
          resolve();
          return
        }
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.body.appendChild(script);
        script.onload = () => {
          resolve()
        }
        script.onerror = () => {
          reject()
        }
      })
    }
  },
  mounted() {
    this.asyncLoadJs('https://login.greenjade88.com/jswrapper/integration.js.php?casino=greenjade88');
  }
}
