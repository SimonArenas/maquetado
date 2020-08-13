<template>
  <!-- Barra lateral derecha -->
  <v-row no-gutters>
    <v-col cols="12" class="py-0">
      <v-checkbox
        v-model="RightSidebarCheckbox"
        @change="onRightSidebarClicked($event)"
        class="no-space"
      >
        <template v-slot:label> <h1>Barra lateral derecha</h1> </template>
        ></v-checkbox
      >
    </v-col>
    <v-col cols="12" class="py-0">
      <v-checkbox
        v-model="LeftSidebarCheckbox"
        @change="onLeftSidebarClicked($event)"
        class="no-space"
      >
        <template v-slot:label> <h1>Barra lateral izquierda</h1> </template>
        ></v-checkbox
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      RightSidebarCheckbox: null,
      LeftSidebarCheckbox: null,
    };
  },
  methods: {
    onRightSidebarClicked() {
      this.$emit("RightSidebarApplied", this.RightSidebarCheckbox);
    },
    onLeftSidebarClicked() {
      this.$emit("LeftSidebarApplied", this.LeftSidebarCheckbox);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_mixins.scss";
h1 {
  @include title;
}
h4 {
  @include subtitle;
}
</style>
