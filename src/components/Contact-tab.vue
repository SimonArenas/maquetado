<template>
  <div class="contact">
    <v-text-field
      v-model="phoneNumber"
      label="Número de teléfono"
      placeholder="Agregar"
      outlined
      dense
      type="number"
    ></v-text-field>
    <v-btn color="primary" @click="onPhoneNumber($event)">Actualizar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: null,
    };
  },
  methods: {
    onPhoneNumber() {
      this.$emit("PhoneNumber", this.phoneNumber);
      //   console.log(this.phoneNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>
