<template>
  <header class="header">
    <div class="header__text">George Volokitin © 2017</div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
  };
</script>

<style lang="less" rel="stylesheet/less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #0D47A1;
    // color: @white;
  }
</style>
