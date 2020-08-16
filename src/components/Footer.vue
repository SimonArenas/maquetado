<template>
  <div
    v-if="showFooter"
    class="simple-footer"
    v-bind:style="[
      fixedFooter
        ? {
            position: 'fixed',
            zIndex: '3000',
            bottom: '0',
            left: '0',
          }
        : null,
    ]"
  >
    Previsualización footer
  </div>
</template>

<script>
export default {
  props: ["showFooter", "fixedFooter"],
};
</script>

<style lang="scss" scoped>
.simple-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 40px;
  background-color: #95afc0;
  color: white;
  width: 100%;
  padding: 10px 0;
}
</style>
