<template>
  <footer class="footer">
    <div class="footer__text">George Volokitin © 2017</div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterComponent',
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../../assets/styles/settings/index.less';

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: @black;
    color: @white;
    font-size: 10px;

    &__text {
      text-align: center;
    }
  }
</style>
