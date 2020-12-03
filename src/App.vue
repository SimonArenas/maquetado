<template>
  <v-app class="app">
    <!-- Left sidebar -->
    <LeftSidebar v-if="LeftSidebar" :AsideHover="asideHover" />
    <v-main>
      <NotificationArea
        v-if="showNotificationArea"
        :fixedPreheader="FixedPreheader"
        :preheaderText="PreheaderText"
        :iconName="IconName"
        :iconColor="IconColor"
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
        :phoneNumber="PhoneNumber"
        :Links="SocialMediaLinks"
        :Checks="SocialMediaChecks"
      />
      <Preheader
        v-if="showSubheader"
        :ShowOneHeader="showOneHeader"
        :showProfileSubheader="ShowProfileSubheader"
        :showSocialMediaSubheader="ShowSocialMediaSubheader"
        :showLogoSubheader="ShowLogoSubheader"
        :showContactSubheader="ShowContactSubheader"
        :fixedSubheader="FixedSubheader"
        :phoneNumber="PhoneNumber"
        :Links="SocialMediaLinks"
        :Checks="SocialMediaChecks"
      />
      <!-- <HeaderVertical v-if="showVerticalHeader" :MenuSize="menuSize" /> -->

      <v-row>
        <HeaderVertical v-if="showVerticalHeader" :MenuSize="menuSize" />
      </v-row>
      <!-- Wizard -->
      <v-row>
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
                              @NotificationAreaApplied="
                                OnNotificationAreaApplied
                              "
                              @PreheaderFixedApplied="OnPreheaderFixedApplied"
                              @PreheaderTextApplied="OnPreheaderText"
                              @PreheaderIconNameApplied="OnPreheaderIconName"
                              @PreheaderIconColorApplied="
                                OnPreheaderIconColorApplied
                              "
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
                              @HeaderHorizontalApplied="
                                onHeaderHorizontalApplied
                              "
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

                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">
                                    <v-switch
                                      v-model="switch_socialMedia"
                                      value="1"
                                      label="Redes sociales"
                                      @change="
                                        onShowSocialMediaHorizontalHeader(
                                          $event
                                        )
                                      "
                                      hide-details
                                    ></v-switch>
                                  </span>
                                </template>
                                <span
                                  >Para personalizar redes sociales ir a la
                                  pestaña de "Extras"</span
                                >
                              </v-tooltip>

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

                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">
                                    <v-switch
                                      v-model="switch_socialMedia"
                                      value="2"
                                      label="Redes sociales"
                                      @change="
                                        onShowSocialMediaSubheader($event)
                                      "
                                      hide-details
                                    ></v-switch
                                  ></span>
                                </template>
                                <span
                                  >Para personalizar redes sociales ir a la
                                  pestaña de "Extras"</span
                                >
                              </v-tooltip>

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
                        @MenuRightSidebarApplied="onMenuRightSidebarApplied"
                        @AsideHoverApplied="onAsideHoverApplied"
                        :leftSidebar="menuSize"
                      />
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <!-- Footer -->
                <v-tab> Footer </v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <FooterTab
                        @FooterApplied="onFooterApplied"
                        @FooterFixedApplied="onFooterFixedApplied"
                      />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <!-- Extras -->
                <v-tab> Extras </v-tab>
                <v-tab-item>
                  <v-card>
                    <v-tabs vertical>
                      <!-- <v-tab> Menú </v-tab> -->
                      <v-tab> Contacto </v-tab>
                      <v-tab> Redes sociales </v-tab>

                      <!-- <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          MENÚ
                        </v-card-text>
                      </v-card>
                    </v-tab-item> -->
                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <!-- Contact tab -->
                            <ContactTab @PhoneNumber="onPhoneNumber" />
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <SocialMedia
                              @SocialMedia="onSocialMedia"
                              @SocialMediaCheck="onSocialMediaCheck"
                            />
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
                      <CatalogoTab />
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <!--Páginas -->
                <v-tab> Páginas </v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <PagesTab />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
    <RightSidebar
      v-if="RightSidebar"
      :ShowMenuRightSidebar="showMenuRightSidebar"
    />

    <!-- <v-img src="./assets/img.jpg" aspect-ratio="1.7" contain></v-img> -->

    <Footer
      class="footer"
      :showFooter="ShowFooter"
      :fixedFooter="FixedFooter"
    />
  </v-app>
