<template>
  <div class="contact">
    <v-text-field
      v-model="Links.FacebookLink"
      label="Link de Facebook"
      placeholder="Agregar"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="Links.TwitterLink"
      label="Link de Twitter"
      placeholder="Agregar"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      v-model="Links.InstagramLink"
      label="Link de Instagram"
      placeholder="Agregar"
      outlined
      dense
    ></v-text-field>
    <v-btn color="primary" @click="onSocialLink($event)">Actualizar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Links: { FacebookLink: null, TwitterLink: null, InstagramLink: null },
    };
  },
  methods: {
    onSocialLink() {
      this.$emit("SocialMedia", {
        facebook: this.Links.FacebookLink,
        twitter: this.Links.TwitterLink,
        instagram: this.Links.InstagramLink,
      });
      //   console.log(this.phoneNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>
