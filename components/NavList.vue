<script lang="ts" setup>
const navList =  {
    '/':'Cats',
    '/favorites':'Favorite cats'
  }
  const router = useRoute()
</script>

<template>
  <nav>
    <content-column class="content-col">
      <ul>
        <li v-for="(navTitle, url) in navList" :class="{current:url===router.fullPath}" :key="url">
          <NuxtLink :to="url" >{{navTitle}}</NuxtLink>
        </li>
      </ul>
    </content-column>
  </nav>
</template>

<style scoped>
nav{
  background-color: #2196F3;
  width: 100%;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
ul li{
  padding: 23px 22px;
  display: flex;
  justify-content: stretch;
}
ul li.current{
  background-color: #1E88E5;
}
ul li a{
  display: block;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: #fff;
  text-decoration: none;
}
ul li a:visited{
  color: #fff;
}
.content-col{
  align-items: flex-start;
}</style>
