<template>
  <div class="pages-tab">
    <h1>Página de Inicio</h1>

    <v-row no-gutters>
      <v-col class="mt-5" cols="6">
        <v-select
          :items="paginaInicio"
          label="Tipo"
          dense
          outlined
          item-value="text"
          return-object
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters class="mt-5">
      <h1>Página de inicio para usuarios registrados</h1>
      <v-col class="mt-5" cols="12">
        <p>
          Configure el contenido de la página. Puede utilizar las siguientes
          variables en el contenido de la página:
        </p>
        <div class="ml-5">
          <p>{$marketPlaceName} - El nombre del grupo marketplace</p>
          <p>{$companyName} - El nombre de la empresa</p>
          <p>{$CIF} - El RFC de la empresa</p>
          <p>
            {$totalUsers} - El número de usuarios disponibles para la empresa
          </p>
          <p>{$name} - El nombre del usuari</p>
          <p>{$email} - El correo electrónico del usuario</p>
          <p>{$externalId} - El ID externo del cliente</p>
          <p>
            {$userType} - cadena con posibles valores de "regular" para el
            usuario normal y "admin" para el administrador de la empresa
          </p>
          <v-col cols="6">
            <v-select
              :items="paginaInicio"
              label="Tipo"
              dense
              outlined
              item-value="text"
              return-object
            ></v-select>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters class="mt-5"
      ><h1>Primer acceso</h1>
      <v-col class="mt-5" cols="12">
        <p>
          Configure el contenido de la página. Puede utilizar las siguientes
          variables en el contenido de la página:
        </p>
        <div class="ml-5">
          <p>{$marketPlaceName} - El nombre del grupo marketplace</p>
          <p>{$companyName} - El nombre de la empresa</p>
          <p>{$CIF} - El RFC de la empresa</p>
          <p>
            {$totalUsers} - El número de usuarios disponibles para la empresa
          </p>
          <p>{$name} - El nombre del usuari</p>
          <p>{$email} - El correo electrónico del usuario</p>
          <p>{$externalId} - El ID externo del cliente</p>
          <p>
            {$userType} - cadena con posibles valores de "regular" para el
            usuario normal y "admin" para el administrador de la empresa
          </p>
        </div>
      </v-col>
      <v-col class="mt-5" cols="4">
        <v-select
          :items="paginaInicio"
          label="Tipo"
          dense
          outlined
          item-value="text"
          return-object
        ></v-select>
      </v-col>
      <v-col class="mt-5" cols="7">
        <v-textarea
          solo
          name="estilo-personalizado"
          label="Estilo personalizado"
          value=""
          clearable
          class="ml-5"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-textarea
      solo
      name="estilo-personalizado"
      label="Estilo personalizado"
      value=""
      clearable
      class="ml-5"
    ></v-textarea>
    <v-textarea
      solo
      name="script-personalizado"
      label="Script personalizado"
      value=""
      clearable
      class="ml-5"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginaInicio: ["Foo", "Bar", "Fizz", "Buzz"],
    };
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
