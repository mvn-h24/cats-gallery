<template>
  <div>
    <nav-list/>
    <content-column class="column" v-scroll-after="onScrollOverGrid">
      <grid-list class="grid-list_cats">
        <cat-img v-for="catImg in data" :key="catImg.id" :src="catImg"/>
      </grid-list>
      <show-hidden-transition>
        <loader v-if="isLoading"> loading start</loader>
      </show-hidden-transition>
    </content-column>
  </div>
</template>
<script lang="ts" setup>
import {vScrollAfter} from '@/dirictives/scroll-after'
useHead({
  title: 'Favorite cats'
})
const {data} = await useCatsList()
const page = ref(0);
const isLoading = ref(false);
const onScrollOverGrid = (event) => {
  if(!isLoading.value){
    page.value += 1;
    isLoading.value = true;
  }
}
</script>

<style scoped>
.column{
  margin: 50px auto;
  padding:0 60px;
}
</style>