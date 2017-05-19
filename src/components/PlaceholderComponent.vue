<template>
  <div class="placeholder">
    <v-progress-circular 
      indeterminate 
      v-bind:size="70" 
      v-bind:width="7" 
      class="primary--text"
    />
  </div>
</template>

<script>
</script>

<style>
  .placeholder {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
