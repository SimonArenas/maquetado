<template>
  <div>
    <!-- Área de notificación -->
    <v-row no-gutters>
      <v-col class="pt-5">
        <v-checkbox
          v-model="notificationCheckbox"
          @change="onNotificationAreaClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Area de notificación</h1> </template>
          ></v-checkbox
        >
      </v-col>
    </v-row>
    <!-- Preheader -->
    <v-row no-gutters>
      <v-col class="py-0">
        <v-checkbox
          v-model="PreheaderCheckbox"
          @change="onPreheaderClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Preheader</h1> </template>
          ></v-checkbox
        >
      </v-col>
    </v-row>
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
      <!-- ¿Header en una sola fila? -->
      <v-row no-gutters>
        <v-checkbox
          class="no-space"
          v-model="oneRowHeader"
          @change="onOneRowHeaderClicked($event)"
          :disabled="disable"
        >
          <template v-slot:label>
            <h4>
              Header en una sola fila (necesario activar preheader)
            </h4></template
          >
          ></v-checkbox
        >
      </v-row>

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
      </v-row>
    </div>

    <h4 v-if="HeaderStyle == 2">
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
    </h4>
    <!-- Barra lateral derecha -->
    <v-row no-gutters>
      <v-col class="py-0">
        <v-checkbox
          v-model="RightSidebarCheckbox"
          @change="onRightSidebarClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Barra lateral derecha</h1> </template>
          ></v-checkbox
        >
      </v-col>
    </v-row>
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
      oneRowHeader: null,
      RightSidebarCheckbox: null,
      disable: true,

      menuAlign: [
        { text: "Derecha" },
        { text: "Centro" },
        { text: "Izquierda" },
      ],
      menuSize: [{ text: "Pequeño" }, { text: "Largo" }],
    };
  },
  methods: {
    onNotificationAreaClicked() {
      this.$emit("NotificationAreaApplied", this.notificationCheckbox);
    },
    onPreheaderClicked() {
      this.disable = !this.disable;

      this.$emit("PreheaderApplied", this.PreheaderCheckbox);
    },
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
    onOneRowHeaderClicked() {
      this.disable = false;
      this.$emit("OneRowHeaderApplied", this.oneRowHeader);
    },
    onRightSidebarClicked() {
      this.$emit("RightSidebarApplied", this.RightSidebarCheckbox);
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
