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
          <!-- <v-textarea
            solo
            name="estilo-personalizado"
            label="Estilo personalizado"
            value=""
            clearable
          ></v-textarea -->
          <v-text-field
            v-model="preheaderText"
            label="Agregar texto"
            placeholder="Agregar"
            outlined
            dense
            type="text"
          ></v-text-field>
          <v-row>
            <v-text-field
              v-model="preheaderIconName"
              label="Agregar nombre de icono"
              placeholder="Agregar"
              outlined
              dense
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="preheaderIconColor"
              label="Color hexadecimal"
              placeholder="Agregar"
              outlined
              dense
              type="text"
              class="ml-5"
            ></v-text-field>
          </v-row>
          <h5>
            Visita
            <a href="https://materialdesignicons.com/" target="_blank">Material Design icons</a>
            para ver los nombres de los iconos
          </h5>
          <v-btn class="mt-3" color="primary" @click="onPreheaderText($event)"
            >Actualizar</v-btn
          >
        </v-col>
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
      preheaderText: null,
      preheaderIconName: null,
      preheaderIconColor: "#",
    };
  },
  methods: {
    onNotificationAreaClicked() {
      this.$emit("NotificationAreaApplied", this.notificationCheckbox);
    },

    onPreheaderFixedSwitch() {
      this.$emit("PreheaderFixedApplied", this.PreheaderFixedSwitch);
    },
    onPreheaderText() {
      this.$emit("PreheaderTextApplied", this.preheaderText);
      this.OnPreheaderIconName();
      this.OnPreheaderIconColor();
    },

    OnPreheaderIconName() {
      this.$emit("PreheaderIconNameApplied", this.preheaderIconName);
    },
    OnPreheaderIconColor() {
      this.$emit("PreheaderIconColorApplied", this.preheaderIconColor);
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
