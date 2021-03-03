<template>
  <div class="man_box" ref="minHeight">
    <div class="center_box">
      <register_item></register_item>
    </div>
  </div>
</template>

<script>
    import {height} from "../../mixins/minHeight"
    import register_item from "./register_item";
    export default {
        name: "register",
        mixins: [height],
        components:{register_item}
    }
</script>

<style lang="scss" scoped>
  .man_box {
    width: 100%;
    min-width: 1200px;
    padding: 50px 0;

    .center_box {
      display: table;
      width: auto;
      height: auto;
      margin: 0 auto;
    }
  }
</style>
