<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent/index.vue';
  import FooterComponent from './components/FooterComponent/index.vue';

  export default {
    name: 'app',

    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  /* settings */
  @import (reference) './assets/styles/settings/index.less';

  /* layout */
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font: normal 14px/20px @Roboto;
    background-color: @lightGray;
    color: @darkGray;
  }

  #app {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
    min-height: 100%;
    padding: 50px 16px 60px;
    box-sizing: border-box;
  }
</style>
