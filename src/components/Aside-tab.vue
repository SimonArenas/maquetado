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
    <!-- ¿Mostrar menú? -->
    <template v-if="RightSidebarCheckbox">
      <v-row no-gutters>
        <v-switch
          class="no-space"
          v-model="showMenuRightSidebar"
          @change="onShowMenuRightSidebar($event)"
        >
          <template v-slot:label>
            <h4>
              Mostrar Menú
            </h4></template
          >
          ></v-switch
        >
      </v-row>
      <v-textarea
        solo
        name="estilo-personalizado"
        label="Estilo personalizado"
        value=""
        clearable
      ></v-textarea>
    </template>

    <!-- Barra lateral Izquierda -->
    <template v-if="leftSidebar != 'Pequeño' && leftSidebar != 'Largo'">
      <v-col cols="12" class="py-0">
        <v-checkbox
          v-model="LeftSidebarCheckbox"
          @change="onLeftSidebarClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Barra lateral izquierda</h1> </template>
          ></v-checkbox
        >
        <v-switch
          v-if="LeftSidebarCheckbox"
          v-model="switch_AsideHover"
          label="Maximixar en hover"
          @change="onAsideHover($event)"
          hide-details
        ></v-switch>
        <v-textarea
          v-if="LeftSidebarCheckbox"
          solo
          name="estilo-personalizado"
          label="Estilo personalizado"
          value=""
          clearable
          class="mt-5"
        ></v-textarea>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  props: ["leftSidebar"],

  data() {
    return {
      RightSidebarCheckbox: null,
      LeftSidebarCheckbox: null,
      showMenuRightSidebar: null,
      switch_AsideHover: null,
    };
  },
  methods: {
    onRightSidebarClicked() {
      this.$emit("RightSidebarApplied", this.RightSidebarCheckbox);
    },
    onLeftSidebarClicked() {
      this.$emit("LeftSidebarApplied", this.LeftSidebarCheckbox);
    },
    onShowMenuRightSidebar() {
      this.$emit("MenuRightSidebarApplied", this.showMenuRightSidebar);
    },
    onAsideHover() {
      this.$emit("AsideHoverApplied", this.switch_AsideHover);
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
