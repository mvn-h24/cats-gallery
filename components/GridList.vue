<script lang="ts" setup></script>

<template>
  <div>
    <slot/>
  </div>
</template>

<style scoped>
div {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  grid-auto-rows: 225px;
  grid-auto-flow: row;
  max-width: 100%;
  gap: 50px;
  
}
</style>
