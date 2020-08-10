<template>
  <div>
    <v-row no-gutters align="center">
      <p>Elegir footer</p>
      <v-overflow-btn
        v-model="selectedFooterType"
        :items="footerType"
        item-value="text"
        label="Tipo"
        persistent-hint
        return-object
        single-line
        dense
        class="ml-10"
        @change="onFooterType($event)"
      ></v-overflow-btn>
    </v-row>
    <v-row no-gutters v-if="selectedFooterType.text == 'Múltiple'">
      <v-checkbox
        class="no-space"
        v-model="swapMultipleFooterOrder"
        @change="onswapMultipleFooterOrderClicked($event)"
      >
        <template v-slot:label> <h4>Invertir orden</h4></template>
        ></v-checkbox
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFooterType: true,
      selectedSwapOrder: null,
      swapMultipleFooterOrder: null,
      footerType: [{ text: "Sencillo" }, { text: "Múltiple" }],
    };
  },
  methods: {
    onFooterType() {
      this.$emit("FooterApplied", this.selectedFooterType.text);
    },
    onswapMultipleFooterOrderClicked() {
      this.$emit("SwapFooterOrder", this.selectedSwapOrder);
    },
  },
};
</script>

<style lang="sass" scoped></style>
