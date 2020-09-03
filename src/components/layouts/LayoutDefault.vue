<template>
  <v-app id="inspire" class="app dashboard">
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisiable" />
    <v-main>
      <!-- Page Header -->
      <div class="page-wrapper">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
// import AppFab from '@/components/AppFab'

export default {
  name: 'LayoutDefault',
  components: {
    AppToolbar
    // AppFab
  },

  data() {
    return {
      showDrawer: true
    }
  },
  methods: {
    handleDrawerVisiable() {
      this.showDrawer = !this.showDrawer
    }
  },
  created() {}
}
</script>

<style lang="sass" scoped>
.page-wrapper
  min-height: calc(100vh - 112px - 48px)

.app--toolbar
  .v-toolbar__extension
    padding: 0 !important
</style>
