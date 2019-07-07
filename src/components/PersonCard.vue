<template>
    <v-card>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs4 align-self-center>
                    <v-img :src="imagePath" height="100px" contain/>
                </v-flex>
                <v-flex xs8 align-self-center>
                    <v-card-title>
                        <h2 class='display-2'>
                            {{name}}
                        </h2>
                    </v-card-title>
                </v-flex>
                <v-flex xs12 align-self-start>
                    <v-card-text>
                        <p class=''>
                            {{description}}
                        </p>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>


<script>
export default {
    props: [
        'name',
        'description',
        'roles',
        'imageName'
    ],
    data: function(){
        var imageName = this.imageName;
        if(!imageName || imageName == ''){
            imageName = 'default-person-image.jpg'
        }
        return {
            'imagePath': require('@/assets/' + imageName)
        }
    }
}
</script>


<style scoped>

</style>
