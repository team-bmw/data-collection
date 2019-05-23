
const fs = require('fs');
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'vYATO1GVvkWWZ8LUwKXTRUV2Y',
    consumer_secret: 'nNStaod43vloNGehNucQa8bPQ5teT08su0HiWBayGlTsWZ3r3Q',
    access_token_key: '737456983801012226-jDRq30VrUQr7SWUO6g0Qux06nq8D7Fa',
    access_token_secret: 'cokPp4Ss1xkxLo8YmxHjxbeRz2JJwIbZDy54nJrCMHCtk'
});

const getTweets = timeStamp => {

    client.get('tweets/search/30day/dev', { query: 'snow', result_type: 'recent' }, (error, tweets, response) => {
        const tweet = JSON.stringify(tweets.statuses[0]);
        fs.writeFile('tweet.json', tweet, err => {
            if (err) console.log('callback');
        });
    });

}


fs.writeFile('tweet.txt', 'helloworld', err => {
    if (err) console.log('callback');
});

const CronJob = require('cron').CronJob;

const c = new CronJob('* * * * * *', () => {

    client.get('tweets/search/30day/dev', { query: 'snow', result_type: 'recent' }, (error, tweets, response) => {

        console.log(tweets)
        const tweet = JSON.stringify(tweets.statuses[0]);
        fs.writeFile("tweet.json", tweet, err => {
            if (err) console.log('callback');
        });

        // tweets.statuses.forEach(function (tweet) {
        //     console.log(tweet.text)
        // });
    });


}, null, true, 'America/Los_Angeles');

