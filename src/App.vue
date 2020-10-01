<template>
 <v-app id="app">
    <Navbar />


    <v-main class="mx-5 mb-4">
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { 
    Navbar 
    },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>
<style>
#app {
    background-color: var(--v-background-base);
}
</style>