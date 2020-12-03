<template>
  <v-card class="mx-auto">
    <v-navigation-drawer width="200" class="orange lighten-1" dark permanent right app>
      <v-list v-if="!ShowMenuRightSidebar">
        <v-list-item class="center">
          <v-list-item-content>
            <v-list-item-title>Previsualización</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="sidebar-large">
        <nav v-if="ShowMenuRightSidebar" class="sidebar-large__nav">
          <p style="margin-left:15px; font-size: 10px">Previsualización:</p>
          <router-link
            v-for="navItem in navItems"
            :to="navItem.url"
            :key="navItem.id"
            tag="li"
          >
            <p>{{ navItem.name }}</p></router-link
          >
        </nav>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import MenuService from "@/services/MenuService.js";
export default {
  props: ["ShowMenuRightSidebar"],
  data() {
    return {
      navItems: null,
    };
  },
  mounted() {
    this.getnavItems();
  },
  methods: {
    getnavItems() {
      MenuService.getMenu()
        .then((response) => {
          this.navItems = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.sidebar-large {
  display: flex;
  // background-color: #e1b12c;
  color: white;
  justify-content: center;
  text-align: center;

  // height: 100%;

  // background-color: red;
  p {
    color: white;

    font-size: 17px;
    margin: 0;
    font-weight: 400;
  }
  li {
    list-style: none;
    margin-top: 20px;
    color: $dark-blue;
  }

  .sidebar-large__nav {
    margin-top: 20px;
  }

  nav li:hover {
    cursor: pointer;
  }
}
</style>
