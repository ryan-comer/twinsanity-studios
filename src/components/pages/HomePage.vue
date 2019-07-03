<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout>
                <v-flex>
                    <h1 class="display-3">Home</h1>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12>
                    <p>
                        Welcome to Twinsanity Studios!  We are an indie game development company that focuses on one thing ... fun!
                        Feel free to browse the site and check out the games that we've developed.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>


export default {
    name: "HomePage"
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

