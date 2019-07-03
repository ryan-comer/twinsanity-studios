<template>
    <v-card height="100%">
        <v-img :src="images.gameImage"/>
        <div class="headline font-weight-light game-title">{{gameTitle}}</div>
        <v-card-text>{{gameDescription}}</v-card-text>
        <v-card-actions>
            <v-btn flat :href="downloadLink" color="Primary">Download</v-btn>
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
