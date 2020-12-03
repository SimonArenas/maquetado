<template>
  <div class="contact">
    <v-row class="d-flex align-center">
      <v-checkbox
        v-model="Check.facebook"
        @change="onFacebookClicked($event)"
        class="no-space"
      >
      </v-checkbox>

      <v-text-field
        v-model="Links.FacebookLink"
        label="Link de Facebook"
        placeholder="Agregar"
        outlined
        dense
        class="pt-5"
      ></v-text-field>
    </v-row>

    <v-row class="d-flex align-center">
      <v-checkbox
        v-model="Check.twitter"
        @change="onFacebookClicked($event)"
        class="no-space"
      >
      </v-checkbox>
      <v-text-field
        v-model="Links.TwitterLink"
        label="Link de Twitter"
        placeholder="Agregar"
        outlined
        dense
        class="pt-5"
      ></v-text-field>
    </v-row>
    <v-row class="d-flex align-center">
      <v-checkbox
        v-model="Check.instagram"
        @change="onFacebookClicked($event)"
        class="no-space"
      >
      </v-checkbox>
      <v-text-field
        v-model="Links.InstagramLink"
        label="Link de Instagram"
        placeholder="Agregar"
        outlined
        dense
        class="pt-5"
      ></v-text-field>
    </v-row>

    <v-btn color="primary" @click="onSocialLink($event)">Actualizar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Links: { FacebookLink: null, TwitterLink: null, InstagramLink: null },
      Check: { facebook: true, twitter: true, instagram: true },
    };
  },
  methods: {
    onSocialLink() {
      this.$emit("SocialMedia", {
        facebook: this.Links.FacebookLink,
        twitter: this.Links.TwitterLink,
        instagram: this.Links.InstagramLink,
      });
    },
    onFacebookClicked() {
      this.$emit("SocialMediaCheck", {
        facebook: this.Check.facebook,
        twitter: this.Check.twitter,
        instagram: this.Check.instagram,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
