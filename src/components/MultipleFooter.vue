<template>
  <div class="multiple-footer">
    <div class="multiple-footer-1" :class="{ second: SwapOrder }">
      Previsualización footer múltiple
    </div>
    <div class="multiple-footer-2" :class="{ first: SwapOrder }">
      <p>Más espacio⚡</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["SwapOrder"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.multiple-footer {
  display: flex;
  flex-direction: column;
  &-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #95afc0;
    color: white;
  }
  &-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #535c68;
    color: white;
  }
  .first {
    order: 1;
  }
  .second {
    order: 2;
  }
}
</style>
