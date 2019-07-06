<template>
  <div id="app">
    <v-app>
            <v-toolbar app color="primary" dark>
                <v-toolbar-title>Twinsanity Studios</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat v-on:click="toHome">Home</v-btn>
                    <v-btn flat v-on:click="toGames">Games</v-btn>
                    <v-btn flat v-on:click="toAbout">About</v-btn>
                    <v-btn flat v-on:click="toContact">Contact</v-btn>
                    <v-btn v-if='!signedIn' flat v-on:click="signIn">Sign In</v-btn>
                    <v-btn v-if='signedIn' flat v-on:click="signOut">Sign Out</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer app></v-footer>
      </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toHome: function(){
      this.$router.push('/home')
    },
    toGames: function(){
      this.$router.push('/games')
    },
    toAbout: function(){
      this.$router.push('/about')
    },
    toContact: function(){

    },
    signIn: function(){
      var auth = gapi.auth2.getAuthInstance();
      
      auth.signIn();
    },
    signOut: function(){
      var auth = gapi.auth2.getAuthInstance();
      
      auth.signOut();
    },
    signedInStatusChanged: function(newValue){
      this.signedIn = newValue;
      localStorage.signedIn = newValue;
    },
    onGapiInit: function(auth){
      this.signedIn = auth.isSignedIn.get();
      auth.isSignedIn.listen(this.signedInStatusChanged);
    },
    onGapiLoaded: function(){
      gapi.auth2.init({
        client_id: '689873811630-qijrosv4n3pnj7i41vs78v13v40vu892.apps.googleusercontent.com'
      }).then(this.onGapiInit, function(){
        // Error
        console.error("Error initializing gapi");
      })
    }
  },
  data: function(){
    return {
      signedIn: false
    }
  },
  mounted(){
    // Check if user is signed in
    gapi.load('auth2', this.onGapiLoaded);
  }
}
</script>

<style scoped>

</style>

