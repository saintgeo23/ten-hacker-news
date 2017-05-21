<template>
  <div id="app">
    <PlaceholderComponent v-show="!isDataReady && !isError" />
    <ErrorComponent v-show="isError && !isDataReady" />
    <router-view v-show="isDataReady" @readyEvent="setReady"></router-view>
    <FooterComponent />
  </div>
</template>

<script>
  import PlaceholderComponent from './components/PlaceholderComponent/index.vue';
  import ErrorComponent from './components/ErrorComponent/index.vue';
  import FooterComponent from './components/FooterComponent/index.vue';

  export default {
    name: 'app',

    components: {
      PlaceholderComponent,
      ErrorComponent,
      FooterComponent,
    },

    data() {
      return {
        isDataReady: false,
        isError: false,
      };
    },

    methods: {
      setReady() {
        this.isDataReady = true;
      },

      setError() {
        this.isError = true;
      },
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

  body {
    background-color: #e8e8e8;
    padding: 0 0 60px;
    box-sizing: border-box;
    color: #424242;
  }

  #app {
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
    min-height: 100%;
  }
</style>
