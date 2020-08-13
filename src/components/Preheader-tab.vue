<template>
  <div>
    <!-- Área de notificación -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-checkbox
          v-model="notificationCheckbox"
          @change="onNotificationAreaClicked($event)"
          class="no-space"
        >
          <template v-slot:label> <h1>Area de notificación</h1> </template>
          ></v-checkbox
        >
      </v-col>
      <template v-if="notificationCheckbox">
        <v-col cols="12" class="no-space">
          <v-switch
            v-model="PreheaderFixedSwitch"
            label="Desktop fixed position"
            @change="onPreheaderFixedSwitch($event)"
            class="no-space"
          ></v-switch>
        </v-col>
        <v-col cols="12" class="no-space">
          <v-switch label="Mobile fixed position" class="no-space"></v-switch>
        </v-col>
        <v-col md="8">
          <v-textarea
            solo
            name="estilo-personalizado"
            label="Estilo personalizado"
            value=""
            clearable
          ></v-textarea
        ></v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificationCheckbox: null,
      PreheaderFixedSwitch: null,
    };
  },
  methods: {
    onNotificationAreaClicked() {
      this.$emit("NotificationAreaApplied", this.notificationCheckbox);
    },

    onPreheaderFixedSwitch() {
      this.$emit("PreheaderFixedApplied", this.PreheaderFixedSwitch);
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
.no-space {
  padding: 0px 12px;
}
</style>
