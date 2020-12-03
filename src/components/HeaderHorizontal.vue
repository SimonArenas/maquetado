<template>
  <div>
    <div
      class="header-horizontal"
      v-bind:style="[
        fixedHeader
          ? {
              position: 'fixed',
              zIndex: '3000',
              top: '0',
              left: '0',
            }
          : null,
      ]"
    >
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
        class="pt-0"
      >
        <v-row no-gutters class="pt-2">
          <v-col v-if="showLogoHorizontalHeader" cols="2">
            <div class="header__logo">
              <img src="../assets/logo.png" alt="" />
            </div>
          </v-col>
          <v-col
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
            <div class="header-menu" v-if="ShowOneHeader === false">
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
          </v-col>
          <v-col class="header__extras" cols="auto">
            <div v-if="showProfileHorizontalHeader" class="header__user">
              <img
                class="header__user-profile"
                src="../assets/profile-photo.png"
                alt=""
              />
              <img
                class="header__user-logout"
                src="../assets/logout.png"
                alt=""
              />
            </div>
            <div v-if="showSocialMediaHorizontalHeader" class="header__social">
              <a
                v-if="Checks.FacebookCheck"
                v-bind:href="Links.FacebookLink"
                target="_blank"
                ><img src="../assets/facebook.png" alt=""
              /></a>

              <a
                v-if="Checks.TwitterCheck"
                v-bind:href="Links.TwitterLink"
                target="_blank"
                ><img src="../assets/twitter.png" alt=""
              /></a>
              <a
                v-if="Checks.InstagramCheck"
                v-bind:href="Links.InstagramLink"
                target="_blank"
                ><img src="../assets/instagram.png" alt=""
              /></a>
            </div>
            <div v-if="showContactHorizontalHeader" class="header__contact">
              <img src="../assets/phone.png" alt="" />
              <a class="white--text" :href="'tel:' + phoneNumber">{{
                phoneNumber
              }}</a>
            </div>
          </v-col>
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
  props: [
    "alignMenu",
    "fullWidth",
    "showProfileHorizontalHeader",
    "showSocialMediaHorizontalHeader",
    "showLogoHorizontalHeader",
    "showContactHorizontalHeader",
    "ShowOneHeader",
    "fixedHeader",
    "phoneNumber",
    "Links",
    "Checks",
  ],

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
  width: 100%;
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
.header__logo {
  img {
    display: block;
    width: 60px;
  }
}
.header {
  &__extras {
    display: flex;

    // align-content: center;
    // align-items: center;
    justify-content: flex-end;
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
  &__social {
    display: flex;
    align-items: center;

    img {
      height: 15px;
      width: 15px;
      margin: 0 5px;
    }
  }
  &__contact {
    display: flex;
    align-items: center;
    margin-left: 5px;

    img {
      height: 15px;
      width: 15px;
      margin: 0 5px;
    }
    p {
      margin: 0;
      color: white;
    }
  }
}
</style>
