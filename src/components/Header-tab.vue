<template>
  <div>
    <!-- Tipo de menú -->
    <v-row justify="start" no-gutters>
      <v-checkbox
        class="no-space"
        v-model="HeaderStyle"
        value="1"
        @change="onHeaderHorizontalClicked($event)"
      >
        <template v-slot:label> <h1>Menú horizontal</h1> </template>
        ></v-checkbox
      >
      <v-checkbox
        class="ml-8 no-space"
        v-model="HeaderStyle"
        value="2"
        @change="onHeaderVerticalClicked($event)"
      >
        <template v-slot:label> <h1>Menú Vertical</h1> </template>
        ></v-checkbox
      >
    </v-row>
    <div no-gutters v-if="HeaderStyle == 1">
      <v-row no-gutters>
        <v-checkbox
          class="no-space"
          v-model="menuFullWidth"
          @change="onMenuFullWidthClicked($event)"
        >
          <template v-slot:label> <h4>Menú full-width</h4></template>
          ></v-checkbox
        >
      </v-row>
      <!-- Alineación de menú -->
      <v-row no-gutters align="center">
        <h4 class="pr-10">Alineación de menú</h4>
        <v-overflow-btn
          v-model="selectedMenuAlign"
          :items="menuAlign"
          item-value="text"
          label="Alinear menú"
          persistent-hint
          return-object
          single-line
          dense
          @change="onMenuAlign($event)"
        ></v-overflow-btn>
        <!-- Fixed header -->
      </v-row>
      <v-switch
        v-model="HeaderFixedSwitch"
        label="Fixed position"
        @change="onHeaderFixedSwitch($event)"
        class="no-space"
      ></v-switch>
    </div>

    <div v-if="HeaderStyle == 2">
      <!-- Tamaño de menú -->
      <v-row align="center">
        <v-col class="no-space">
          <p>Tamaño del menú</p>
        </v-col>
        <v-col class="no-space">
          <v-overflow-btn
            v-model="selectedMenuSize"
            :items="menuSize"
            item-value="text"
            label="Tamaño del menú"
            persistent-hint
            return-object
            single-line
            dense
            @change="onVerticalMenuSize($event)"
          ></v-overflow-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificationCheckbox: null,
      PreheaderCheckbox: null,
      HeaderStyle: false,
      menuFullWidth: null,
      MenuAlign: null,
      selectedMenuAlign: null,
      selectedMenuSize: null,
      offset: true,
      HeaderFixedSwitch: null,

      menuAlign: [
        { text: "Derecha" },
        { text: "Centro" },
        { text: "Izquierda" },
      ],
      menuSize: [{ text: "Pequeño" }, { text: "Largo" }],
    };
  },
  methods: {
    onHeaderHorizontalClicked() {
      this.$emit("HeaderHorizontalApplied", this.HeaderStyle);
    },
    onHeaderVerticalClicked() {
      this.$emit("HeaderVerticalApplied", this.HeaderStyle);
    },
    onMenuFullWidthClicked() {
      this.$emit("fullWidthHorizontalMenuApplied", this.menuFullWidth);
    },
    onMenuAlign() {
      this.$emit("MenuAlignApplied", this.selectedMenuAlign.text);
    },
    onVerticalMenuSize() {
      this.$emit("VerticalMenuSize", this.selectedMenuSize.text);
    },
    onHeaderFixedSwitch() {
      this.$emit("HeaderFixedApplied", this.HeaderFixedSwitch);
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
