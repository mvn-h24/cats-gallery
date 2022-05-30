<template>
  <div>
    <nav-list/>
    <content-column v-scroll-after="onScrollOverGrid" class="column">
      <grid-list v-if="catList?.length" class="grid-list_cats">
        <cat-img v-for="catImg in catList" :key="catImg.id" :src="catImg" class="catImage">
          <favorite-btn
              :active="isFavorite(catImg)"
              :class="{['favorite-cat-key']:!isFavorite(catImg)}"
              @click="toggleFavorite(catImg)"
          />
        </cat-img>
      </grid-list>
      <show-hidden-transition>
        <loader v-if="catListLoading" class="loader">Cats are loading</loader>
      </show-hidden-transition>
    </content-column>
  </div>
</template>

<script lang="ts" setup>
import {useHead} from "#imports";
import {useCatsList} from "~~/composables/useCatsListPage";
import {useFavorites} from "~~/composables/useFavorites";

useHead({
  title: 'Cats list'
})

const {catList, catListLoading, page} = useCatsList();
const {toggleFavorite, isFavorite} = useFavorites()

const onScrollOverGrid = () => {
  if (!catListLoading.value) {
    page.value += 1;
  }
}
</script>
<script lang="ts">
import {defineComponent} from "vue";
import {ScrollAfter} from '~~/dirictives/scroll-after'

export default defineComponent({
  directives: {
    ScrollAfter
  }
})
</script>


<!--suppress CssUnusedSymbol -->
<style scoped>
.column {
  margin: 50px auto;
  padding: 0 60px;
}

.catImage .favorite-cat-key {
  opacity: 0;
}

.catImage:hover .favorite-cat-key {
  opacity: 1;
}

.loader {
  align-self: center
}
</style>