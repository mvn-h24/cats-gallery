<template>
  <button :class="{active: props.active}">
  </button>
</template>

<script lang="ts" setup>
import heart from "~~/assets/icons/heart.svg";
import heartOutline from "~~/assets/icons/heart-outline.svg";

const heartUrl = `url("${heart}")`;
const heartOutlineUrl = `url("${heartOutline}")`;
const props = withDefaults(
    defineProps<{
      active?: boolean
    }>(),
    {
      active: false
    }
)
</script>

<style scoped>
button {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 25px;
  bottom: 25px;

  background-image: v-bind(heartOutlineUrl);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;

  border: none;
  cursor: pointer;
  transition: 0.2s opacity ease-in, 0.5s background-image ease-in;
}

button:hover {
  background-image: v-bind(heartUrl);
  filter: grayscale(40%);
}

button:active {
  filter: none;
}

button.active {
  background-image: v-bind(heartUrl);
}

button.active:active,
button.active:hover {
  transform: scale(1.1);
}
</style>
