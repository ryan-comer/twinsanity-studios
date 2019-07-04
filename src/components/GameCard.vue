<template>
    <v-card>
        <v-img :src="images.gameImage"/>
        <v-card-title>
            <h3 class="headline font-weight-light game-title">{{gameTitle}}</h3>
        </v-card-title>
        <v-card-text flex-grow>{{gameDescription}}</v-card-text>
        <v-card-actions>
            <v-btn flat :href="downloadLink" color="primary">Download</v-btn>
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
        return{
            images: {
                gameImage: require('@/assets/' + this.gameImageName)
            }
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
