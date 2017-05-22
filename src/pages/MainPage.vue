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
      this.$store.dispatch('getStoriesIDs')
        .then(data => console.log(data))
        .catch(error => console.log(error));
    },

    computed: {
      storiesIDs() {
        return this.$store.getters.getStoriesIDs;
      },
    },
  };
</script>

<style></style>
