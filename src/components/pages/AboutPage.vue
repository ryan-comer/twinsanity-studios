<template>
     <v-container fluid grid-list-xl>
            <v-layout>
                <v-flex>
                    <h1 class="display-3">About</h1>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex>
                    <h2 class="display-2">Meet the team</h2>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 md6 v-for="member in teamMembers" v-bind:key="member.name">
                    <personcard v-bind:name='member.name' v-bind:description='member.description'
                        v-bind:roles='member.roles' v-bind:imageName='member.imageName'/>
                </v-flex>
            </v-layout>
        </v-container>
</template>


<script>
import PersonCard from '@/components/PersonCard.vue'

export default {
    components: {
        'personcard': PersonCard
    },
    data: function(){
        return {
            'teamMembers': [
                {
                    'name': 'Ryan Comer',
                    'roles': [
                        'Game Designer',
                        'Game Developer',
                        '3D Artist'
                    ],
                    'description': 'Graduated from the University of Texas at Austin with a degree in electrical and ' +
                    'computer engineering and a focus on software engineering.  Currently working at Dell Technologies, were ' +
                    'he has the opportunity to work on all sorts of cool software projects.  Ryan has a passion for video games ' +
                    'and has been playing them his whole life.  The opportunity to work on video games is a dream come true, and ' +
                    'Ryan can\'t wait to share his creations with the world.'
                }
            ]
        }
    }
}
</script>


<style scoped>
    h1{
        padding: 10px;
        text-align: center;
    }
</style>
