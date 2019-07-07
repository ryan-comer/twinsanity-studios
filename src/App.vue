<template>
  <div id="app">
    <v-app>
        <v-toolbar app color="primary" dark>
            <v-toolbar-title>Twinsanity Studios</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-on:click="toHome">Home</v-btn>
                <v-btn flat v-on:click="toGames">Games</v-btn>
                <v-btn flat v-on:click="toAbout">About</v-btn>
                <v-btn flat v-on:click="toContact">Contact</v-btn>
                <v-btn v-if='!signedIn' flat v-on:click="signIn">Sign In</v-btn>
                <v-btn v-if='signedIn' flat v-on:click="signOut">Sign Out</v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
              <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="toHome">Home</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="toGames">Games</v-btn>                    
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="toAbout">About</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="toContact">Contact</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if='!signedIn'>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="signIn">Sign In</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if='signedIn'>
                  <v-list-tile-content>
                    <v-btn flat v-on:click="signOut">Sign Out</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
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
// Set up AWS
const AWS = require('aws-sdk')
// Default credentials
AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:ae3d8f3d-bb06-403f-a0fb-c94d857d55e6',
});

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

      if(newValue){
        var auth = gapi.auth2.getAuthInstance();
        var authResponse = auth.currentUser.get().getAuthResponse(true);
        
        // Authorized access
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:ae3d8f3d-bb06-403f-a0fb-c94d857d55e6',
            Logins: {
                'accounts.google.com': authResponse.id_token
            }
        });
      }else{
        // Unauthorized access
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:ae3d8f3d-bb06-403f-a0fb-c94d857d55e6',
        });
      }
    },
    onGapiInit: function(auth){
      this.signedIn = auth.isSignedIn.get();
      auth.isSignedIn.listen(this.signedInStatusChanged);

      // User is signed in, set up credentials
      if(this.signedIn){
        var authResponse = auth.currentUser.get().getAuthResponse(true);

        // Authorized access
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:ae3d8f3d-bb06-403f-a0fb-c94d857d55e6',
            Logins: {
                'accounts.google.com': authResponse.id_token
            }
        });
      }
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
  created(){
    gapi.load('auth2', this.onGapiLoaded);
  }
}
</script>

<style scoped>

</style>

