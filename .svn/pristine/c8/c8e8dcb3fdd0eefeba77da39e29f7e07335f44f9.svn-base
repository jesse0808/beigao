export const HeightMixins = {
  data() {
    return {
      privateHeight:0
    }
  },
  watch: {
    $route(newValue) {
      if(newValue) this._initHeight()
    }
  },
  mounted() {
      setTimeout(() => {
       this.$nextTick(() => {
         this._initHeight()
       })
      },100)
  },
  methods: {
    _initHeight() {
      let RightHeight = this.$refs.menuRight
      this.privateHeight = RightHeight.offsetHeight
    }
  }
}
