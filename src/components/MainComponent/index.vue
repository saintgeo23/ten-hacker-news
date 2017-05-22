<template>
  <div class="wrapper">
    <div class="wrapper__item" v-for="(id, index) in stories" :key="index">
      <StoryComponent :id="`${id}`" @ready="emitReady" @error="emitError" />
    </div>
  </div>
</template>

<script>
  import StoryComponent from '../StoryComponent/index.vue';

  export default {
    name: 'MainComponent',

    components: {
      StoryComponent,
    },

    props: {
      stories: {
        type: Array,
        default: () => [],
      },
    },

    methods: {
      emitReady() {
        this.$emit('readyEvent');
      },

      emitError() {
        this.$emit('errorEvent');
      },
    },
  };
</script>

<style lang="less" rel="stylesheet/less">
  .wrapper {
    max-width: 640px;
    margin: 0 auto;
    padding: 36px 0;

    &__item + &__item {
      margin-top: 36px;
    }
  }
</style>
