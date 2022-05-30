<script lang="ts" setup>
const navList =  {
    '/':'Cats',
    '/favorites':'Favorite cats'
  }
</script>

<template>
  <nav>
    <content-column class="content-col">
      <ul>
        <li v-for="(navTitle, url) in navList">
          <NuxtLink :to="url">{{navTitle}}</NuxtLink>
        </li>
      </ul>
    </content-column>
  </nav>
</template>

<style scoped>
nav{
  width: 100%;
}
.content-col{
  align-items: flex-start;
}</style>
