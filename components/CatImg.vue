<script lang="ts">
import {defineComponent, PropType} from "vue";
import {CatImage} from "~/types/cats-app";

export default defineComponent({
  props: {
    src: {
      type: Object as PropType<CatImage>,
      required: false
    }
  }
})
</script>

<template>
  <div>
    <img :src="src.url" alt="cats image {{src.id}}"/>
    <slot/>
  </div>
</template>

<style scoped>
div{
  width: 100%;
  height: 100%;
  min-width: 225px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s ease-in-out;
}
div:hover{
  transform: scale(1.2);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
img{
  position: absolute;
  object-fit: cover;
  min-height: 100%;
  max-height: 120%;
  min-width: 100%;
}
</style>
