<template>
    <v-card>
        <v-img :src="images.gameImage"/>
        <v-card-title>{{gameTitle}}</v-card-title>
        <v-card-text>{{gameDescription}}</v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "gamecard",
    props: [
        "gameTitle",
        "gameDescription",
        "gameImageName"
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
</style>
