<template>
  <header class="header">
    <div class="header__container">
      <router-link class="header__item" to="/">TenHackerNews</router-link>
      <router-link class="header__item" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import (reference) '../../assets/styles/settings/index.less';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: @black;
    padding: 0 16px;
    box-sizing: border-box;

    &__container {
      max-width: 1000px;
      margin: 0 auto;
    }

    &__container:after {
      display: block;
      height: 0;
      line-height: 0;
      clear: both;
      content: '';
    }

    &__item,
    &__item:visited {
      float: left;
      color: @white;
      font-weight: 900;
      font-size: 20px;
      text-decoration: none;
    }

    &__item + &__item {
      float: right;
      font-weight: normal;
      font-size: 14px;
    }
  }
</style>
