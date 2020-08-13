<template>
  <v-app class="app">
    <NotificationArea
      v-if="showNotificationArea"
      :fixedPreheader="FixedPreheader"
    />

    <HeaderHorizontal
      v-if="showHorizontalHeader"
      :ShowOneHeader="showOneHeader"
      :alignMenu="alignMenu"
      :fullWidth="FullWidth"
      :showProfileHorizontalHeader="ShowProfileHorizontalHeader"
      :showSocialMediaHorizontalHeader="ShowSocialMediaHorizontalHeader"
      :showLogoHorizontalHeader="ShowLogoHorizontalHeader"
      :showContactHorizontalHeader="ShowContactHorizontalHeader"
      :fixedHeader="FixedHeader"
    />
    <Preheader
      v-if="showSubheader"
      :ShowOneHeader="showOneHeader"
      :showProfileSubheader="ShowProfileSubheader"
      :showSocialMediaSubheader="ShowSocialMediaSubheader"
      :showLogoSubheader="ShowLogoSubheader"
      :showContactSubheader="ShowContactSubheader"
      :fixedSubheader="FixedSubheader"
    />
    <v-row>
      <HeaderVertical v-if="showVerticalHeader" :MenuSize="menuSize" />
      <!-- Left sidebar -->
      <LeftSidebar v-if="LeftSidebar" />

      <v-col>
        <v-container :class="{ 'container-2': fullContentWidth }">
          <v-card grow>
            <v-tabs background-color="primary" dark show-arrows>
              <!-- Tienda -->
              <v-tab> Tienda </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <TiendaTab />
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!-- Header -->
              <v-tab> Header </v-tab>
              <v-tab-item>
                <v-card>
                  <v-tabs vertical>
                    <v-tab> Preheader </v-tab>
                    <v-tab> Header </v-tab>
                    <v-tab> Subheader </v-tab>

                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <!-- Pre header tab -->
                          <PreheaderTab
                            @NotificationAreaApplied="OnNotificationAreaApplied"
                            @PreheaderFixedApplied="OnPreheaderFixedApplied"
                          />
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <HeaderTab
                            @PreheaderApplied="OnPreheaderApplied"
                            @fullWidthHorizontalMenuApplied="
                              OnFullWidthHorizontalMenuApplied
                            "
                            @HeaderFixedApplied="OnHeaderFixedApplied"
                            @HeaderHorizontalApplied="onHeaderHorizontalApplied"
                            @HeaderVerticalApplied="onHeaderVerticalApplied"
                            @MenuAlignApplied="onMenuAlignApplied"
                            @VerticalMenuSize="onVerticalMenuSize"
                          />
                          <template v-if="showHorizontalHeader">
                            <v-switch
                              v-model="switch_logo"
                              value="1"
                              label="Logo"
                              @change="onShowLogoHorizontalHeader($event)"
                              hide-details
                            ></v-switch>
                            <v-switch
                              v-model="switch_profile"
                              value="1"
                              label="Perfil y logout"
                              @change="onShowProfileHorizontalHeader($event)"
                              hide-details
                            ></v-switch>
                            <v-switch
                              v-model="switch_socialMedia"
                              value="1"
                              label="Redes sociales"
                              @change="
                                onShowSocialMediaHorizontalHeader($event)
                              "
                              hide-details
                            ></v-switch>
                            <v-switch
                              v-model="switch_contact"
                              value="1"
                              label="Contacto"
                              @change="onShowContactHorizontalHeader($event)"
                              hide-details
                            ></v-switch>
                          </template>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <!-- Subheader tab -->
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <SubHeaderTab
                            @SubheaderApplied="onSubheaderApplied"
                            @OneRowHeaderApplied="onOneRowHeaderApplied"
                            @SubheaderFixedApplied="onSubheaderFixedApplied"
                          />
                          <template v-if="showSubheader">
                            <v-switch
                              v-model="switch_logo"
                              value="2"
                              label="Logo"
                              @change="onShowLogoSubheader($event)"
                              hide-details
                            ></v-switch>

                            <v-switch
                              v-model="switch_profile"
                              value="2"
                              label="Perfil y logout"
                              @change="onShowProfileSubheader($event)"
                              hide-details
                            ></v-switch>

                            <v-switch
                              v-model="switch_socialMedia"
                              value="2"
                              label="Redes sociales"
                              @change="onShowSocialMediaSubheader($event)"
                              hide-details
                            ></v-switch>

                            <v-switch
                              v-model="switch_contact"
                              value="2"
                              label="Contacto"
                              @change="onShowContactSubheader($event)"
                            ></v-switch>
                          </template>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </v-tab-item>

              <!-- Contenido -->
              <v-tab> Contenido </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <Content
                      @contentFullWidthApplied="onContentFullWidthApplied"
                    />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Aside -->
              <v-tab> Aside </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <AsideTab
                      @RightSidebarApplied="onRightSidebarApplied"
                      @LeftSidebarApplied="onLeftSidebarApplied"
                    />
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!-- Footer -->
              <v-tab> Footer </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <Footer
                      @FooterApplied="onFooterApplied"
                      @SwapFooterOrder="onSwapOrder"
                    />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Extras -->
              <v-tab> Extras </v-tab>
              <v-tab-item>
                <v-card>
                  <v-tabs vertical>
                    <v-tab> Menú </v-tab>
                    <v-tab> Contacto </v-tab>
                    <v-tab> Redes sociales </v-tab>

                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          HOLA
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          HOLA
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          HOLA
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </v-tab-item>

              <!-- Catálogo -->
              <v-tab> Catálogo </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    Copy
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!--Páginas -->
              <v-tab> Páginas </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    Copy
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-container>
      </v-col>

      <RightSidebar v-if="RightSidebar" />
    </v-row>

    <SimpleFooter v-if="FooterType == 'Sencillo'" />

    <MultipleFooter v-if="FooterType == 'Múltiple'" :SwapOrder="swapOrder" />

    <!-- <img src="./assets/Header.png" alt="" /> -->
  </v-app>
