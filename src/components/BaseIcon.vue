<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/iconos.svg#icon-' + name }"></use>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: block;
}
.icon {
  fill: currentColor;

  margin-top: 6px;
}
</style>
