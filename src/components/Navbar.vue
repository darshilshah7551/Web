<template>
  <nav>
<v-toolbar>
        <v-app-bar flat app> 
          <v-toolbar-items @click="drawer = !drawer" class="grey--text">
          <v-icon left>menu</v-icon>
            </v-toolbar-items>
              <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Todo</span>
          <span>Dhs</span>
                </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-menu offset-y>
                     <template v-slot:activator="{ on, attrs }">
                          <v-btn
                          v-bind="attrs"
                          v-on="on"
                          text
                        >
                          Menu
                          <v-icon right>expand_more</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 
                          <v-list-item>{{link.text}}</v-list-item>
                        </v-list-item>
                      </v-list>
                  </v-menu>
                    <v-btn text color="red">
                      <span>Sign Out</span>
                      <v-icon right>exit_to_app</v-icon>
                    </v-btn>
          </v-app-bar>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="blue">
      <v-row align-self="center">
        <v-col class="mt-5">
          <v-avatar size="150" class="ml-6">
              <img src="/avatar-1.png" alt="">
            </v-avatar>
           
             <p class="white--text">
               <v-subheader class="ml-15 ">
                  The DHS
                </v-subheader>
              </p>
        </v-col>
        <v-col class="mt-3 mb-4">
           <popup/>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
            <v-list-item-content>
               <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title> <br>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import popup from './popup.vue'
export default {
  components: {
      popup
  },
  data() {
    
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>

<style>
</style>



