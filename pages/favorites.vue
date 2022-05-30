<template>
  <div>
    <nav-list/>
    <content-column class="column">
      <grid-list class="grid-list_cats">
        <cat-img v-for="catImg in favorites" :key="catImg.id" :src="catImg" class="catImage">
          <favorite-btn
              :active="isFavorite(catImg)"
              @click="toggleFavorite(catImg)"
          />
        </cat-img>
      </grid-list>
    </content-column>
  </div>
</template>
<script lang="ts" setup>
import {useFavorites} from '~~/composables/useFavorites';
import {useHead} from "#imports";

useHead({
  title: 'Favorite cats'
})

const {favorites, isFavorite, toggleFavorite} = useFavorites()
</script>

<style scoped>
.column {
  margin: 50px auto;
  padding: 0 60px;
}
</style>