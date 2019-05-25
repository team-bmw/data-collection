/* eslint-disable handle-callback-err */
/* eslint-disable camelcase */
// Use search/tweets endpoint on loop to fetch tweets

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


const getNextTweets = async (q, count) => {

    const store_tweet_text = [];

    await client.get('search/tweets', { q, count }, (error, tweets, response) => {

        fs.writeFile('output_files/tweets.json', JSON.stringify(tweets), err => {
            if (err) console.log('callback');
        });

        tweets.statuses.forEach(element => {
            store_tweet_text.push(element.text);
        });

        console.log(store_tweet_text);
    })

    return store_tweet_text;
}

const allTweets = getNextTweets('trump', 5).then(tweets => console.log(tweets));




// search for multiple tweets by ID (concatenate tweetIds as comma separated string)
// client.get('search/tweets', { q: 'trump', count: 100 }, (error, tweets, response) => {

//     fs.writeFile('output_files/tweets.json', JSON.stringify(tweets), err => {
//         if (err) console.log('callback');
//     });

//     const store_tweet_text = [];
//     tweets.statuses.forEach(element => {
//         store_tweet_text.push(element.text);
//     });
//     console.log(store_tweet_text.length);
// })

