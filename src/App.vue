<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <v-spacer></v-spacer>
    <router-link to="/home/dashboard">Dashboard</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
