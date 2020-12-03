<template>
  <v-card class="mx-auto">
    <v-navigation-drawer
      width="200"
      class="teal lighten-2"
      dark
      permanent
      app
      :expand-on-hover="AsideHover"
    >
      <v-list>
        <v-list-item class="center">
          <v-list-item-content>
            <v-list-item-title>Previsualización</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: ["AsideHover"],
};
</script>

<style lang="scss" scoped></style>
