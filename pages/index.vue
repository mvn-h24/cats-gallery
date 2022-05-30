<template>
  <div>
    <nav-list/>
    <content-column class="column" v-scroll-after="onScrollOverGrid">
      <grid-list class="grid-list_cats">
        <cat-img v-for="catImg in data" :key="catImg.id" :src="catImg" class="catImage">
          <favorite-btn class="favorite-cat-key"/>
        </cat-img>
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
  title: 'Cats list'
})

const page = ref(1);
const {data} = await useCatsList(page.value)
const isLoading = ref(false);
const onScrollOverGrid = (event) => {
  if(!isLoading.value){
    page.value += 1;
    isLoading.value = true;
  }
}
watch(data, (d)=> {
  isLoading.value = false;
})
watch(page,(d)=> {
  setTimeout(async () => {
    data.value = (await useCatsList(page.value)).data.value
  }, 2000)
})
</script>

<style scoped>
.column{
  margin: 50px auto;
  padding:0 60px;
}
.catImage .favorite-cat-key{
  opacity: 0;
}
.catImage:hover .favorite-cat-key{
  opacity: 1;
}
</style>