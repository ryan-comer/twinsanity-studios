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
        <v-layout justify-center>
            <v-flex>
                <h2 class='display-1'>Leave a Review</h2>
            </v-flex>
        </v-layout>
        <v-layout justify-space-around row wrap>
            <v-flex xs12 sm5>
                <v-layout ma-0 pa-0>
                    <v-flex xs12 ma-0 pa-0>
                        <v-textarea v-model='reviewText' box></v-textarea>
                    </v-flex>
                </v-layout>
                <v-layout justify-start ma-0 pa-0 row wrap>
                    <v-flex xs12 lg5>
                        <v-rating v-model='reviewRating'></v-rating>
                    </v-flex>
                    <v-flex xs12 lg1>
                        <v-btn v-on:click='submitReview'>Submit</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 sm4>
                <v-layout column class='reviewslist' justify-start align-content-center>
                    <v-flex xs1 class='reviewitem' ma-1 v-for="review in reviews" v-bind:key="review.userName.S + review.date.N">
                        <v-layout justify-start pab-0 mab-0>
                            <v-flex xs12>
                                <div class='body-2'>{{review.userName.S}}</div>
                                <v-rating small readonly :value=Number(review.reviewRating.N)></v-rating>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center pat-0 mat-0>
                            <v-flex xs12>
                                <div class='body-1'>{{review.reviewText.S}}</div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
const uuidv1 = require('uuid/v1');

export default {
    mounted(){
        // Get the reviews
        var ddb = new AWS.DynamoDB();
        
        // Build the query
        var params= {
            TableName: 'twinsanity-reviews',
            KeyConditionExpression: "#t = :t",
            Limit: 10,
            ExpressionAttributeNames: {
                "#t": "id"
            },
            ExpressionAttributeValues: {
                ":t": {"S": this.$route.params.id}
            }
        }

        // Execute the query
        ddb.query(params, this.reviewsQueried);
    },
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
        dataToReturn['reviews'] = [];

        return dataToReturn;
    },
    methods: {
        submitReview: function(){
            var auth = gapi.auth2.getAuthInstance();

            // Figure out if the user is logged in
            if(!auth.isSignedIn.get()){
                alert("Please sign in to post reviews");
                return;
            }

            var authResponse = auth.currentUser.get().getAuthResponse(true);
            
            // Authorized access
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:ae3d8f3d-bb06-403f-a0fb-c94d857d55e6',
                Logins: {
                    'accounts.google.com': authResponse.id_token
                }
            });

            // Set up the Dynamodb object
            var ddb = new AWS.DynamoDB()

            var auth = gapi.auth2.getAuthInstance();
            var userName = auth.currentUser.get().getBasicProfile().getName();

            // Create the review object
            var params = {
                TableName: 'twinsanity-reviews',
                Item: {
                    'id': {S: this.$route.params.id},
                    'userName': {S: userName},
                    'reviewText': {S: this.reviewText},
                    'reviewRating': {N: this.reviewRating.toString()},
                    'date': {N: Math.round((new Date()).getTime() / 1000).toString()},
                }
            }

            // Put the object in the table
            ddb.putItem(params, function(err, data){
                if(err){
                    console.error("Error", err);
                    alert("Error posting review", err);
                }else{
                    console.log("Success", data);
                    alert("Review Submitted!");
                }
            });
        },
        reviewsQueried: function(err, data){
            if (err) {
                console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            } else {
                console.log("Query succeeded.");
                this.reviews = data.Items;
            }
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
    .reviewslist{
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .reviewitem{
        background-color: #eeeeee;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
</style>
