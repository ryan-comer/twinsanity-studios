<template>
  <div id="app">
    <v-app>
            <v-toolbar app color="primary">
                <v-toolbar-title>Twinsanity Studios</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat v-on:click="toHome">Home</v-btn>
                    <v-btn flat v-on:click="toGames">Games</v-btn>
                    <v-btn flat v-on:click="toAbout">About</v-btn>
                    <v-btn flat v-on:click="toContact">Contact</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer app>Footer</v-footer>
      </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toHome: function(){
      this.$router.push('home')
    },
    toGames: function(){
      this.$router.push('games')
    },
    toAbout: function(){

    },
    toContact: function(){

    }
  }
}
</script>
