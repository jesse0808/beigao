export const height = {
  data() {
    return {}
  },
  mounted(){
    console.log('接入最小高度');
    this.$nextTick(()=>{
      let minHeight = document.documentElement.clientHeight - 300;
      this.$refs.minHeight.style.minHeight = minHeight + 'px';
    })
  }
}
