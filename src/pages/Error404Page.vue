<template>
  <div class="warnblock">
    <div class="warnblock__container">
      <span class="warnblock__exclamation">!</span>
      <span class="warnblock__message">404. Here you find nothing</span>      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Error404Page',

    head: {
      title: {
        inner: 'Not Found',
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../assets/styles/settings/index.less';

  .warnblock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 230px;
    background-color: @orange;
    border-top: 8px solid @darkOrange;
    color: @white;
    padding: 0 24px;

    &__container {
      height: 80px;
      line-height: 80px;
    }

    &__container:after {
      display: block;
      height: 0;
      line-height: 0;
      clear: both;
      content: '';
    }

    &__exclamation {
      float: left;
      width: 40px;
      color: @darkOrange;
      font-size: 64px;
      font-weight: 900;
    }

    &__message {
      font-size: 16px;
    }
  }
</style>
