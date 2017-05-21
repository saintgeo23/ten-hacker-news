<template>
  <MainComponent :stories="storiesIDs" @errorEvent="setError" />
</template>

<script>
  import MainComponent from '../components/MainComponent/index.vue';

  export default {
    name: 'MainPage',

    components: {
      MainComponent,
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
