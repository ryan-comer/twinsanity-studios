<template>
    <v-card>
        <v-img :src="images.gameImage"/>
        <v-card-title>
            <h3 class="headline font-weight-light game-title">{{gameTitle}}</h3>
        </v-card-title>
        <v-card-text>{{gameDescription}}</v-card-text>
        
        <v-card-actions>
            <v-btn flat :href="downloadLink" color="primary">Download</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" v-on:click="visitGamePage">Visit Page</v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
export default {
    name: "gamecard",
    props: [
        "gameTitle",
        "gameDescription",
        "gameImageName",
        "downloadLink"
    ],
    data: function(){
        var imageName = this.gameImageName;
        if(!imageName || imageName == ""){
            imageName = 'work-in-progress.png';
        }
        return{
            images: {
                gameImage: require('@/assets/' + imageName)
            }
        }
    },
    methods: {
        visitGamePage: function(){
            this.$router.push('game/'+this.gameTitle);
        }
    }
}
</script>



<style scoped>
    .game-title{
        text-align: center;
        padding: 10px;
    }
</style>
