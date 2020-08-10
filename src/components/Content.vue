<template>
  <v-row no-gutters>
    <v-checkbox
      class="no-space"
      v-model="contentFullWidth"
      @change="onContentFullWidth($event)"
    >
      <template v-slot:label>
        <h4>
          Abarcar todo el ancho de pantalla disponible
        </h4></template
      >
      ></v-checkbox
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      contentFullWidth: null,
    };
  },
  methods: {
    onContentFullWidth() {
      this.$emit("contentFullWidthApplied", this.contentFullWidth);
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
