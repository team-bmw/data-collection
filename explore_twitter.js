/* eslint-disable handle-callback-err */

// Post, retrieve and engage with Tweets

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


// search for multiple tweets by ID (concatenate tweetIds as comma separated string)
client.get('statuses/lookup', { id: '1050118621198921728,20' }, (error, tweets, response) => {
    fs.writeFile('output_files/lookup.json', JSON.stringify(tweets), err => {
        if (err) console.log('callback');
    });
})

// get tweet ID # 20
client.get('statuses/show/20', (error, tweets, response) => {
    fs.writeFile('output_files/show_tweet.json', JSON.stringify(tweets), err => {
        if (err) console.log('callback');
    });
});

// get the last 100 retweets of tweet # 20
client.get('statuses/retweets/20', (error, tweets, response) => {
    fs.writeFile('output_files/retweets.json', JSON.stringify(tweets), err => {
        if (err) console.log('callback');
    });
});

// get the ids for the last 100 accounts to retweet tweet # 20
client.get('statuses/retweeters/ids', { id: '20' }, (error, tweets, response) => {
    fs.writeFile('output_files/retweeters.json', JSON.stringify(tweets), err => {
        if (err) console.log('callback');
    });
});

// get the ids for the last 100 accounts to retweet tweet # 20
client.get('oembed', { url: 'https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395' }, (error, tweets, response) => {
    fs.writeFile('output_files/embedded.json', JSON.stringify(tweets), err => {
        if (err) console.log('callback');
    });
});
