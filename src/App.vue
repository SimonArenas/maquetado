<template>
  <v-app class="app">
    <NotificationArea v-if="showNotificationArea" />

    <Preheader v-if="showPreheader" :ShowOneHeader="showOneHeader" />
    <HeaderHorizontal
      v-if="showHorizontalHeader"
      :alignMenu="alignMenu"
      :fullWidth="FullWidth"
    />
    <v-row>
      <HeaderVertical v-if="showVerticalHeader" :MenuSize="menuSize" />

      <v-col>
        <v-container :class="{ 'container-2': fullContentWidth }">
          <v-expansion-panels popout>
            <!-- Header -->
            <v-expansion-panel>
              <v-expansion-panel-header>Header</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>

                <Header
                  @NotificationAreaApplied="OnNotificationAreaApplied"
                  @PreheaderApplied="OnPreheaderApplied"
                  @fullWidthHorizontalMenuApplied="
                    OnFullWidthHorizontalMenuApplied
                  "
                  @HeaderHorizontalApplied="onHeaderHorizontalApplied"
                  @HeaderVerticalApplied="onHeaderVerticalApplied"
                  @MenuAlignApplied="onMenuAlignApplied"
                  @OneRowHeaderApplied="onOneRowHeaderApplied"
                  @VerticalMenuSize="onVerticalMenuSize"
                  @RightSidebarApplied="onRightSidebarApplied"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Contenido -->
            <v-expansion-panel>
              <v-expansion-panel-header>Contenido</v-expansion-panel-header>
              <v-expansion-panel-content>
                <Content @contentFullWidthApplied="onContentFullWidthApplied" />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Footer -->
            <v-expansion-panel>
              <v-expansion-panel-header>Footer</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>
                <Footer
                  @FooterApplied="onFooterApplied"
                  @SwapFooterOrder="onSwapOrder"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-col>
      <v-col v-if="RightSidebar" class="no-space" cols="2">
        <RightSidebar />
      </v-col>
    </v-row>
    <SimpleFooter v-if="FooterType == 'Sencillo'" />

    <MultipleFooter v-if="FooterType == 'Múltiple'" :SwapOrder="swapOrder" />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import NotificationArea from "./components/NotificationArea";
import Preheader from "./components/Preheader";
import HeaderHorizontal from "./components/HeaderHorizontal";
import HeaderVertical from "./components/HeaderVertical";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";
import SimpleFooter from "./components/SimpleFooter";
import MultipleFooter from "./components/MultipleFooter";
export default {
  name: "App",
  data() {
    return {
      showNotificationArea: null,
      showPreheader: null,
      alignMenu: null,
      FullWidth: null,
      showHorizontalHeader: false,
      showVerticalHeader: false,
      showOneHeader: null,
      menuSize: null,
      fullContentWidth: false,
      RightSidebar: null,
      FooterType: null,
      swapOrder: null,
    };
  },

  components: {
    Header,
    NotificationArea,
    Preheader,
    HeaderHorizontal,
    HeaderVertical,
    Content,
    RightSidebar,
    Footer,
    SimpleFooter,
    MultipleFooter,
  },
  methods: {
    OnNotificationAreaApplied() {
      this.showNotificationArea = !this.showNotificationArea;
    },
    OnPreheaderApplied() {
      this.showPreheader = !this.showPreheader;
    },
    OnFullWidthHorizontalMenuApplied(value) {
      this.FullWidth = value;
      return this.FullWidth;
    },
    onMenuAlignApplied(value) {
      this.alignMenu = value;
      return this.alignMenu;
    },
    onHeaderHorizontalApplied() {
      this.showHorizontalHeader = !this.showHorizontalHeader;
      if (this.showVerticalHeader) {
        this.showVerticalHeader = false;
      }
    },
    onHeaderVerticalApplied() {
      this.showVerticalHeader = !this.showVerticalHeader;
      if (this.showHorizontalHeader) {
        this.showHorizontalHeader = false;
      }
    },
    onOneRowHeaderApplied() {
      this.showOneHeader = !this.showOneHeader;
      this.showHorizontalHeader = !this.showHorizontalHeader;
    },
    onVerticalMenuSize(value) {
      this.menuSize = value;
      return this.menuSize;
    },

    onContentFullWidthApplied() {
      this.fullContentWidth = !this.fullContentWidth;
    },
    onRightSidebarApplied() {
      this.RightSidebar = !this.RightSidebar;
    },
    onFooterApplied(value) {
      this.FooterType = value;
      console.log(this.FooterType);
    },
    onSwapOrder() {
      this.swapOrder = !this.swapOrder;
    },
  },
};
</script>

<style lang="scss">
.no-space {
  margin: 0;
  padding: 0;
}
.container-2 {
  width: 100%;
  padding: 12px;
  margin-right: 0;
  margin-left: 0;
  @media (min-width: 960px) {
    max-width: 100%;
  }
  @media (min-width: 1264px) {
    max-width: 100%;
  }
  @media (min-width: 1904px) {
    max-width: 100%;
  }
}
.container--fluid {
  max-width: 100%;
}
</style>
