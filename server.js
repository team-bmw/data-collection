// const express = require('express');
const Twitter = require('twitter');
const fs = require('fs');
const { consumer_key, consumer_secret, access_token_key, access_token_secret } = require('./login');

// Change out keys here:
const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret,
});

client.get('favorites/list', { query: 'snow', result_type: 'recent' }, (error, tweets, response) => {

    console.log(tweets)
    //const tweet = JSON.stringify(tweets.statuses[0]);
    // fs.writeFile("tweet.json", tweet, err => {
    //     if (err) console.log('callback');
    // });

    // tweets.statuses.forEach(function (tweet) {
    //     console.log(tweet.text)
    // });
});

