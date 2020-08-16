<template>
  <div>
    <!-- Subheader -->
    <v-row no-gutters>
      <v-col class="py-0">
        <v-checkbox
          v-model="SubheaderCheckbox"
          @change="onSubHeaderClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Subheader</h1> </template>
          ></v-checkbox
        >
      </v-col>
    </v-row>
    <!-- ¿Mostrar menú? -->
    <v-row v-if="SubheaderCheckbox" no-gutters>
      <v-checkbox
        class="no-space"
        v-model="oneRowHeader"
        @change="onOneRowHeaderClicked($event)"
        :disabled="disable"
      >
        <template v-slot:label>
          <h4>
            Mostrar Menú
          </h4></template
        >
        ></v-checkbox
      >
    </v-row>
    <v-switch
      v-if="SubheaderCheckbox"
      v-model="SubheaderFixedSwitch"
      label="Fixed position"
      @change="onSubheaderFixedSwitch($event)"
      class="no-space"
    ></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SubheaderCheckbox: null,
      oneRowHeader: null,
      SubheaderFixedSwitch: null,
      disable: false,
    };
  },

  methods: {
    onSubHeaderClicked() {
      this.$emit("SubheaderApplied", this.SubheaderCheckbox);
    },
    onOneRowHeaderClicked() {
      this.disable = false;
      this.$emit("OneRowHeaderApplied", this.oneRowHeader);
    },
    onSubheaderFixedSwitch() {
      this.$emit("SubheaderFixedApplied", this.SubheaderFixedSwitch);
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
