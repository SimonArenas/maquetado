<template>
  <v-row class="mt-5">
    <!-- Dominio -->
    <v-col cols="12" md="6" class="no-space">
      <v-text-field
        label="Dominio"
        placeholder="www.dominio.com"
        outlined
        dense
      ></v-text-field>

      <!-- Titulo -->
    </v-col>
    <v-col cols="12" md="6" class="no-space">
      <v-text-field
        label="Título"
        placeholder="Escribir título"
        outlined
        dense
      ></v-text-field>
    </v-col>

    <!-- Logo -->
    <v-col cols="12" md="6" class="no-space">
      <v-file-input
        v-model="files"
        color="blue darken-3"
        counter
        label="Logo"
        placeholder="Subir logo"
        prepend-icon="mdi-paperclip"
        outlined
        :show-size="1000"
        dense
        accept="image/png, image/jpeg, image/bmp"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip v-if="index < 2" color="blue darken-3" dark label small>
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
    </v-col>

    <!-- Tags -->
    <v-col cols="12" md="6" class="no-space">
      <v-text-field
        label="Tags"
        placeholder="Escribir tags"
        outlined
        dense
      ></v-text-field>
    </v-col>

    <!-- Elegir estilos/scripts personalizados -->
    <v-col class="d-flex" sm="12">
      <v-select
        v-model="selectedScriptStyles"
        :items="scriptStyles"
        label="Scripts y estilos para todo el sitio web"
        dense
        outlined
        item-value="text"
        return-object
        @change="onScriptStyles($event)"
      ></v-select>
    </v-col>

    <!-- Agarrar el contenido de la URL -->
    <template v-if="onScriptStyles() == 3">
      <v-col class="no-space" sm="6">
        <v-textarea label="URL" no-resize rows="1" outlined dense></v-textarea>
      </v-col>
      <v-col class="no-space" sm="6">
        <v-textarea
          label="Comprobar url para cambios cada"
          no-resize
          rows="1"
          outlined
          dense
          value="0"
        ></v-textarea>
      </v-col>
      <v-col md="4">
        <v-select
          v-model="selectedUrlStyle"
          label="Seleccionar"
          :items="urlStyle"
          solo
          hint="Usar estilo"
          persistent-hint
          @change="onUrlStyle($event)"
        ></v-select>
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
      <v-col md="4">
        <v-select
          label="Seleccionar"
          :items="urlScript"
          solo
          hint="Usar scripts"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col md="8">
        <v-textarea
          solo
          name="script-personalizado"
          label="Script personalizado"
          value=""
          clearable
        ></v-textarea
      ></v-col>
    </template>

    <!-- Scripts y estilos personalizados -->
    <template v-if="onScriptStyles() == 2">
      <v-col cols="12" class="no-space">
        <v-textarea
          solo
          name="estilo-personalizado"
          label="Estilo personalizado"
          value=""
          clearable
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="no-space">
        <v-textarea
          solo
          name="script-personalizado"
          label="Script personalizado"
          value=""
          clearable
        ></v-textarea>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      selectedScriptStyles: 1,
      selectedUrlStyle: null,
      files: [],
      scriptStyles: [
        { id: 1, text: "Ninguno" },
        { id: 2, text: "Script y estilos personalizados" },
        { id: 3, text: "Agarra el contenido de la URL" },
      ],
      urlStyle: [
        { id: 1, text: "Personalizado" },
        { id: 2, text: "Leer desde la URL" },
      ],
      urlScript: [
        { id: 1, text: "Personalizado" },
        { id: 2, text: "Leer desde la URL" },
      ],
    };
  },
  methods: {
    onScriptStyles() {
      return this.selectedScriptStyles.id;
    },
    onUrlStyle() {
      console.log(this.selectedUrlStyle.id);
      return this.selectedUrlStyle.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.no-space {
  padding: 0px 12px;
}
</style>
