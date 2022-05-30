<template>
  <div>
    <nav-list/>
    <content-column class="column">
      <grid-list class="grid-list_cats">
        <cat-img v-for="catImg in favorites" :key="catImg.id" :src="catImg" class="catImage">
          <favorite-btn
            :active="isFavorite(catImg)"
            :class="{['favorite-cat-key']:!isFavorite(catImg)}"
            @click="toggleFavorite(catImg)"
          />
        </cat-img>
      </grid-list>
    </content-column>
    </div>
</template>
<script lang="ts" setup>
import { useFavorites } from '~~/composables/useFavorites';
import { CatImage } from '~~/types/cats-app';
useHead({
  title: 'Favorite cats'
})

const favorites = useFavorites()
const toggleFavorite = (item:CatImage)=>{
  if(isFavorite(item)){
    favorites.value = favorites.value.filter(({id})=> id !== item.id);
  }else{
    favorites.value.push(item);
  }
}
const isFavorite = (item:CatImage) => favorites.value.includes(item)
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