</template>

<script>
import TiendaTab from "./components/Tienda-tab";
import PreheaderTab from "./components/Preheader-tab";
import HeaderTab from "./components/Header-tab";
import SubHeaderTab from "./components/Subheader-tab";
import AsideTab from "./components/Aside-tab";
import NotificationArea from "./components/NotificationArea";
import Preheader from "./components/Preheader";
import HeaderHorizontal from "./components/HeaderHorizontal";
import HeaderVertical from "./components/HeaderVertical";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Footer from "./components/Footer";
import SimpleFooter from "./components/SimpleFooter";
import MultipleFooter from "./components/MultipleFooter";
export default {
  name: "App",
  data() {
    return {
      showNotificationArea: null,
      showPreheader: null,
      showSubheader: null,
      FixedPreheader: null,
      FixedSubheader: null,
      FixedHeader: null,
      alignMenu: null,
      FullWidth: null,
      showHorizontalHeader: false,
      showVerticalHeader: false,
      showOneHeader: false,
      menuSize: null,
      fullContentWidth: false,
      RightSidebar: null,
      LeftSidebar: null,
      FooterType: null,
      swapOrder: null,
      tab: null,
      ShowProfileHorizontalHeader: false,
      ShowSocialMediaHorizontalHeader: false,
      ShowLogoHorizontalHeader: false,
      ShowContactHorizontalHeader: false,
      ShowProfileSubheader: false,
      ShowSocialMediaSubheader: false,
      ShowLogoSubheader: false,
      ShowContactSubheader: false,
      switch_logo: null,
      switch_profile: null,
      switch_socialMedia: null,
      switch_contact: null,
    };
  },

  components: {
    HeaderTab,
    NotificationArea,
    Preheader,
    PreheaderTab,
    HeaderHorizontal,
    HeaderVertical,
    Content,
    RightSidebar,
    LeftSidebar,
    Footer,
    SimpleFooter,
    MultipleFooter,
    TiendaTab,
    AsideTab,
    SubHeaderTab,
  },
  methods: {
    OnNotificationAreaApplied() {
      this.showNotificationArea = !this.showNotificationArea;
    },
    OnPreheaderApplied() {
      this.showPreheader = !this.showPreheader;
    },
    onSubheaderApplied() {
      this.showSubheader = !this.showSubheader;
    },

    OnPreheaderFixedApplied() {
      this.FixedPreheader = !this.FixedPreheader;
    },
    OnHeaderFixedApplied() {
      this.FixedHeader = !this.FixedHeader;
    },
    onSubheaderFixedApplied() {
      this.FixedSubheader = !this.FixedSubheader;
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
      // this.showHorizontalHeader = !this.showHorizontalHeader;
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
    onLeftSidebarApplied() {
      this.LeftSidebar = !this.LeftSidebar;
    },
    onFooterApplied(value) {
      this.FooterType = value;
      console.log(this.FooterType);
    },
    onSwapOrder() {
      this.swapOrder = !this.swapOrder;
    },
    onShowProfileHorizontalHeader() {
      this.ShowProfileSubheader = false;
      this.ShowProfileHorizontalHeader = !this.ShowProfileHorizontalHeader;
    },
    onShowProfileSubheader() {
      this.ShowProfileHorizontalHeader = false;
      this.ShowProfileSubheader = !this.ShowProfileSubheader;
    },
    onShowSocialMediaHorizontalHeader() {
      this.ShowSocialMediaSubheader = false;
      this.ShowSocialMediaHorizontalHeader = !this
        .ShowSocialMediaHorizontalHeader;
    },
    onShowSocialMediaSubheader() {
      this.ShowSocialMediaHorizontalHeader = false;
      this.ShowSocialMediaSubheader = !this.ShowSocialMediaSubheader;
    },
    onShowLogoHorizontalHeader() {
      this.ShowLogoSubheader = false;
      this.ShowLogoHorizontalHeader = !this.ShowLogoHorizontalHeader;
    },
    onShowLogoSubheader() {
      this.ShowLogoHorizontalHeader = false;
      this.ShowLogoSubheader = !this.ShowLogoSubheader;
    },
    onShowContactHorizontalHeader() {
      this.ShowContactSubheader = false;
      this.ShowContactHorizontalHeader = !this.ShowContactHorizontalHeader;
    },
    onShowContactSubheader() {
      this.ShowContactHorizontalHeader = false;
      this.ShowContactSubheader = !this.ShowContactSubheader;
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
.footer {
  margin-top: auto;
}

.center {
  text-align: center;
}
</style>
