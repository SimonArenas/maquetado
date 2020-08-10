<template>
  <div class="preheader__container">
    <v-container class="preheader">
      <div class="preheader__logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <v-spacer></v-spacer>

      <div v-if="ShowOneHeader" class="header-horizontal">
        <v-row class="items-menu">
          <div class="header-menu">
            <v-menu
              :open-on-hover="openOnHover"
              :close-on-click="closeOnClick"
              :close-on-content-click="closeOnContentClick"
              :offset-x="offsetX"
              :offset-y="offsetY"
              v-for="navItem in navItems"
              :key="navItem.id"
            >
              <template v-slot:activator="{ on, attrs }">
                <li dark v-bind="attrs" v-on="on">
                  {{ navItem.name }}
                </li>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Item a</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Item b</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Item c</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-row>
      </div>

      <div class="preheader__user">
        <img
          class="preheader__user-profile"
          src="../assets/profile-photo.png"
          alt=""
        />
        <img class="preheader__user-logout" src="../assets/logout.png" alt="" />
      </div>
    </v-container>
  </div>
</template>

<script>
import MenuService from "../services/MenuService";

export default {
  props: ["ShowOneHeader"],
  data() {
    return {
      navItems: null,
      openOnHover: true,
      offsetX: false,
      offsetY: true,
      closeOnClick: true,
      closeOnContentClick: true,
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
.preheader {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  height: 40px;
  &__container {
    background-color: #3498db;
  }
  &__logo {
    img {
      display: block;
      width: 60px;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    // justify-content: center;
    justify-items: flex-end;
    &-profile {
      display: block;
      height: 30px;
      padding: 0 10px;
    }
    &-logout {
      display: block;
      height: 20px;
      padding: 0 10px;
    }
  }

  p {
    margin: 0;
  }
}

li {
  list-style: none;
  color: white;
  margin: 0 13px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
}
.header-menu {
  display: flex;
  align-content: center;
  margin-right: 20px;
}
</style>
