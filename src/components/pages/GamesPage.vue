<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout>
                <v-flex>
                    <h1>Games</h1>
                </v-flex>
            </v-layout>

            <v-layout wrap justify-start>
                <v-flex md6 v-for="game in games" v-bind:key="game.title">
                    <gamecard v-bind:gameTitle="game.title" v-bind:gameDescription="game.description" 
                    v-bind:gameImageName="game.imageName" v-bind:downloadLink="game.downloadLink"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue'

export default {
    data: function(){
        return {
            games: [
                {
                    title: "Yugioh Chess",
                    description: "Chess ... but with a twist!  This game is 3D chess where each piece is a monster from Yugioh.  This game puts Yugi against Kaiba to see who the true king of games is!",
                    imageName: "yugioh-chess-image.png",
                    downloadLink: "https://twinsanity-studios-unity-games.s3.amazonaws.com/Yugioh+Chess.zip"
                }
            ]
        }
    },
    components: {
        'gamecard': GameCard
    }
}
</script>

<style scoped>
    p{
        padding: 10px;
        text-align: center;
    }
    h1{
        padding: 10px;
        text-align: center;
    }
</style>