<template>
  <div
    class="notification-area"
    v-bind:style="[
      fixedPreheader
        ? {
            position: 'fixed',
            zIndex: '3000',
            top: '0',
            left: '0',
          }
        : null,
    ]"
  >
    <v-icon small :color="iconColor" class="mr-2">mdi-{{ iconName }}</v-icon>
    {{
      preheaderText == null
        ? `Esta es una previsualización del área de notificación`
        : `${preheaderText}`
    }}
  </div>
</template>

<script>
export default {
  props: ["fixedPreheader", "preheaderText", "iconName", "iconColor"],
};
</script>

<style lang="scss" scoped>
.notification-area {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9b59b6;
  color: white;
  width: 100%;
  height: 30px;
}
</style>
