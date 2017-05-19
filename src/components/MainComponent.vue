<template>
  <div class="wrapper">
    <StoryComponent v-for="(id, index) in storiesIDs" :id="id" :key="index" />
  </div>
</template>

<script>
  import StoryComponent from './StoryComponent';

  export default {
    name: 'MainComponent',

    components: {
      StoryComponent,
    },
    
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },

    beforeMount() {
      this.$store.dispatch('getStories')
      .then(data => console.log(data))
      .catch(error => console.log(error));
    },

    computed: {
      storiesIDs() {
        return this.$store.getters.getStories;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
