<template>
  <div class="page">
    <PlaceholderComponent v-show="!isDataReady && !isError" />
    <ErrorComponent v-show="isError && !isDataReady" />
    <MainComponent v-show="isDataReady" :stories="storiesIDs" @errorEvent="setError" @readyEvent="setReady" />
  </div>
</template>

<script>
  import PlaceholderComponent from '../components/PlaceholderComponent/index.vue';
  import ErrorComponent from '../components/ErrorComponent/index.vue';
  import MainComponent from '../components/MainComponent/index.vue';

  export default {
    name: 'MainPage',

    components: {
      PlaceholderComponent,
      ErrorComponent,
      MainComponent,
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

    beforeMount() {
      if (this.storiesIDs.length === 0) {
        this.$store.dispatch('getStoriesIDs')
          .then(() => console.log('Success!'))
          .catch(error => console.log(error));
      }
    },

    computed: {
      storiesIDs() {
        return this.$store.getters.getStoriesIDs;
      },
    },
  };
</script>

<style>
  .page {
    width: 100%;
    height: 100%;
  }
</style>
