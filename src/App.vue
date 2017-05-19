<template>
  <div id="app">
    <PlaceholderComponent v-show="!isDataReady" />
    <MainComponent v-show="isDataReady" />
  </div>
</template>

<script>
  import PlaceholderComponent from './components/PlaceholderComponent';
  import MainComponent from './components/MainComponent';

  export default {
    name: 'app',

    components: {
      PlaceholderComponent,
      MainComponent,
    },

    data() {
      return {
        isDataReady: false,
      };
    },
  };
</script>

<style>
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>
