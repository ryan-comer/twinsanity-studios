<template>
    <v-container fluid grid-list-xl>
        <v-layout>
            <v-flex>
                <h1 class='display-3'>{{name}}</h1>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-img :src='image' max-height="500px" contain></v-img>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <h2 class='display-1'>Leave a Review</h2>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex xs6>
                <v-textarea v-model='reviewText' box></v-textarea>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex xs5>
                <v-rating v-model='reviewRating'></v-rating>
            </v-flex>
            <v-flex xs1>
                <v-btn v-on:click='submitReview'>Submit</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data: function(){
        const gameData = {
            'Yugioh Chess': {
                'name': 'Yugioh Chess',
                'imageName':'yugioh-chess-image.png'
            },
            'One Punch Man: City Defense': {
                'name': 'One Punch Man: City Defense'
            }
        }

        // Check for empty image name
        var dataToReturn = gameData[this.$route.params.id];
        if(!dataToReturn['imageName'] || dataToReturn['imageName'] == ''){
            dataToReturn['imageName'] = 'work-in-progress.png'
        }

        // Get the image
        dataToReturn['image'] = require('@/assets/' + dataToReturn['imageName'])

        // Starting values for review
        dataToReturn['reviewText'] = '';
        dataToReturn['reviewRating'] = 0;

        return dataToReturn;
    },
    methods: {
        submitReview: function(){
            
        }
    }
}
</script>


<style scoped>
    h1{
        text-align: center;
    }
    h2{
        text-align: center;
    }
</style>
