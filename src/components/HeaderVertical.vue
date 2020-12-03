<template>
  <div class="sidebar">
    <!-- Menu vertical pequeño -->
    <div v-if="MenuSize == 'Pequeño'" class="sidebar-small">
      <!-- <nav class="sidebar-small__nav">
        <p style="margin-left:15px; font-size: 10px">Previsualización:</p>
        <router-link
          v-for="navItem in navItems"
          :to="navItem.url"
          :key="navItem.id"
          tag="li"
          ><BaseIcon :name="navItem.icono"
            ><p>{{ navItem.name }}</p></BaseIcon
          ></router-link
        >
      </nav> -->
      <v-card class="mx-auto">
        <v-navigation-drawer
          width="80"
          class="teal lighten-2"
          dark
          permanent
          app
        >
          <v-list>
            <v-list-item class="center">
              <!-- <nav class="sidebar-small__nav">
        <p style="margin-left:15px; font-size: 10px">Previsualización:</p>
        <router-link
          v-for="navItem in navItems"
          :to="navItem.url"
          :key="navItem.id"
          tag="li"
          ><BaseIcon :name="navItem.icono"
            ><p>{{ navItem.name }}</p></BaseIcon
          ></router-link
        >
      </nav> -->
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <div v-if="MenuSize == 'Largo'" class="sidebar-large">
      <!-- <nav class="sidebar-large__nav">
        <p style="margin-left:15px; font-size: 10px">Previsualización:</p>
        <router-link
          v-for="navItem in navItems"
          :to="navItem.url"
          :key="navItem.id"
          tag="li"
        >
          <p>{{ navItem.name }}</p></router-link
        >
      </nav> -->
      <!-- <v-card> -->
        <v-card class="mx-auto">
        <v-navigation-drawer  class="teal lighten-2" dark permanent>
          <v-list>
            <v-list-item class="center">
              <v-list-item-content>
                <v-list-item-title>Previsualización</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </div>
</template>

<script>
import MenuService from "@/services/MenuService.js";
export default {
  props: ["MenuSize"],
  data() {
    return {
      navItems: null,
    };
  },
  components: {},
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
// Pequeño
// .sidebar-small {
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: center;
//   align-content: center;
//   border-right: 1px solid #487eb0;

//   height: 100%;
//   width: 100px;

//   p {
//     font-size: 12px;
//     margin: 0;
//     font-weight: 500;
//   }
//   li {
//     list-style: none;
//     margin-top: 20px;
//     text-align: center;
//     color: $dark-blue;
//   }

//   .sidebar-small__nav {
//     margin-top: 20px;
//   }

//   nav li.router-link-active {
//     border-right: 4px solid #487eb0;
//   }

//   nav li:hover {
//     cursor: pointer;
//   }
// }
// Largo
// .sidebar-large {
//   display: flex;
//   padding-left: 30px;
//   background-color: #e1b12c;
//   color: white;

//   height: 100%;
//   width: 200px;
//   // background-color: red;
//   p {
//     color: white;

//     font-size: 17px;
//     margin: 0;
//     font-weight: 400;
//   }
//   li {
//     list-style: none;
//     margin-top: 20px;
//     color: $dark-blue;
//   }

//   .sidebar-large__nav {
//     margin-top: 20px;
//   }

//   nav li.router-link-active {
//     border-right: 4px solid #487eb0;
//   }

//   nav li:hover {
//     cursor: pointer;
//   }
// }
</style>
