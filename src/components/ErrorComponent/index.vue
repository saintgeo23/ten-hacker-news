<template>
  <div class="errorblock">
    <div class="errorblock__container">
      <span class="errorblock__exclamation">!</span>
      <span class="errorblock__text">
        <span class="errorblock__message">Something has gone wrong</span>
        <a class="errorblock__link" href="/">Try to refresh page</a>
      </span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../../assets/styles/settings/index.less';

  .errorblock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 236px;
    background-color: @red;
    border-top: 8px solid @darkRed;
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
      color: @darkRed;
      font-size: 64px;
      font-weight: 900;
    }

    &__text {
      display: block;
      overflow: hidden;
      text-align: center;
      padding-top: 10px;
    }

    &__message,
    &__link {
      display: block;
      font-size: 16px;
      line-height: 30px;
    }

    &__link,
    &__link:visited {
      color: @white;
    }
  }
</style>
