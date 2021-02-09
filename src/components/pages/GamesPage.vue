<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout>
                <v-flex>
                    <h1 class="display-3">Games</h1>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-start>
                <v-flex xs12 md6 lg4 v-for="game in games" v-bind:key="game.title">
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
                    downloadLink: "https://drive.google.com/uc?export=download&id=1QLIeIafkM34Jd7pSNzFf-mI6VHk6byQ8"
                },
                {
                    title: "Rockstar",
                    description: "Turn any YouTube video into a guitar hero game!  Create your song library by downloading songs, and play those songs by hitting keys on your keyboard at the right time.",
                    imageName: "rockstar-image.png",
                    downloadLink: "https://drive.google.com/uc?export=download&id=1lh1LlHX9kEXxXTGm8EN3leutyn07Gawb"
                },
                {
                    title: "One Punch Man: City Defense",
                    description: "Play as a hero in the world of One Punch Man and defend a city against waves of monsters.  The monsters grow in difficulty as the waves go on, and your hero will gain new abilities.  Defeat the God level threat to stop the monster invasion!",
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