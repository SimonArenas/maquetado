<template>
  <div>
    <div class="header-horizontal">
      <v-container
        v-bind:style="[
          fullWidth === true && alignMenu == 'Izquierda'
            ? {
                marginLeft: '0',
              }
            : fullWidth === true && alignMenu == 'Derecha'
            ? { marginRight: '0' }
            : null,
        ]"
      >
        <v-row
          class="items-menu"
          v-bind:style="[
            alignMenu == 'Centro'
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                }
              : alignMenu == 'Izquierda'
              ? {
                  display: 'flex',
                  justifyContent: 'flex-start',
                }
              : { display: 'flex', justifyContent: 'flex-end' },
          ]"
        >
          <!-- <v-spacer></v-spacer> -->
          <div  class="header-menu">
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
      </v-container>
    </div>
  </div>
</template>

<script>
import MenuService from "../services/MenuService";

export default {
  data() {
    return {
      value: false,

      navItems: null,
      openOnHover: true,
      offsetX: false,
      offsetY: true,
      closeOnClick: true,
      closeOnContentClick: true,
    };
  },
  props: ["alignMenu", "fullWidth"],

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
.header-horizontal {
  height: 40px;
  background-color: #2c3e50;
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
}
</style>
