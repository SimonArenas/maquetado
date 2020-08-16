<template>
  <div class="footer">
    <v-row no-gutters>
      <v-col cols="12" class="py-0">
        <v-checkbox
          v-model="FooterCheckbox"
          @change="onFooterClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Footer</h1> </template>
          ></v-checkbox
        >
      </v-col>
    </v-row>
    <v-switch
      v-if="FooterCheckbox"
      v-model="FooterFixed"
      label="Fixed position"
      @change="onFooterFixedApplied($event)"
      class="no-space"
    ></v-switch>
    <v-textarea
      v-if="FooterCheckbox"
      solo
      name="estilo-personalizado"
      label="Estilo personalizado"
      value=""
      clearable
    ></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FooterCheckbox: null,
      FooterFixed: null,
    };
  },
  methods: {
    onFooterClicked() {
      this.$emit("FooterApplied", this.FooterCheckbox);
    },
    onFooterFixedApplied() {
      this.$emit("FooterFixedApplied", this.FooterFixed);
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
