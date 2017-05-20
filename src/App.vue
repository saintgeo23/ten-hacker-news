<template>
  <div id="app">
    <PlaceholderComponent v-show="!isDataReady && !isError" />
    <ErrorComponent v-show="isError && !isDataReady" />
    <MainComponent v-show="isDataReady" :stories="storiesIDs" @readyEvent="setReady" @errorEvent="setError" />
    <FooterComponent />
  </div>
</template>

<script>
  import PlaceholderComponent from './components/PlaceholderComponent/index.vue';
  import ErrorComponent from './components/ErrorComponent/index.vue';
  import MainComponent from './components/MainComponent/index.vue';
  import FooterComponent from './components/FooterComponent/index.vue';

  export default {
    name: 'app',

    components: {
      PlaceholderComponent,
      ErrorComponent,
      MainComponent,
      FooterComponent,
    },

    data() {
      return {
        isDataReady: false,
        isError: false,
      };
    },

    beforeMount() {
      this.$store.dispatch('getStoriesIDs')
        .then(data => console.log(data))
        .catch(error => console.log(error));
    },

    computed: {
      storiesIDs() {
        return this.$store.getters.getStoriesIDs;
      },
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
