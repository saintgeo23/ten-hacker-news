<template>
  <div class="errorblock">
    <div class="errorblock__container">
      <v-alert error v-bind:value="true">
        Something has gone terribly wrong.
      </v-alert>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
  .errorblock {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    &__container {
      height: 100px;
    }
  }
</style>
