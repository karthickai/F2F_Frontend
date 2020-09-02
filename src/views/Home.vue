<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      rightDrawer: false,
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },
  mounted() {},
  created() {
    // add app events
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  }
}
</script>

<style lang="sass" scoped>
.setting-fab
  top: 50% !important
  right: 0
  border-radius: 0
</style>