</template>

<script>
import TiendaTab from "./components/Tienda-tab";
import PreheaderTab from "./components/Preheader-tab";
import HeaderTab from "./components/Header-tab";
import SubHeaderTab from "./components/Subheader-tab";
import AsideTab from "./components/Aside-tab";
import FooterTab from "./components/Footer-tab";
import PagesTab from "./components/Pages-tab";
import CatalogoTab from "./components/Catalogo-tab";
import NotificationArea from "./components/NotificationArea";
import Preheader from "./components/Preheader";
import HeaderHorizontal from "./components/HeaderHorizontal";
import HeaderVertical from "./components/HeaderVertical";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Footer from "./components/Footer";
import ContactTab from "./components/Contact-tab";
import SocialMedia from "./components/SocialMedia";

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
      FixedFooter: null,
      alignMenu: null,
      FullWidth: null,
      showHorizontalHeader: false,
      showVerticalHeader: false,
      showOneHeader: false,
      menuSize: null,
      fullContentWidth: false,
      RightSidebar: null,
      showMenuRightSidebar: false,
      ShowFooter: null,
      LeftSidebar: null,

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
      PhoneNumber: null,
      PreheaderText: null,
      IconName: null,
      IconColor: null,
      SocialMediaLinks: {
        FacebookLink: null,
        TwitterLink: null,
        InstagramLink: null,
      },
      SocialMediaChecks: {
        FacebookCheck: true,
        TwitterCheck: true,
        InstagramCheck: true,
      },
      asideHover: null,
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
    FooterTab,
    PagesTab,
    CatalogoTab,
    Footer,
    TiendaTab,
    AsideTab,

    SubHeaderTab,
    ContactTab,
    SocialMedia,
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
    onFooterFixedApplied() {
      this.FixedFooter = !this.FixedFooter;
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
      this.LeftSidebar = false;
      if (this.showHorizontalHeader) {
        this.showHorizontalHeader = false;
      }
    },
    onOneRowHeaderApplied() {
      this.showOneHeader = !this.showOneHeader;
      // this.showHorizontalHeader = !this.showHorizontalHeader;
    },
    onMenuRightSidebarApplied() {
      this.showMenuRightSidebar = !this.showMenuRightSidebar;
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
    onFooterApplied() {
      this.ShowFooter = !this.ShowFooter;
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
    onPhoneNumber(value) {
      this.PhoneNumber = value;
      return this.PhoneNumber;
    },
    OnPreheaderText(value) {
      this.PreheaderText = value;
      return this.PreheaderText;
    },
    OnPreheaderIconName(value) {
      this.IconName = value;
      return this.IconName;
    },
    OnPreheaderIconColorApplied(value) {
      this.IconColor = value;
      return this.IconColor;
    },
    onSocialMedia(value) {
      this.SocialMediaLinks.FacebookLink = value.facebook;
      this.SocialMediaLinks.TwitterLink = value.twitter;
      this.SocialMediaLinks.InstagramLink = value.instagram;
      return this.SocialMediaLinks;
    },
    onSocialMediaCheck(value) {
      this.SocialMediaChecks.FacebookCheck = value.facebook;
      this.SocialMediaChecks.TwitterCheck = value.twitter;
      this.SocialMediaChecks.InstagramCheck = value.instagram;
      return this.SocialMediaChecks;
    },
    onAsideHoverApplied() {
      this.asideHover = !this.asideHover;
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

.center {
  text-align: center;
}
</style>
